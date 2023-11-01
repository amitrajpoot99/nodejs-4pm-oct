const express = require('express')
const router = express.Router()
const User=require('../model/User')

//API - localhost:8080/user/
router.get("/",(req,resp)=>{
    resp.send("<h1>User Page</h1>")
})
//localhost:8080/user/all
router.get("/all", async (req,resp)=>{
    try{
        let users= await User.find()
        resp.status(200).json(users)
    }
    catch(err){
        resp.status(500).json({"msg":"Error"})
    }
})

//insert new user
//localhost:8080/user/add
router.post("/add", async (req,resp)=>{
    console.log("inside post req!")
    try{
        let name=req.body.name;
        let email=req.body.email;
        let loc=req.body.loc

        console.log(name)

        let new_user= new User({ name:name,email:email,loc:loc})
        console.log(new_user)

        await new_user.save();
        resp.status(200).json({"msg":"data Inserted", user:new_user})
    }
    catch(err){
        console.log(err)
    }
})


module.exports=router
