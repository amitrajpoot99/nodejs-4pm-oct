const express=require('express')
const morgan =require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose =require('mongoose')
const userRouter = require('./routes/userRouter')
//create epxress 
let app = express()
dotenv.config({path:'./config/config.env'})


let port = process.env.PORT
let host = process.env.Host
let db_url = process.env.Mongo_DB_LOCAL
app.use(cors())
app.use(morgan('tiny'))
//reading form data 
app.use(express.json())


//api - localhost:8080/
app.get("/",(req,resp)=>{
    resp.send("Home Page")
})
app.use("/user",userRouter)
mongoose.connect(db_url)
        .then((resp)=>{
            console.log("Mongo DB connection successfull")
        })
        .catch((err)=>{
            console.log(err)
        })


app.listen(port,host,(err)=>{
    if(err) throw err

    console.log("Server is Running.....")
})