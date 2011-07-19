var args = echoArgs(1,2,3);

[].push.apply(args,[4,5]);
args[4]; //5

var mapped = [].map.call(args, function(s) {return s/100});
mapped[2]; //0.03
