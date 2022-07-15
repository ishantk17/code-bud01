const express=require('express');
const user = require('../model/userSchema');
const router=express.Router();
const bycrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
require("../db/conn");
const User=require("../model/userSchema");

router.get('/',(req,res)=>{
    res.send(`Hello world from server of router.js`);
});
//vs code shortcut to select multiple cursors simply press alt key and move ur cursor wherever u want
//the below code is using promise method
/*
router.post('/signup',(req,res)=>{
    const {name,email,phone,password,cpassword}=req.body;

    if(!name|| !email|| !phone|| !password|| !cpassword){
        return res.status(422).json({error:"please fill all the required fields"});
    }

    User.findOne({email:email})
    .then((userFound)=>{
       if(userFound){
        return res.status(422).json({error:"user already exists"});
       }

       const user=new User({name,email,phone,password,cpassword});
       user.save().then(()=>{
          res.status(201).json({message:"user added successfully"});
       })
       .catch((err)=>res.status(500).json({error:"failed to register"}));
    })
    .catch((err)=>{console.log(err)});

})
*/

//the below code is using async await
router.post('/signup',async(req,res)=>{
    const {name,email,phone,password,cpassword}=req.body;

    if(!name|| !email|| !phone|| !password|| !cpassword){
        return res.status(422).json({error:"please fill all the required fields"});
    }
    try{
      const userExist= await User.findOne({phone:phone});
     
      if(userExist){
        return res.status(422).json({error:"user with this email address already exists"});
      }
      else if(password!=cpassword){
        return res.status(422).json({error:"password and confirm password not matched"});
      }
      else{
      const user=new User({name,email,phone,password,cpassword});
      //yaha pe 
      await  user.save();
      res.status(201).json({message:"user added successfully"});
      }

    }catch(err){
        console.log(err);
    }

})

router.post('/login',async(req,res)=>{
    
    const {phone,password}=req.body;
    try{
        if(!phone || !password){
          return res.status(422).json({error:"please fill all the required fields"});
        }
        const correctPhone=await User.findOne({phone:phone});
        if(!correctPhone){
            return res.status(400).json({error:"invalid credentials"});
        }
        else{
        const correctPassword=await bycrypt.compare(password,correctPhone.password);

        const token=await correctPhone.generateAuthToken();
        console.log(token);
        //cookie takes two input what should be the name of cookie and what to store in that cookie
        res.cookie("projectcookie",token);

        if(!correctPassword){
            return res.status(400).json({error:"invalid credentials"});
        }
        res.send("signed in successfully");
    }
    }catch(err){
        console.log(err);
    }
});

module.exports=router;