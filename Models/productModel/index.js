const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        min: 1,
    
    },
    about: {
        type: String,
        required: true,
        min: 1,
       
    },
    price: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    bill: {
        type: String,
        required: true,
    },
    box: {
        type: String,
        required: true,
    },
    warranty: {
        type: String,
        required: true,
    },
    accessories: {
        type: String,
        required: true,
    },
    category :{
        type:String,
        required:true,
    },
    bids :{
        type:Array,
        default:[],
        required:true,
    }   ,
  images :{
        type:String,
        
    },
    postedBy:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        
    },
    productStatus:{

        type:String,
        default:"pending"       
    }


}, {
    timestamps: true
})

module.exports.Product = new mongoose.model("Product", productSchema)