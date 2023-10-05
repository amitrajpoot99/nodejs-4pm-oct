//read emp.json file from below path
//E:\Training Batch 4\Node Js-4PM\EmpData\emp.json

const fs = require('fs')
fs.readFile('E:/Training Batch 4/Node Js-4PM/EmpData/emp.json', 'utf-8',(err,data)=>{
    if(err) throw err 
    console.log(data)
})