//unnecessary
if (typeof myVar === "function");

//better
if (typeof myVar == "function");

//unnecessary
var missing =  (myVar === undefined ||  myVar === null);

//better
var missing = (myVar == null);

//unnecessary
if (myArray.length === 3) {//..}

//better
if (myArray.length == 3) {//..}
