const express= require("express");
const app=express();
const port=5005;
const config=require("./config/db")
const Seeder=require("./config/seeder")
Seeder.adminSeeder()

const cors=require("cors")
app.use(cors())

app.use(express.urlencoded({extended:false}))
app.use(express.json({limit:"50mb"}))
const routes=require("./routes/apiroutes");
app.use("/api",routes)

app.use(express.static(__dirname + "/public"));

app.listen(port,()=>{
    console.log("My project is runing on port:"+" "+port)
})

