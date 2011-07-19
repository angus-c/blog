var argsArray = [].slice.apply(echoArgs(1,2,3));

argsArray.push(4,5);
argsArray[4]; //5

var mapped = argsArray.map(function(s) {return s/100});
mapped[2]; //0.03
