const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRouter = require('./routes/userRouter')

//create server/app
let app = express()
//loading env variable using dotenv package
dotenv.config({path:'./config/config.env'})
//read form data
app.use(express.json())

//create middleware - http logger
app.use(morgan('tiny'))

const port =process.env.PORT
const host=process.env.HOST 
const mongo_url=process.env.MONGO_DB_LOCAL_URL

app.get("/",(req,resp)=>{
    resp.send("<h1>Home Page</h1>")
})
app.use("/user",userRouter)
//connect mongo db 
mongoose.connect(mongo_url).then((response)=>{
    console.log(`Mongo Connection Successfull!`)
}).catch(()=>{})

app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`server running on http:${host}:${port} `)
})