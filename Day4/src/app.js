const express=require("express")
const app=express()  //creation of server

app.use(express.json())

const notes=[]

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.send("Notes created")
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]

    res.send("node deleted successfully")
})

app.patch("/notes/:index",(req,res)=>{
    
    notes[req.params.index].description=req.body.description
    res.send("Motes updated successfully")
})

module.exports=app