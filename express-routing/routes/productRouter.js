import express from 'express'
let router = express.Router()

//API URL: 127.0.0.1:8080/product/
router.get("/",(req,resp)=>{
     resp.send("product- Root Page");
})

// 127.0.0.1:8080/product/all   - get
router.get("/all",(req,resp)=>{
    resp.send("Getting All product")
})
// 127.0.0.1:8080/product/all   - post
router.post("/add",(req,resp)=>{
    resp.send("Inserting new Product Successfully")
})
// 127.0.0.1:8080/product/delete   - delete
router.delete("/delete",(req,resp)=>{
    resp.send("sucucessfully deleting product")
})
export default router