const app=require("./src/app")
const mongoose =require("mongoose")


function connectToDb()
{
    mongoose.connect("mongodb+srv://bnksubhankar_db_user:FhJ4Ih0M82UObNsw@cluster0.xfkqm36.mongodb.net/day-6")
    .then(()=>{
        console.log("Connected To Database")
    })
}

connectToDb()

app.listen(3000,()=>{
    console.log("Server is lisiting on PORT 3000")
})