const express = require("express");
const User = require("../models/userModel");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post('/register',async(req,res)=>{
    try{
        const userExist = await User.findOne({email:req.body.email});
    if(userExist){
        res.send({
            success:false,
            message:'user already exist',
        })
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);
    req.body.password = hashedPassword;
    const newUser = await new User(req.body);
    await newUser.save();
    res.send({
        success:true,
        message:"user created successfully",
    })
    }
    catch(err){
        console.log(err);
        res.send({
            success:false,
            message:err,
        })
    }
    
});

router.post('/login',async(req,res)=>{
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user){
            res.send({
                success:false,
                message:'user does not exist'
            })
        }
        const validPassword = await bcrypt.compare(req.body.password,user.password);
        if(!validPassword){
            res.send({
                success:false,
                message:'Invalid password'
            })
        }
        res.send({
            success:true,
            message:'logged in'
        })
    }
    catch(err){
        console.log(err);
    } 
});

module.exports = router;