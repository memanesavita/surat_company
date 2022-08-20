const mysql=require("mysql")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const cookieParser=require("cookie-parser")
const knex=require("../connection/connection")
const { hash } = require("bcrypt")


const signup=(req,res)=>{
    const hash=bcrypt.hashSync(req.body.password,10)
    const data={
        name:req.body.name,
        email:req.body.email,
        password:hash
    }
        knex("registeration").insert(data)
            .then((result)=>{
                res.send({sucess: "signup sucessfully"})
            })
            .catch((err)=>{
                if(err){
                    console.log(err);
                    res.status(400).send({error:err})
                }
            })
}
	

const login=(req,res)=>{
    const user=req.body;
    knex.from("registeration").select("*").where("email",user.email)
        .then((data)=>{
            console.log(data)
            if (data.length>0){
                for (d of data)
                    userPassword=d['password']
                const verified=bcrypt.compareSync(user.password,userPassword.toString());
                console.log(d)
                if(verified){
                    jwt.sign({user_id:d.user_id},"key",(err,token)=>{
                        if (token){
                            console.log(token)
                            res.cookie('jwt',token)
                            res.send({
                                message:"you are signup succesfully",
                                Token:token
                            })
                        }
                    })
                }else{
                    res.send("password is not correct")
                }
            }else{
                res.status(403).send("user doen't exist")
            }
        })
}



const verifyToken=(req,res,next)=>{
    try{
        var token=req.cookies.jwt
        console.log(token)
        var decode=jwt.verify(token,'key')
        req.userdata=decode
        console.log(decode)
        next()
    }catch(err){
        console.log(err)
        res.send({message:'invalid token'})
    }
}


const post_data=(req,res)=>{
    const user={
        title:req.body.title,
        Body:req.body.Body,
        Created_By:req.body.Created_By,
        ActiveInactive:req.body.ActiveInactive,
        Geo_location:req.body.Geo_location
    }
    console.log(user)
    knex("post_data").insert(user)
        .then((data)=>{
            res.send({message:"post successfully"})
        })
        .catch((err)=>{
            if (err){
                res.status(400).send({error:err})  
            }
        })
}


module.exports={signup,login,verifyToken,post_data}


















