const express=require('express');
const router=express.Router();
const Movie=require('../models/movies');
const {Genres}=require('../models/genres')


router.get('/',async (req,res)=>{
    const movies=await Movie.find();
    res.send(movies)
})

router.post('/create-movie',async (req,res)=>{
    try{
        let genre=await Genres.findById(req.body.genreId);
        if(!genre){return res.send('wrong genre')}
        let movie=new Movie({
            title:req.body.title,
            genre:{
                _id:genre._id,
                name:genre.name
            },
            numberinstock:req.body.numberinstock,
            dailyrentalrate:req.body.dailyrentalrate

        })
        movie=await movie.save();
        res.send(movie)
    }
    catch(err){
        res.send(err.message);
    }
  
})


module.exports=router;