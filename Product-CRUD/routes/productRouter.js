const express= require('express')
const router = express.Router()
//import Database model
const Product=require('../models/Product')

router.get("/",(req,resp)=>{
    resp.send("Product - Root Request")
})

//URL:127.0.0.1:8080/api/newproduct

router.post("/newproduct", async (req,resp)=>{
  try{
    let name = req.body.name
    let image=req.body.image 
    let price=req.body.price 
    let qty=req.body.qty 
    let info=req.body.info 
    //new Product({ name:name,image:image,price:price,qty:qty,info:info})
    product= new Product({ name,image,price,qty,info})
    
    await product.save();
    resp.status(200).json({
        result:"Product Inserted Successfully",
        product:product
    })
    console.log(name)
    resp.json({"msg":"Working!"})
  }
  catch(err){
    if(err) throw err 
    resp.status(500).json({message:err.message})
  }
    
})

module.exports = router

