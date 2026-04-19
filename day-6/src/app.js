const express=require("express")

const app=express()
app.use(express.json())

const notes=[]


app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message:"Note Created SUcessfully"
    })
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.delete("/notes/:idx",(req,res)=>{
    delete notes[req.params.idx]
    res.status(204).json({
        message:"Note Deleted SUcessfully"
    })
})

app.patch("/notes/:idx",(req,res)=>{
    notes[req.params.idx].description=req.body.description
    res.status(200).json({
        message:"Note Updated SUcessfully"
    })
})

module.exports=app