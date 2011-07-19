//EQUALITY CHECK...
var crazyObj  = {
    toString: function() {return "2"}
}
crazyObj == 1;

//HOW IT WORKS...
//convert object using toPrimitive
//valueOf returns an object so use toString
"2" == 1;
//convert string using toNumber
2 == 1; //false!
