const express=require("express")
const router=require("./router/router")
const bodyparser=require("body-parser")
const cookie=require("cookie-parser")

const app=express()
const port=7000
app.use(cookie())
app.use(express.json())
app.use('/',router)
// app.use("/",router)
app.listen(port,()=>{
    console.log("post number 7000 ")
})

