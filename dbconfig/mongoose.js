const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/vidly_mosh').then(res=>console.log('connected to db')).catch(err=>console.log(err))
