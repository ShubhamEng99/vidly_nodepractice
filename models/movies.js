const mongoose=require('mongoose');
const {genreschema}=require('./genres')
const movieSchema=new mongoose.Schema({
      title:{
          type:String,
          required:true,
          minlength:5,
          maxlength:50
      },
      genre:{
        genreschema
      },
      numberinstock:{
          type:Number,
          required:true,
          min:0,
          max:255
      },
      dailyrentalrate:{
        type:Number,
        required:true,
        min:0,
        max:255
      }
})

const Movie=new mongoose.model('Movie',movieSchema);

module.exports=Movie;