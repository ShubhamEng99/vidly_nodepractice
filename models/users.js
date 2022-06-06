const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
      name:{
          type:String,
          required:true,
          minlength:5,
          maxlength:50
      },
      email:{
          type:String,
          unique:true,
          required:true,
            minlength:5,
          maxlength:50
      },
      password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:250
      },
      isAdmin:{
        type:Boolean
      }

})

const User=new mongoose.model('Userr',userSchema);

module.exports=User;