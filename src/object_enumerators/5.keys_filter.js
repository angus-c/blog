var thing = {
    size: 14,
    color: 'kind of off-white',
    greet: function() {return "thronk"}
};

var thingFunctions = Object.keys(thing).filter(function(e) {
    return typeof thing[e] == 'function'
});

thingFunctions; //["greet"]
