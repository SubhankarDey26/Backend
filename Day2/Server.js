
import express from "express";

const app=express();  //server instance create krna 

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get("/about",(req,res)=>{
    res.send("This is About Page")
})


app.get("/home",(req,res)=>{
    res.send("this is home page")
})

app.listen(3000) //server start