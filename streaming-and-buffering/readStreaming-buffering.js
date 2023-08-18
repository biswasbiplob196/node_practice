const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url ==='/'){
        res.write('<html><head></head><body><form method="post" action="/process" > <input name="massage" ></form></body></html>');
        res.end();
    }
    else if(req.url ==='/process' && req.method==='POST'){
        const body =[]
        req.on('data',(chunk)=>{
           body.push(chunk);
        })
        req.on('end', ()=>{
            console.log('stream finished')
            const parsebody = Buffer.concat(body).toString();
            res.write(`${parsebody}`);
        res.end();
        })
        
        
    }
})

server.listen(3000, '127.0.0.1' , ()=>{
    console.log('server is running at port 3000');
})





// const fs = require('fs');
// const myStreming = fs.ReadStream(`${__dirname}/bigdata.txt`);

// myStreming.on('data',(chunk)=>{
//     console.log(chunk.toString());
// })