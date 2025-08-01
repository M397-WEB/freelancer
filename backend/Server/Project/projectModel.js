const mongoose =require("mongoose");

const projectSchema=new mongoose.Schema({
    message:{type:String,default:null},
    attachment:{type:String,default:"no attachment"},
    orderId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"posts"},
    clientId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"customers"},
    completionDate:{type:String,default:null},
    status:{type:String,default:"Active"},
    createdAt:{type:Date,default:Date.now()}
})

module.exports=new mongoose.model("projects",projectSchema)