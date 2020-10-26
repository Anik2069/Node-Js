var http =require('http');
var fs = require("fs");
var server = http.createServer(function (req,res) {

    console.log("Requested Url : " + req.url);
    if(req.url === "/" || req.url ==="/home"){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + "/hi.html",'utf8').pipe(res)
    }else if (req.url === "/contact-us" ) {
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + "/contact.html",'utf8').pipe(res)
    }


});


server.listen(3000,'127.0.0.1');
console.log('Port Running');