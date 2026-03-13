const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
     username: {
        type: String,
        unique: [ true, "User name already exists" ],
        required: [ true, "User name is required" ]
    },
    email: {
        type: String,
        unique: [ true, "Email already exists" ],
        required: [ true, "Email is required" ]
    },
    password: {
        type: String,
        required: [ true, "Password is required" ]
    },
    bio: String,
    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/ag09ehtgk/default%20user.jpg?updatedAt=1771508602666"
    }
})

const userModel=mongoose.model("users",userSchema)
module.exports=userModel