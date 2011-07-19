//all browsers
if (typeof Object.keys != 'function') {
    Object.keys = function(obj) {
       if (typeof obj != "object" && typeof obj != "function" || obj == null) {
            throw TypeError("Object.keys called on non-object");
       }
       var keys = [];
       for (var p in obj) obj.hasOwnProperty(p) &&keys.push(p);
       return keys;
    }
}

Object.keys({a:1, b:2, c:3}); //['a', 'b', 'c']
