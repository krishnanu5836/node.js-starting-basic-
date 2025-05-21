const express=require('express');
const bodyparser=require('body-parser');
const user=require('./user.js');
const app=express();
const home=require("./controllers/homes");
const anyError=require("./controllers/errors.js");


app.use((req,res,next)=>
{
console.log(req.url,req.method);
next();
});

app.use(user);

app.get("/add-home",home.getaddhome);

app.use(bodyparser.urlencoded());
app.post("/add-home",(req,res,next)=>
{
    console.log(req.body);
    res.send(`<h1>registerd sucessfully</h1>
    <a href="/">go to home</a>`
);
});
app.use(anyError.errors);



const PORT=3001;
app.listen(PORT,()=>
{
console.log(`http://localhost:${PORT}`);
});