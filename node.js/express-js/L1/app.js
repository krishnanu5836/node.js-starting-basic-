const  express=require('express');
const bodyparser=require('body-parser');//Body-parser is the Node.js body-parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it. It's commonly used in web applications built with Express.js to handle form submissions, JSON payloads, and other types of request bodies.
//bodyparser is just like the when we write the input in get req that text will return back to terminal in json format i.e key value pair
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

app.use(bodyparser.urlencoded());

app.post("/contact-us",(req,res,next)=>
{
console.log("handling -contact req",req.url,req.method,req.body);
res.send("<p1>we will contact you");
});


const PORT=3001;
app.listen(PORT,()=>
{
console.log(`http://localhost:${PORT}`);
});