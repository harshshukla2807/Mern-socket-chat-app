const express= require("express");
const dotenv=require("dotenv")
const chats = require("./data/data");

const PORT=process.env.PORT || 3000

const app=express();

app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/api/chats",(req,res)=>{
    res.send(chats)
})

app.get("/api/chats/:id",(req,res)=>{
   const singlechat= chats.find((c)=>c._id=req.params.id)
   res.send(singlechat)
})


app.listen(PORT,console.log(`server started on port ${PORT}`))