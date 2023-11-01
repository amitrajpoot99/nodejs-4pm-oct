/* import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import path from 'path'  */
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const path = require('path')

//create express app
let app = express()

dotenv.config({path:'config/config.env'})
//app.use(express.static(path.join(__dirname, "public")))
let port = process.env.PORT 
let host = process.env.HOST 
//create root request 


app.get("/", (request,response)=>{
    //response.send("Helllo,GE")
    //response.sendFile(path.join(process.cwd(),"public", 'index.html'))
    response.sendFile(path.join(__dirname,"public", 'index.html'))
})
//app - host and port
app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server Running on http://${host}:${port}`)
})