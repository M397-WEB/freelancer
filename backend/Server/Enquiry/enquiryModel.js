const mongoose = require("mongoose")

const enquirySchema = new mongoose.Schema({
    name:{type:String,default:null},
    email:{type:String,default:null},
    subject:{type:String,default:null},
    message:{type:String,default:null},
    status:{type:String,default:"Pending"},
    createdAt:{type:Date,default:Date.now()}
})

module.exports = new mongoose.model("enquiries",enquirySchema);