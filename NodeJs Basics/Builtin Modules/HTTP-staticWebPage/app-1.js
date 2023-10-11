//create server - using http module and render static  web page
const http= require('http')
const fs= require('fs')
const path = require('path')

//create server 
//http.createServer(()=>{})
let server = http.createServer((req,resp)=>{
    console.log(req)
    console.log(resp)
    //resp.end("Good Evening")
    resp.end("<h1>Good Evening</h1>")
    //read web page and render
})
server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
   console.log("Server Running on port:8080")
})