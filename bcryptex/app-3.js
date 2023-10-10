import bcrypt from 'bcrypt'
let user={
    name:"rahul",
    email:'rahul@gmail.com',
    mobile:'9591619191',
    password:'iloveindia'
}
let salt = bcrypt.genSaltSync(10)

var new_Mobile  = bcrypt.hashSync(user.mobile,salt)
var new_Password=bcrypt.hashSync(user.password,salt)

/* console.log(new_Mobile)
console.log(new_Password)
console.log(user) */
user = {
    ...user, password:new_Password, mobile:new_Mobile
}

/* console.log(user)
 */
let flag = bcrypt.compareSync("iloveindia", user.password)
if(flag){
    console.log("login success")
}
else{
    console.log("Login failed! pls reset password")
}