var average = function(/*numbers*/) {
    for (var i=0, total = 0, len=arguments.length; i<len; i++) {
        total += arguments[i];
    }
    return total / arguments.length;
}

average(50, 6, 5, -1); //15
