var express = require ('express');

var app = express();

app.listen(3000);

//get method ::: app.get('route',fn)

//POST method :::: app.post ('route',fn)

//DELETE method ::::: app.delete(route,fn)

app.get('/' ,function (req, res) {
	// body...
	res.send("This is yhe home page");
});