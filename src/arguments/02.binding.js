(function(a) {
	console.log(arguments[0] === a); //true
	console.log(a); //1

	//modify argument property
	arguments[0] = 10;
	console.log(a); //10

	//modify named parameter variable
	a = 20;
	console.log(arguments[0]); //20
})(1,2)

//Invoke a three argument function but only pass two arguments
(function(a, b, c) {
	//'arguments' has two members
	console.log(arguments.length); //2

	//Updating arguments[2] should do not modify named param
	arguments[2] = 10;
	console.log(c); //undefined
})(1,2);

(function(a, b, c) {
	//Assigning to 'c' should not populate 'arguments' object
	c = 10;
	console.log('2' in arguments); //false
})(1,2)
