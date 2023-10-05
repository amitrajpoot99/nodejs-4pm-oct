//read json file from below path emp/pe/emp.json

const fs =require('fs')
const path= require('path')
fileName = path.join(__dirname,"emp","pe","emp.json")
fs.readFile(fileName,'utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
})
