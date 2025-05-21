const express=require('express');
const bodyparser=require('body-parser');
const user=require('./user.js');
const app=express();


app.use((req,res,next)=>
{
console.log(req.url,req.method);
next();
});

app.use(user);

app.get("/add-home",(req,res,next)=>
{
    console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(
      `<h1>Register your home here:</h1>
     <form action="/add-home" method="POST">
        <input
          type="text"
          name="houseName"
          placeholder="Enter the name of your house"
        />
        <input type="submit" />
      </form>`)
});

app.use(bodyparser.urlencoded());
app.post("/add-home",(req,res,next)=>
{
    console.log(req.body);
    res.send(`<h1>registerd sucessfully</h1>
    <a href="/">go to home</a>`
);
});
app.use((req, res, next) => {
  res.status(404).send("<h1>404 not found</h1>");
});



const PORT=3001;
app.listen(PORT,()=>
{
console.log(`http://localhost:${PORT}`);
});