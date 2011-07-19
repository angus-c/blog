//EQUALITY CHECK...
crazyNumeric = new Number(1);
crazyNumeric.toString = function() {return "2"};
crazyNumeric == 1;

//HOW IT WORKS...
//convert object using toPrimitive
//valueOf returns a primitive so use it
1 == 1; //true!
