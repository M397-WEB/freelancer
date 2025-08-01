const mongoose =require("mongoose");

const techSchema=new mongoose.Schema({
    technologyName:{type:String,default:null},
    techImg:{type:String,default:"no_img.jpg"},
    description:{type:String,default:null},
    status:{type:String,default:"Active"},
    createAt:{type:Date,default:Date.now()}
})

module.exports=new mongoose.model("technologies",techSchema)