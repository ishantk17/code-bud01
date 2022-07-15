const dotenv=require('dotenv');
const mongoose=require('mongoose');
const express=require('express');
const app=express();
dotenv.config({path:'./config.env'});
require('./db/conn');

//express if any data comes as json convert it to object and show us
//it is a middleware
app.use(express.json());

//this is also a middleware
app.use(require('./router/auth'));

const PORT=process.env.PORT || 5000;
//const user=require("./model/userSchema");

//middle ware
const middleware=(req,res,next)=>{
   console.log("hello my middleware");
   next();
}
/*app.get('/',(req,res)=>{
    res.send(`Hello world from server`);
});*/
app.get('/about',middleware,(req,res)=>{
    console.log("hello my about");
    res.send(`Hello world from about me`);
});
app.get('/contact',(req,res)=>{
    res.send(`Hello world from contact`);
});
app.get('/signin',(req,res)=>{
    res.send(`Hello world from sign in`);
});
app.get('/signup',(req,res)=>{
    res.send(`Hello world from sign up`);
});

if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"));
    const path=require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}


app.listen(PORT,()=>{
   console.log(`server running at port number ${PORT}`);
});