const mongoose=require("mongoose")


const postSchema=new mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    imgurl:{
        type:String,
        required:[true,"Image is requires"]
    },
    user:{
        ref:"users",
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"UserId is required to create a post"]
    }
})


const postModel=mongoose.model("posts",postSchema)

module.exports=postModel