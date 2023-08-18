const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write("hello home page");
    res.end();
    }
    else if(req.url==='/about'){
        res.write('about page');
        res.end();
    }
    else{
        res.write('not found');
        res.end();
    }
});


server.listen( 3000, '127.0.0.1' ,()=>{
    console.log('server is listing at 3000 port')
});

console.log(server);