//create server - using http module and render static  web page
const http= require('http')
const fs= require('fs')
const path = require('path')

//create server 
//http.createServer(()=>{})
let server = http.createServer((req,resp)=>{
   //read index.html and send to browser as resp
   fs.readFile('index.html','utf-8',(err,data)=>{
    if(err) throw err 
    resp.end(data);
   })
})
server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
   console.log("Server Running on port:8080")
})