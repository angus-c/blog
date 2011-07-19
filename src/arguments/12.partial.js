Function.prototype.curry = function() {
    if (arguments.length<1) {
        return this; //nothing to curry with - return function
    }
    var __method = this;
    var args = [].slice.apply(arguments);
    return function() {
        return __method.apply(this, args.concat([].slice.apply(arguments)));
    }
}

var converter = function(ratio, symbol, input) {
    return [(input*ratio).toFixed(1),symbol].join(" ");
}

var kilosToPounds = converter.curry(2.2,"lbs");
var milesToKilometers = converter.curry(1.62, "km");

kilosToPounds(4); //8.8 lbs
milesToKilometers(34); //55.1 km
