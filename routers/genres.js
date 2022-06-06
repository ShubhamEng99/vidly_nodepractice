const express=require('express');
const router=express.Router();
const {Genres}=require('../models/genres');


router.get('/',async (req,res)=>{
    const genres=await Genres.find().sort('name');
    res.send(genres)
})

router.post('/create-genre',async (req,res)=>{
    try{
        let genre=new Genres({
            name:req.body.name
        })
        genre=await genre.save();
        res.send(genre)
    }
    catch(err){
        res.send(err.message);
    }
  
})

router.put('/update-genre/:id', async (req,res)=>{
    const genre=await Genres.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true});
    if(!genre){
      return  res.send("does'nt exist")
    }
    res.send(genre)
})

router.delete('/del-genre/:id',async (req,res)=>{
    const genre=await Genres.findByIdAndRemove(req.params.id);
    res.send(genre)

})

router.get('/get-genre/:id',async (req,res)=>{
    const genre=await Genres.findById(req.params.id);
    res.send(genre)
})

module.exports=router;