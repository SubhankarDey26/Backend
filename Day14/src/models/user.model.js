const mongoose =require("mongoose")


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"user name already exist"],
        required:[true,"user name is required"]
    },
    email:{
        type:String,
        unique:[true,"Email already exist"],
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    bio:String,
    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/ag09ehtgk/default%20user.jpg"
    }
})

const userModel=mongoose.model("users",userSchema)

module.exports=userModel