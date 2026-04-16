const express=require("express")

const app=express()  // Server instamce create karna 


//  Route create karna 
app.get('/',(req,res)=>{
    res.send("Hello World")
})

 app.get("/about",(req,res)=>{
    res.send("this is About Page")
 })

app.get('/home',(req,res)=>{
    res.send("This is Home Page")
})

//server start
app.listen(3000,()=>{        
    console.log("Server is Running on PORT 3000")
})