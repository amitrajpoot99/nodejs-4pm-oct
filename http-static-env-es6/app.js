import fs from 'fs'
import http from 'http'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path:"config.env"})

let port = process.env.PORT
let host=process.env.HOST

let server=http.createServer((req,resp)=>{
    console.log(req.url)
    if(req.url == "/index/"){
        console.log("Test Case 1234")

        fs.readFile("views/index.html",'utf-8',(err,data)=>{
            if(err) throw err 
            //resp.end("Test Case 123")
            resp.end(data)
        })
    }
     if(req.url == "/about"){
        console.log("Test Case 1234")

        fs.readFile("views/about.html",'utf-8',(err,data)=>{
            if(err) throw err 
            //resp.end("Test Case 123")
            resp.end(data)
        })
    }
    
})
server.listen(port,host,(err)=>{
    if(err)throw err 
    console.log(`Server is Running on port:${port}`)
})