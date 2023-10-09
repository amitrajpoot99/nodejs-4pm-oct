import dotenv from 'dotenv'

dotenv.config({path:"config.env"})

let port = process.env.PORT 
console.log(port)