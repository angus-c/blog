//EQUALITY CHECK...
[0] == true;

//HOW IT WORKS...
//convert boolean using toNumber
[0] == 1;
//convert object using toPrimitive
//[0].valueOf() is not a primitive so use...
//[0].toString() -> "0"
"0" == 1;
//convert string using toNumber
0 == 1; //false!
