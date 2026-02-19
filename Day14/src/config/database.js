const mongoose=require("mongoose")


 async function connectToDb()
{
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected to DB")
    })
    .catch(err=>{
        console.log("DB connection error")
    })
}

module.exports=connectToDb