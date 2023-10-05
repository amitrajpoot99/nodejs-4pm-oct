const fs = require('fs')
let emp={
    eId:101,
    eName:"Rahul",
    eGender:"Male",
    eLoc:["Wayanad","New Delhi","Bangalore"]
}
//write into new json file.
fs.writeFile('user.json', JSON.stringify(emp),(err)=>{
    if(err) throw err 
    console.log("Success")
})