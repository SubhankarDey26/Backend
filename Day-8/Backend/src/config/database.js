const mongoose=require("mongoose")


function conncetToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database is Connected")
    })
}
module.exports=conncetToDb