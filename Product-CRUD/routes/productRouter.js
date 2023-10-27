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

/* //Read operation
URL:127.0.0.1:8080/api/all
Method:GET
Required Field */
router.get("/all", async (req,resp)=>{
    console.log("Inside - Get All Products")
    try{
          let products= await Product.find();
          resp.status(200).json(products)
    }
    catch(err){
        console.log(err)
        resp.status(500).json({ message:err})  
     }
})

/*
ULL:127.0.0.1:8080/api/products/6538ff07986455414dbfb6f9
Method:PUT
*/
router.put("/products/:id", async(req,resp)=>{
    let prodId=req.params.id
    console.log(prodId)
    try{
      let updateProduct={
        name:req.body.name,
        image:req.body.image,
        price:req.body.price,
        qty:req.body.qty,
        info:req.body.info
      }
      //product is exists or not 
       let  product=await Product.findById(prodId)
       if(!product){
        return resp.status(401).json({message:"No Product found"})
       }
      product =await Product.findByIdAndUpdate(prodId,{$set:updateProduct},{new:true})
      resp.status(200).json({ msg:"Product Updated", product:product})
    }
    catch(err){
      if(err) throw err 
      resp.status(500).json({message:err.message})
    }
})
/*
ULL:127.0.0.1:8080/api/products/6538ff07986455414dbfb6f9
*/
router.delete("/products/:id",async(req,resp)=>{
    let prodId= req.params.id
    try{

        //product is exists or not 
       let  product=await Product.findById(prodId)
       if(!product){
        return resp.status(401).json({message:"No Product found"})
       }
       product=await Product.findByIdAndDelete(prodId)
       resp.status(200).json({message:"Product Delete", product:product})
       
    }
     catch(err){
      if(err) throw err 
      resp.status(500).json({message:err.message})
    }
})




module.exports = router

