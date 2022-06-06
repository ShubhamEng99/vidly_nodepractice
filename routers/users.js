const express=require('express');
const router=express.Router();
const User=require('../models/users')
const _=require('lodash'); //by convention we use _
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
const config=require('config')
const middleware=require('../middleware/auth')

router.post('/register',async (req,res)=>{
    let user=await User.findOne({email:req.body.email})
    if(user){
        return res.send('user exist ')
    }
     user=new User(_.pick(req.body,['name','email','password']))
     const salt=await bcrypt.genSalt(10);
     user.password=await bcrypt.hash(user.password,salt);
    user=await user.save();
    res.send(_.pick(user,['name','email']))
})

router.post('/login',async (req,res)=>{
    const user=await User.findOne({email:req.body.email});
    if(!user){return res.status(400).send("Invalid email or password")}

    const validpassword=await bcrypt.compare(req.body.password,user.password);
    if(!validpassword){return res.status(400).send("Invalid email or password")}
    // we should store secretkey in env variables
    const token=jwt.sign({_id:user._id},'secretkey');
    res.send(token);
})

router.get('/get-user',middleware.authenticate,async (req,res)=>{


    const user=await User.findById(req.user._id);
    res.send(user)
})

module.exports=router;