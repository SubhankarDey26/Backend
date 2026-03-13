const mongoose =require("mongoose")


async function connectTODb(){
   await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Conneted to DB")
    })
    .catch(err=>{
        console.error(err)
    })
}

module.exports=connectTODb