const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=> {
    const myReadStreming = fs.ReadStream(`${__dirname}/bigdata.txt`, 'utf8');
    myReadStreming.pipe(res);
})

server.listen(3000, '127.0.0.1', ()=>{
    console.log('server is running at port 3000');
});