var http =require('http');
var fs = require("fs");
var server = http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});

    var myRead = fs.createReadStream(__dirname + "/hi.html",'utf8');
    myRead.pipe(res)
});


server.listen(3000,'127.0.0.1');
console.log('Port Running');