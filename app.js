const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
app.use(express.json())
dotenv.config()
app.use(cors())
const connect = () => {
    return mongoose.connect(process.env.MONGO_URL)
}
require("./mainRoutes")(app);
console.log(process.env.PORT)
app.listen(process.env.PORT, () => {
    connect() 
    console.log("connected with databse")
})          