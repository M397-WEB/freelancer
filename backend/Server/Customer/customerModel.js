const moongoose = require("mongoose")

const customerSchema = new moongoose.Schema({
    name:{type:String,default:null},
    email:{type:String,default:null},
    password:{type:String,default:null},
    contact:{type:String,default:null},
    address:{type:String,default:null},
    userType:{type:Number,default:2},//1- admin,2-customer
    userId:{type:moongoose.Schema.Types.ObjectId,default:null,ref:"users"},
    status:{type:String,default:"Unblock"},
    createdAt:{type:Date,default:Date.now()}
})

module.exports = new moongoose.model("customers",customerSchema);