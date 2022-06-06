const express=require('express');
const router=express.Router();
const Customer=require('../models/customers')


router.get('/',async (req,res)=>{
    const customers=await Customer.find().sort('name');
    res.send(customers)
})

router.post('/create-customer',async (req,res)=>{
    try{
        let customer=new Customer({
            name:req.body.name,
            isGold:req.body.isGold,
            phone:req.body.phone
        })
        customer=await customer.save(); 
        res.send(customer)
    }
    catch(err){
        res.send(err.message);
    }
  
})

router.put('/update-customer/:id', async (req,res)=>{
    const customer=await Customer.findByIdAndUpdate(req.params.id,{name:req.body.name,
        isGold:req.body.isGold,
        phone:req.body.phone},{new:true});
    if(!customer){
      return  res.send("does'nt exist")
    }
    res.send(customer)
})

router.delete('/del-customer/:id',async (req,res)=>{
    const customer=await Customer.findByIdAndRemove(req.params.id);
    res.send(customer)

})

router.get('/get-customer/:id',async (req,res)=>{
    const customer=await Customer.findById(req.params.id);
    res.send(customer)
})

module.exports=router;