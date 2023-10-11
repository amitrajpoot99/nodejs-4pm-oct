const path=require('path')
const http =require('http')
const fs= require('fs')

let server =http.createServer((req,resp)=>{
    console.log(req.url)
    resp.end("Test Case 123")
})

server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log("Server Running on port No: 8080")
})