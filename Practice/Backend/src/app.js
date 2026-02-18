const express=require("express")
const noteRoute=require("./routes/note.routes")
const app=express()


app.use(express.json())
app.use("/api",noteRoute)




module.exports=app