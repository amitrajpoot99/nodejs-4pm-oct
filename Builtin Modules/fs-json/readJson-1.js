const fs = require('fs')

fs.readFile('emp.json','utf-8',(err,data)=>{
    console.log(data)
    console.log(typeof data)
})