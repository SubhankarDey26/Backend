const express=require("express")
const noteModel=require("../model/note.model")
const noteRoute=express.Router()



noteRoute.post("/note",async(req,res)=>{
   const {title,description} = req.body

    const note= await noteModel.create({
        title,description
    })

    res.status(201).json({
        message:"Note Created",
        note
    })
})


noteRoute.get("/note",async(req,res)=>{

    const note=await noteModel.find()

    res.status(201).json({
        message:"Note Fetched Successfully",
        note
    })

})

noteRoute.delete("/note/:id",async(req,res)=>{
    const noteid=req.params.id
    console.log(noteid)

    res.status(200).json({
        message:"Note Deleted"
    })
})


noteRoute.patch("/note/:id",async(req,res)=>{
    const noteid=req.params.id
    const {description}=req.body

    await noteModel.findByIdAndUpdate(id,{description})
    res.status(200).json({
        message:"Note Updated"
    })
})


module.exports=noteRoute