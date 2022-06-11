module.exports.absolute=function(number){
    if(number>0){return number}
    if(number<0){return -number}
    return 0
}

module.exports.greet=function(str){
    return 'Welcome '+str;
}

module.exports.getcurrencies=function(){
    return ['USD','AUD','EUR']
}

module.exports.getproduct=function(id){
   return {productid:id,price:10}
}

module.exports.User=function(username){
if(!username){throw new Error('invalid user')};
return {id:new Date().getTime(),username:username}
}