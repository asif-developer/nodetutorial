const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        // res.write('Welcome to my server');
        res.end('Welcome to home page');
    }

    res.end(`<h1>Oops!</h1>
    <p>The page you requested cannot be find</p>
    `);
});

server.listen(5000);