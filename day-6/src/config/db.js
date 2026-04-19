const mongoose=require("mongoose")

async function connectToDB() {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Db is Connected with Server")
}

module.exports=connectToDB