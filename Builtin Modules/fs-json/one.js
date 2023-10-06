//JSON.strigify()
//JSON.parse()

let emp = {
    eid:101,
    ename:"Rahul Gandhi",
    esal:45000
}
console.log(typeof emp)

let emp_String=JSON.stringify(emp)
console.log(emp_String)
console.log(typeof emp_String)

emp=JSON.parse(emp_String)

console.log(emp)