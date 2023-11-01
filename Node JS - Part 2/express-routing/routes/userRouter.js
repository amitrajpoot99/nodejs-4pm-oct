import express from 'express'
let router = express.Router();

//API URL: 127.0.0.1:8080/user/
router.get("/",(req,resp)=>{
     resp.send("User- Root Page");
})

//API URL: 127.0.0.1:8080/user/all/
router.get("/all",(req,resp)=>{
     resp.send("All ser");
})

//API URL: 127.0.0.1:8080/user/add
router.post("/add",(req,resp)=>{
    resp.send("add User");
})

//API URL: 127.0.0.1:8080/user/update
router.put("/update",(req,resp)=>{
     resp.send("updating User");
})

//API URL: 127.0.0.1:8080/user/delete
router.delete("/delete",(req,resp)=>{
     resp.send("deleting User");
})



export default router