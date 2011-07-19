//CHROME BROWSER ONLY...

(function(a, b, c) {
	//Updating arguments[2] should do not modify named param
	arguments[2] = 10;
	console.log(c); //10!!
})(1,2);

(function(a, b, c) {
	//Assigning to 'c' should not populate 'arguments' object
	c = 10;
	console.log('2' in arguments); //true!!
})(1,2)

//CHROME BROWSER ONLY...

var cParam = (function(a, b, c) {
    c = 3;
    delete arguments[2];
    return c;
})(1,2);

cParam;
// Chrome -> undefined
// Other browsers -> 3
