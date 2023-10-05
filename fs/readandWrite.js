//read data.txt and write into new file.
const fs = require('fs')

var data=fs.readFileSync('data.txt', 'utf-8')

fs.writeFileSync('emp.txt',data)
console.log("Written successfully")