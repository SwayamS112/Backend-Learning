const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("server is ready")
})

const port = process.env.PORT || 3030;

app.get("/api/jokes",(req,res)=>{
const jokes = [
    {
        id: 1,
        title:'this is first joke',
        content:'this is 1'
    },
    {
        id: 2,
        title:'this is Second joke',
        content:'this is 2'
    },
    {
        id: 3,
        title:'this is third joke',
        content:'this is 3'
    },
    {
        id: 4,
        title:'this is Forth joke',
        content:'this is 4'
    },
    {
        id: 5,
        title:'this is Fifth joke',
        content:'this is 5'
    }
];
res.send(jokes);
})

app.listen(port,function(){
    console.log(`Server is runnig on port ${port}`);
})