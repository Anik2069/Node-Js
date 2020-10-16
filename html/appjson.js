var http =require('http');
var fs = require("fs");

var server = http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'application/json'});
    var myobject={
        name:"Anik",
        job:"Ninja",
        age:29
    };
    res.end(JSON.stringify(myobject));
});


server.listen(3000,'127.0.0.1');
console.log('Port Running');