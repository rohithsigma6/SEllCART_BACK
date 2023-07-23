const { Product } = require("../index")

module.exports.createProduct= body=>{
    return Product.create(body)
}

module.exports.getProducts=(body)=>{
    return Product.find(body)
}

module.exports.getProduct=body=>{
    return Product.findById(body)
}

