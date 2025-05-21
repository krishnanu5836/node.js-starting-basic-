const path=require('path');//serving html files 
const express=require('express');
const user=express.Router();//express router -it's a powerful way to organize your routes in separate modules instead of putting everything in a single file.


user.use(express.static(path.join(__dirname,'html')))


user.get("/",(req,res,next)=>
{
    console.log("welcome page",req.url,req.method);
    res.sendFile(path.join(__dirname,'html','home.html'));
});

module.exports=user;

