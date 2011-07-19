Object.values = function(obj) {
    return Object.keys(obj).map(function(e) {
        return obj[e]
    });
}

Object.values({a:1, b:2, c:3}); //[1, 2, 3]
