const mongoose=require("mongoose")


const userSchema=new mongoose.Schema(
{
    name:String,
    email:{
        type:String,
        unique:[true,"WIth This Email UserAccount already Exist"]
    },
    password:String
})



const userModel=mongoose.model("users",userSchema)
module.exports=userModel