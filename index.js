const config=require('config')
const express=require('express');
const app=express();
const db=require('./dbconfig/mongoose');
const router = require('./routers/customers');
const port=process.env.PORT || 8000;

if(!config.get('secretkey')){
    console.log('fatal error');
    process.exit(1)
}

app.use(express.json())
app.use('/api/genres',require('./routers/genres'))
app.use('/api/customers',require('./routers/customers'))
app.use('/api/movies',require('./routers/movies'))
app.use('/api/rentals',require('./routers/rentals'))
app.use('/api/users',require('./routers/users'))

app.listen(port,(err)=>{
    if(err){return}
    console.log("running on port",port)
})







