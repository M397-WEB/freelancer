const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/Freelancer_Manisha")
.then(()=>{
    console.log("Database is connected successfully. :)");
})
.catch((error)=>{
    console.log("Database is not connected.  :)");
})