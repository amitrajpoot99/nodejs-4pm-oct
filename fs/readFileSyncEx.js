//import fs from 'fs'
const fs = require('fs')
var data=fs.readFileSync('data.txt','utf-8')
console.log(data)