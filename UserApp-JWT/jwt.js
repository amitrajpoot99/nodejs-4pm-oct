const jwt = require('jsonwebtoken')

let user_payload={
    "email":"rahul@gmail.com",
    "password":"sfdsfasf"
}
//secret key
let secretkey ="abcxzy123"
let token=jwt.sign(user_payload,secretkey,{expiresIn:60*60})
/* jwt.sign(user_payload, secretkey,(err,token)=>{
    if(err) throw err
    console.log(token)
    
})
 */
console.log(token)
jwt.verify(token,secretkey,(err,decoded)=>{
    if(err) throw err
    console.log(decoded)
}) 