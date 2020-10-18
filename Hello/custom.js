var events = require('events');

var util = require('util');

var person = function(name){
	this.name = name;
};

util.inherits (person,events.EventEmitter);

var james = new person ('James');

var khan = new person ('Khan');

var Anik = new person ('Anik');

/*var myFmitter = new events.EventEmitter();

myFmitter.on('someEvent',function(msg){
	console.log(msg);
});

myFmitter.emit('someEvent',"The event was emitted");*/