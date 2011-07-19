//Chrome, Safari, FF4, IE9

var mathProps = Object.getOwnPropertyNames(Math);
var oneArgMathFunctions = mathProps.forEach(function(e) {
    if((typeof Math[e] == 'function') && (Math[e].length == 1)) {
        console.log("Math." + e + "(10) -> " + Math[e](10));
    }
});
//Math.cos(10) -> -0.8390715290764524
//Math.log(10) -> 2.302585092994046
//Math.tan(10) -> 0.6483608274590867
//Math.sqrt(10) -> 3.1622776601683795
//etc...

//Chrome, Safari, FF4, IE9

Object.getOwnPropertyNames(String.prototype);
//["length", "constructor", "concat", "localeCompare", "substring", "italics", "charCodeAt", "strike", "indexOf", "toLowerCase", "trimRight", "toString", "toLocaleLowerCase", "replace", "toUpperCase", "fontsize", "trim", "split", "substr", "sub", "charAt", "blink", "lastIndexOf", "sup", "fontcolor", "valueOf", "link", "bold", "anchor", "trimLeft", "small", "search", "fixed", "big", "match", "toLocaleUpperCase", "slice"]
