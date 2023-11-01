const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
//create exprss app 
const app = express()
const port = 8080
const host = '127.0.0.1'
//to read data from form/post man tool
app.use(express.json())
//API URL: 127.0.0.1:8080/
app.get("/",(req,resp)=>{
    resp.send({"msg":"Root Request"})
})
//API URL: 127.0.0.1:8080/all
app.get("/all",(req,resp)=>{
    const empData=getEmpData()
    resp.send(empData)
})
//API 127.0.0.1:8080/emp/add
app.post("/emp/add",(req,resp)=>{
    let empData= req.body
    console.log(empData)
    let employees=getEmpData()
    console.log(typeof employees)

    let empExist=employees.find((emp)=>emp.ename ==empData.ename )
    if(empExist){
        return resp.send({"msg":"Employee Already ! Please Try"})
    } 
    employees.push(empData)
    saveEmpData(employees)
    resp.send({"msg":"Emp inserted successfully"})

})
//API URL: 127.0.0.1:8080/emp/del/vel
app.delete("/emp/del/:ename",(req,resp)=>{
    //how to read url data
    let ename=req.params.ename
    //console.log(ename)
    let employees = getEmpData()
    //console.log(employees)
    let new_Employees=employees.filter(emp=>emp.ename != ename)
    //console.log(new_Employees)

    saveEmpData(new_Employees)
    resp.send({"msg":"Emp record ! Deleted successfully"})
})
let saveEmpData = (employees)=>{
    fs.writeFileSync('emp.json',JSON.stringify(employees))
}
let getEmpData = ()=>{
    //read json file
    let empData=fs.readFileSync('emp.json','utf-8') 
    return JSON.parse(empData)
}
app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server Running on http://${host}:${port}`)
})