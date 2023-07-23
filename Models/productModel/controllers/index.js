
const { createProduct,getProducts,getProduct } = require('../methods/index')

module.exports.createProduct = async(req,res)=>{
    try{

    const data = await createProduct(req.body)
    return res.send({success:true,data:data,message:"product posted successfully"})
    }
    catch(err){
        console.log(err)
        return res.send({success:false,message:"Error posting product",err})
    }
}   

module.exports.getAllProducts = async(req,res)=>{
    try{
        const response = await getProducts(req.body)
        return  res.send({success:true,message:"fetched products successfully",data:response})

    }
    catch(err){
        return res.send({success:false,message:"Error Fetching products",err})
    }
}

module.exports.getUserProducts = async(req,res)=>{
    try{
        
        const response = await getProducts({postedBy:req.body.userid})
        return  res.send({success:true,message:"fetched products successfully",data:response})

    }
    catch(err){
        return res.send({success:false,message:"Error Fetching products",err})
    }
}

module.exports.getProduct= async(req,res)=>{
    try{       
        console.log(req.body)
        const response = await getProduct({_id:req.body._id})
        console.log(response)
        return  res.send({success:true,message:"fetched product successfully",data:response})
    }
    catch(err){
        console.log(err)
        return res.send({success:false,message:"Error Fetching products",err})
    }
}