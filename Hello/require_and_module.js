//Require Module Node js
var counter  = function (arr) {
	console.log("There are "+arr.length+ " elements in this array");
};

var adder =  function(a,b){
	return `The sumation of two number ${a+b}`;
};
var pie=3.156
/*//Way 01
module.exports = counter;*/
/*//Way 02
module.exports.adder = adder */
//way 03
/*module.exports.adder =  function(a,b){
	return `The sumation of two number ${a+b}`;
};*/
//way 04
module.exports = {
	adder:adder,
	counter:counter,
	pie:pie,
};