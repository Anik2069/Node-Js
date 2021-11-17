const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request Made');
    //Set header
    // res.setHeader('Content-type','text/plain');
    // res.write("Anik");
    // res.end();

    res.setHeader('Content-type','text/html');
    res.write("<h1>Anik</h1>");
    res.end();
});

server.listen(3000, 'localhost',()=>{
    console.log('Waiting for request ')
});