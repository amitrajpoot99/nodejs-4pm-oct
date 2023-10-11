import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import path from 'path'


//create express app
let app=express()
app.use(morgan('dev'))
dotenv.config({path:'config/config.env'})
let port = process.env.PORT 
let host = process.env.HOST

app.get("/",(req,resp)=>{
    
    resp.sendFile(path.join(process.cwd(),"public",'index.html'))
    
})
app.get("/contact",(req,resp)=>{
resp.sendFile(path.join(process.cwd(),"public",'contact.html'))
})
app.get("/login",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"public",'login.html'))
})

//create server and listen
app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log("server running")
})