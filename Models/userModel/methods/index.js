const { User } = require("../index")

module.exports.createUser = body=>{
    return User.create(body)
}

module.exports.findEmail=body=>{
    return User.findOne(body)
}

module.exports.findUserById=body=>{
    return User.findById(body)
}