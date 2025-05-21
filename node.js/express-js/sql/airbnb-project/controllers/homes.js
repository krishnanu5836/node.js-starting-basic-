const path=require('path');
exports.getaddhome=(req,res,next)=>
{
    console.log("Handling /contact-us for GET", req.url, req.method);
       res.sendFile(path.join(__dirname,'../html','addhome.html'));
}