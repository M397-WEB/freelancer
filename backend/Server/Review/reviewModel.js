const mongoose =require("mongoose");

const reviewSchema=new mongoose.Schema({
    orderId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"posts"},
    clientId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"customers"},
    rating:{type:String,default:null},
    reviewMessage:{type:String,default:null},
    status:{type:String,default:"Active"},
    createAt:{type:Date,default:Date.now()}
})

module.exports=new mongoose.model("reviews",reviewSchema)