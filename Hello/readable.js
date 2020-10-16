var http =require('http');

var fs = require("fs");

var myRead = fs.createReadStream(__dirname + "/readable.txt");

myRead.on('data',function (chunk) {
    console.log("new chunk receiver");
    console.log(chunk);
})