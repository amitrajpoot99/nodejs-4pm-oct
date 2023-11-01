import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import userRouter from './routes/userRouter.js'
import productRouter from './routes/productRouter.js'
//create express app
let app = express()

app.use(morgan('dev'))
//API URL: localhost:8080
//127.0.0.1:8080/
//Method Type:GET
app.get("/",(req,resp)=>{
    resp.send("Home Page")
})

app.use("/user",userRouter)
app.use("/product",productRouter)
/* app.get("user/all",(req,resp)=>{})
app.post("user/add",(req,resp)=>{})
app.put("user/update",(req,resp)=>{})
app.delete("user/delete",(req,resp)=>{})

 */
//create server and list on port number 
app.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log(chalk.blue(`Server Running on port:${8080}`))
})