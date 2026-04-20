const express=require("express")
const noteModel=require("./models/notes.models")
const app=express()

app.use(express.json())


const notes=[]

app.post("/notes",async(req,res)=>{
    const {title,description}=req.body

   const notes= await noteModel.create({
        title,description
    })


    res.status(201).json({
        message:"Note Created SUcessfully",
        notes
    })
})

app.get("/notes",async(req,res)=>{
    const notes =await noteModel.find()

    res.status(200).json({
        message:"Notes Find Succesfully",
        notes
    })
})

app.delete("/notes/:id",async(req,res)=>{
    const id=req.params.id
    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"Note Deleted Sucessfully"
    })
})

app.patch("/notes/:id",async(req,res)=>{
    const id=req.params.id
    const {description}=req.body
    await noteModel.findByIdAndUpdate(id,{description})
    res.status(200).json({
        message:"Note Updated Suceefully"
    })
})


module.exports=app