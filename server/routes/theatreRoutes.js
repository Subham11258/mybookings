const router = require('express').Router();
const Theatre = require('../models/theatreModel');

router.post('/add-theatre',async(req,res)=>{
    try{
        const newTheatre = new Theatre(req.body);
        await newTheatre.save();
        res.send({
            success:true,
            message:'New theatre has been added'
        })
    }
    catch(err){
        res.send({
            success:false,
            message:err.message,
        })
    }
    
});

router.get('/get-all-theatres',async(req,res)=>{
    try{
        const allTheatres = await Theatre.find().populate('owner');
        res.send({
            success:true,
            message:'All theatres fetched',
            data:allTheatres,
        })
    }
    catch(err){
        res.send({
            success:false,
            message:err.message,
        })
    }
})

router.put('/delete-theatre',async(req,res)=>{
    try{
        await Theatre.findByIdAndDelete(req.body.id);
        res.send({
            success:true,
            message:'The theatre has been deleted'
        })
    }
    catch(err){
        res.send({
            success:false,
            message:err.message,
        })
    }
})