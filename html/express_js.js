var express = require ('express');

var app = express();

app.set('view engine', 'ejs');

//

//get method ::: app.get('route',fn)

//POST method :::: app.post ('route',fn)

//DELETE method ::::: app.delete(route,fn)

app.get('/' ,function (req, res) {
	// body...
	res.send("This is yhe home page");
});

//Request params 

app.get('/profile/:id' ,function (req, res) {
	// body...
	//res.send("This is Profile page"+req.params.id);
	data = {
		name: "Anik",
		age:"22",
		hobbies: [
			'eating','learning','fishing'
		]
	}
	res.render('home',{person: req.params.id,data:data});
});


app.get('/home',function (req, res) {
	res.sendFile(__dirname + '/hi.html')
});

app.listen(3000);