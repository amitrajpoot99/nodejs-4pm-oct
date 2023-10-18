const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
//create exprss app 
const app = express()
const port = 8080
const host = '127.0.0.1'
//to read data from form/post man tool
app.use(express.json())
//API URL: 127.0.0.1:8080/
app.get("/",(req,resp)=>{
    resp.send({"msg":"Root Request"})
})
//API URL: 127.0.0.1:8080/all
app.get("/all",(req,resp)=>{
    const empData=getEmpData()
    resp.send(empData)
})

let getEmpData = ()=>{
    //read json file
    let empData=fs.readFileSync('emp.json','utf-8') 
    return JSON.parse(empData)
}
app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server Running on http://${host}:${port}`)
})