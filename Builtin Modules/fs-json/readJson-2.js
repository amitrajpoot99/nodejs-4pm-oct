const fs = require('fs')

fs.readFile('emp.json','utf-8',(err,data)=>{
    if(err) throw err 
    let employees=JSON.parse(data)
   console.log(employees[3])
})