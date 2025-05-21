const  express=require('express');

const app=express();

app.use((req,res,next)=>
{
console.log("first middle ware",req.url,req.method);
next();
});

app.use((req,res,next)=>
{
console.log("second middle ware",req.url,req.method);
next();
});

// app.use((req,res,next)=>
// {
// console.log("third middle ware",req.url,req.method);
// res.send("<h1>welcome</h1>")
// })

app.get("/",(req,res,next)=>
{
console.log("handling req",req.url,req.method);
 res.send(`<h1>welcome</h1>`) 
});

app.get("/contact-us",(req,res,next)=>
{
console.log("handling req",req.url,req.method);
 res.send(
    `<h1>Please give your details here</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name" />
      <input type="email" name="email" placeholder="Enter your Email" />
      <input type="Submit" />
    </form>
    `);
});

app.post("/contact-us",(req,res,next)=>
{
console.log("handlin -contact req",req.url,req.method);
res.send("<p1>we will contact you");
});


const PORT=3000;
app.listen(PORT,()=>
{
console.log(`http://localhost:${PORT}`);
});