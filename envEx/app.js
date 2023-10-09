const dotenv=require('dotenv')

dotenv.config({path:"config.env"})

let port = process.env.PORT 
let host=  process.env.HOST_NAME
console.log(port)
console.log(host)