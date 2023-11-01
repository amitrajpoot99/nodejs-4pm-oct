const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const productRouter = require('./routes/productRouter')

//create server/app
let app = express()
//loading env variable using dotenv package
dotenv.config({path:'./config/config.env'})
let port = process.env.PORT 
let host = process.env.HOST 
let url= process.env.DB_LOCAL_URL

//enable http logger middleware 
app.use(morgan('dev'))

//read form data
app.use(express.json())

//API - URL:http://localhost:8080/ 
app.get("/",(req,resp)=>{
        resp.send("<h1>Cart - Home Page</h1>")
})

app.use("/api",productRouter)

mongoose.connect(url)
.then((response)=>{
    console.log("Mongo DB Connection Successfull")
}).catch((err)=>{
    console.log(err)
    console.log("Enable to Connect")
    process.exit(1)  //Stop the node js process
})

app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server running on http:${host}:${port} `)
})