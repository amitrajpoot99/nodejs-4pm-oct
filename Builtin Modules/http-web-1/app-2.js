const path=require('path')
const http =require('http')
const fs= require('fs')

let server =http.createServer((req,resp)=>{
    console.log(req.url)
    if(req.url == '/index'){
        fs.readFile("views/index.html",'utf-8',(err,data)=>{
           if(err) throw err 
            resp.writeHead(200,{"context-type":"text/plain"});
            resp.write(data)
            resp.end()
        })
    }
})

server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log("Server Running on port No: 8080.......")
})