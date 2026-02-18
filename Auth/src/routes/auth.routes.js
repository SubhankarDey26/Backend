const express=require("express")
const userModel=require("../models/user.model")
const authRouter=express.Router()
const crypto=require("crypto")
const jwt=require("jsonwebtoken")
const cookieParser=require("cookie-parser")

authRouter.post("/register",async(req,res)=>{

    const {name,email,password}=req.body

    const isUserExist=await userModel.findOne({email})
    if(isUserExist){
        return res.status(409).json({
            message:"Email already Exist"
        })
    }
    const user=await userModel.create(
        {name,
        email,
        password:crypto.createHash('sha256').update(password).digest('hex')
    })

    const token=jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET,{expiresIn:"1h"})

    res.cookie("token",token)

    res.status(201).json({
        message:"User Registered Succesfully",
        user:{
            name:user.name,
            email:user.email,
        },token
    })
    
})


authRouter.get("/getme",async(req,res)=>{
    const token=req.cookies.token

    const decoded =jwt.verify(token,process.env.JWT_SECRET)
    console.log(decoded)

    const user=await userModel.findById(decoded.id)
    res.json({
        name:user.name,
        email:user.email
    })
})



authRouter.post("/login",async(req,res)=>{
    const {name,email}=req.body

    const user=await userModel.findOne({email})
    if(user)
    {
        res.json({
            email:user.email,
            name:user.name,
            password:user.password
        })
    }
    else{
        res.status(401).json({
            message:"User Not registered"
        })
    }
})
module.exports=authRouter