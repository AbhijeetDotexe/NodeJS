const express = require('express');
const userModel = require('./users');
const bodyParser = require('body-parser');
// import express from "express";
// import userModel from "../users"


var app = express();
// app.use(express.json());
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', './views')
app.set('view engine', 'ejs')
app.get('/',function(req,res){
    res.send("<h1>This is just for testing purpose</h1>")
})

app.get('/about',function(req,res){
    res.send("<h1>Hello from homepage</h1>")
})

app.get("/create",async function(req,res){
    // let data = await userModel.create({
    //     username: "Ajay",
    //     Age: 22,
    //     categories:["React","JavaScript","Python"]
    // })
    // res.send(data)
    res.render('index.ejs');
})

app.get("/allUsers", async function(req,res){
    let allusers = await userModel.find();
    res.send(allusers);
})

app.get('/delete',async function(req,res){
    let deletedUser = await userModel.findOneAndDelete({
        username:"Ajay"
    })
    res.send(deletedUser);
})

app.post('/create', async function(req,res){
    const body = req.body;
    let data = await userModel.create({
        username: req.body.username,
        Age: req.body.age,
        categories: req.body.categories
    })
    res.send(data);
});

// app.get('/test', function(req,res){
//     res.render('index.ejs');
// })
app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});


