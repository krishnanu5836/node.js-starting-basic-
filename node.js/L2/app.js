//this code is for send the response
const http=require('http');

const server=http.createServer((req,res)=>
{
    console.log(req.url,req.method,req.headers);
    if (req.url==='/'){

res.write('<html>');
res.write('<head><title>krishnanu</title><head>');
res.write('<body>default</body>');
res.write('</html>');
res.end();
return;
    }
    else if(req.url==='/about')
    {
        res.write('<html>');
res.write('<head><title>krishnanu</title><head>');
res.write('<body><h1>about</h1></body>');
res.write('</html>');
res.end();
return;
    }
    else
    {
        res.write('<html>');
res.write('<head><title>krishnanu</title><head>');
res.write('<body>hii</body>');
res.write('</html>');
res.end();
return;
    }
});

const PORT=3001;
server.listen(PORT,()=>
{
    console.log(`http://localhost:${PORT}`);
})