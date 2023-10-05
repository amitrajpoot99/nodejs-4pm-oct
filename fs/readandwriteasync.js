const fs = require('fs')
fs.readFile('data.txt','utf-8',(err,data)=>{

    if(err) throw err 
    fs.writeFile('emp1.txt', data,(err)=>{
        if(err) throw err 
        console.log("Success")
    })

})