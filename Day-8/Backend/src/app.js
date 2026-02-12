const express=require("express")
const cors=require("cors")
const noteModel=require("./models/note.models")
const app=express()

app.use(express.json())
app.use(cors())

app.post("/api/notes",async(req,res)=>{
    const {title,description}=req.body

     const note=await noteModel.create({
        title,description
     })
     res.status(201).json({
        message:"Note Created Sucessfully",
        note
     })


})

app.get("/api/notes",async(req,res)=>{
   const note=await noteModel.find()
   res.status(200).json({
    message:"Notes Fetched Succesfully",
    note
   })
})


app.delete("/api/notes/:id",async(req,res)=>{
    const id=req.params.id
    console.log(id)

    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"Note Deleted Succesfully"
    })
})



app.patch("/api/notes/:id",async(req,res)=>{
    const id=req.params.id
    const {description}=req.body

    await noteModel.findByIdAndUpdate(id,{description})
    res.status(200).json({
        message:"Note Updated"
    })
})


module.exports=app