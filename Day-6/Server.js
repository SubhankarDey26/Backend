const app=require("./src/app")
const mongoose =require("mongoose")


function connectToDb()
{
    mongoose.connect("mongodb")
    .then(()=>{
        console.log("Connected To Database")
    })
}

connectToDb()

app.listen(3000,()=>{
    console.log("Server is lisiting on PORT 3000")
})