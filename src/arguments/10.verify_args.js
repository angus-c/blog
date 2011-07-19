var requireAllArgs= function(fn) {
	return function() {
		if (arguments.length < fn.length) {
          	throw(["Expected", fn.length, "arguments, got", arguments.length].join(" "));
        }
		return fn.apply(this, arguments);
	}
}

var divide = requireAllArgs(function(a, b) {return a/b});

divide(2/5); //"Expected 2 arguments, got 1"
divide(2,5); //0.4
