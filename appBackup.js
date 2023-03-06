const express = require('express')
const mongoose = require('mongoose')
const PORT = 3000
//create and initialized express app
const app = express()

var users={
    name:"Krisha",
    email:"krisha@gmail.com",
    age:25
}

var employees=[
    {
        id:101,
        name:"krisha",
        salary:25000
    },
    {
        id:102,
        name:"irmi",
        salary:20000
    }

]

app.get("/users",(req,res)=>{
    res.status(200).json({
        data:users,
        message:"user data"
    })
})

app.get("/employees",(req,res)=>{
    res.status(200).json({
        data:employees,
        message:"employee data"
    })
})

app.get("/test",(req,res)=>{
    res.status(200).json({
        message:"hello"
    })
})

mongoose.connect("mongodb://127.0.0.1:27017/e_node",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(err){
        console.log("Not connected");
    }else{
        console.log("connected.....")
    }
})


app.listen(PORT,()=>{
    console.log("Server started on port",PORT)
})