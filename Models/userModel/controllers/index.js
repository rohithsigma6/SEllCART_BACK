const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { createUser, findEmail, findUserById } = require('../methods/index')

module.exports.Register = async (req, res) => {
    try {
        const user = await findEmail({ email: req.body.email })
        if (user) {
            return res.status(400).json({ success: false, message: "Email already in use" })
        }
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const data = await createUser({ ...req.body, password: hashedPassword })
        if (data) {
            return res.status(200).json({ success: true, message: "Registration successfull", data })
        }
        return res.status(400).json({ success: false, message: "user registration failed" })
    } catch (err) {
        console.log(err)
        return res.status(400).json({ success: false, message: "user registration failed" })
    }
}
module.exports.Login = async (req, res) => {
    try {
        const user = await findEmail({ email: req.body.email })
        if (!user) {
            return res.status(400).json({ success: false, message: "Please enter an valid Email" })
        }
        const passwordMatch = await bcrypt.compare(req.body.password, user.password)
        if (!passwordMatch) {
            return res.status(400).json({ success: false, message: "Incorrect Password" })
        }
        const token = jwt.sign({ userid: user._id }, process.env.JWTSECRET);
        delete user.password
        return res.status(200).json({ success: true, token })

    } catch (err) {
        console.log(err)
        return res.status(400).json({ success: false, message: "Please enter an valid Email/password", err })
    }
}
module.exports.currentUser = async (req, res) => {
    try {
        const user = await findUserById(req.body.userid)
        if(user){
       return res.send({ success: true, message: "Fetched user successfully", details: user })
        }
        return res.send({ success: true, message: "Error while fetching details" })
    } catch (err) {
       return res.send({ success: true, message: "Error while fetching details", details: err })
    }
}