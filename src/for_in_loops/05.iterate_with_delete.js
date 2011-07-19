var obj = {a: 1, b: 2, c: 3}, result = [];

delete obj.b;
obj.b = 4;

for (var prop in obj) {
    result.push(prop);
}

result.toString();
//IE ->"a,b,c"
//Other browsers -> "a,c,b"
