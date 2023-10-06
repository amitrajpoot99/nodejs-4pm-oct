//import http from 'http'
const http = require('http')

let server=http.createServer((req,resp)=>{
    resp.end("Good Evening! Enjoy with Nagpur JJJJJJ")
})
server.listen(8080,(err)=>{
    if(err) throw err
    console.log("Server Running....")
})
