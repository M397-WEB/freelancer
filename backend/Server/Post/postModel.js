const mongoose =require("mongoose");

const postSchema=new mongoose.Schema({
    title:{type:String,default:null},
    description:{type:String,default:null},
    deadline:{type:String,default:null},
    technologyId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"technologies"},
    clientId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"customers"},
    budget:{type:String,default:null},
    status:{type:String,default:"Pending"},
    createAt:{type:Date,default:Date.now()}
})

module.exports=new mongoose.model("posts",postSchema)