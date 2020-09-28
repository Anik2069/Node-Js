//Function make
function sayHi() {
	console.log("Hi");
}
sayHi();
//function in variable ----function Expression
var saytom= function(){
console.log("Say Tom, Come here");
};
saytom();
//function in function
function callFunction(fun){
	fun();
};
callFunction(saytom);