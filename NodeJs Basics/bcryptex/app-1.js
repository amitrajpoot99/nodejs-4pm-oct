import bcrypt from 'bcrypt'

let user={
    userName:"rahul",
    password:'iloveindia',
    cc:'4444555566667777',
    cvv:'666'
}
let salt = bcrypt.genSaltSync(10);
let new_CC = bcrypt.hashSync(user.cc,salt)
console.log(user.cc)
console.log(new_CC)