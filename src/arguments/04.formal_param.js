function foo(a, arguments) {
    return arguments;
};

foo(1); //undefined

function foo(a, b) {
    var arguments = 43;
    return arguments
};

foo(1, 2); //43
