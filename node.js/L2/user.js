const http=require('http');

const server=http.createServer((req,res)=>
{
    console.log(req.url,req.method,req.headers);
    if(req.url==='/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>krishnanu singh</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');//form action is for url where the data is stored
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male" />')
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female" />')
    res.write('<br><input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    res.end();
    return;
}
    else if(req.url==='/submit-details')
    {
        res.write('<html>');
res.write('<head><title>krishnanu</title><head>');
res.write('<body>default</body>');
res.write('</html>');
res.end();
return;
    }

});

const PORT=3001;
server.listen(PORT,()=>
{
    console.log(`http://localhost:${PORT}`);
});