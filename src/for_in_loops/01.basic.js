var myObj = {a: 1, b: 2, c: 3}, myKeys = [];

for (var property in myObj) {
    myKeys.push(property);
}

myKeys; //['a','b','c'];
