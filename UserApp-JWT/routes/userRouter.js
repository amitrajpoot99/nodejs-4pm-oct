const express = require('express')
let router = express.Router()
let User = require('../model/User')

//API URL:localhost:8080/user/test
router.get("/test",(req,resp)=>{
    resp.send('User Root Request')
})

//new user Registration
router.post("/add", async (req,resp)=>{
    try{
        let {name,email,password}=req.body;
        console.log(name)

        //verify user exists or not 
        let user= await User.findOne({email:email})
        if(user){
            return resp.status(401).json({ 'msg':'User Already Exists' })
        }
        user=new User({name,email,password})
        await user.save()
        resp.status(200).json({"msg":"User Created successfully", user:user})
    }
    catch(err){
    }
})
module.exports=router