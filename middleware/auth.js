const jwt=require('jsonwebtoken');
const config=require('config')
module.exports.authenticate=function(req,res,next){
    const token=req.header('x-auth-token');
    if(!token){
        return res.send('access denied')
    }
    try{
        const decoded=jwt.verify(token,config.get('secretkey'));
        req.user=decoded;//return the payload we set while signing jwt
        next();
    }
catch(ex){
res.send('invalid token')
}
    
}