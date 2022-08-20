const express=require("express")
const{signup, login, verifyToken, post_data}=require("../controller/controller")
const router=express.Router()
router.post('/signup',signup)
router.post("/login",login)
router.post("/post_data",verifyToken,post_data)


module.exports=router