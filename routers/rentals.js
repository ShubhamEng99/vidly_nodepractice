const express=require('express');
const router=express.Router();
const Movie=require('../models/movies');
const Customer=require('../models/customers')
const Rental=require('../models/rentals');
const Fawn = require('fawn');

Fawn.init('mongodb://localhost/vidly_mosh')

router.get('/',async (req,res)=>{
    const rentals=await Rental.find();
    res.send(rentals)
})

router.post('/create-rental',async (req,res)=>{
    try{
        let movie=await Movie.findById(req.body.movieId);
        let customer=await Customer.findById(req.body.customerId);
        if(movie.numberinstock === 0){
            return res.send('not in stock')
        }
        let rental=new Rental({
            customer:{
                _id:customer._id,
                name:customer.name,
                isGold:customer.isGold,
                phone:customer.phone
            },
            movie:{
                _id:movie._id,
                title:movie.title,
                dailyrentalrate:movie.dailyrentalrate
            }

        })
        new Fawn.Task().save('rentals',rental).update('movies',{_id:movie._id},{$inc:{numberinstock:-1}}).run()
        res.send(rental)
    }
    catch(err){
        res.send(err.message);
    }
  
})


module.exports=router;