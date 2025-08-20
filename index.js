require('dotenv').config();

const express = require('express');
const app = express();
const port = 3020;

app.get("/",(req,res)=>{
console.log("This is home route");
res.send("This is home")
})

app.get("/twitter",(req,res)=>{
    res.send("Swayam's Twitter")
})

app.get("/login",(req,res)=>{
    res.send("<h1>Please Login To swayam Website </h1>")
})
 
app.listen(process.env.PORT,function(){
    console.log(`Server is running on port which is in env`);
})