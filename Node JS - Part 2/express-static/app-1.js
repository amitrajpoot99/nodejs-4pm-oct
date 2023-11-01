import express from 'express'
import morgan from 'morgan'
let app =express()

app.use(morgan('combined'))


app.get("/",(req,resp)=>{

    resp.send("Home Page")
})
app.listen(8080,(err)=>{
    if(err) throw err 
    console.log("server running")
})