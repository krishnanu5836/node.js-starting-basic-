const http =require('http');
const ok=require('./user');

const server=http.createServer(ok);

const PORT=3001;
server.listen(PORT,()=>
{
console.log(`http://localhost:${PORT}`);
});