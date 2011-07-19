function format(string) {
    var args = arguments;
    var pattern = RegExp("%([1-" + (arguments.length-1) + "])", "g");
    return string.replace(pattern, function(match, index) {
        return args[index];
    });
}; 

format("a %1 and a %2", "cat", "dog");
//"a cat and a dog"
