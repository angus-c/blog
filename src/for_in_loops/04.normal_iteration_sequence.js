var obj = {a: 1, b: 2, c: 3}, result = [];

obj.e; //referenced but not assigned
obj.f = 'bar'; //1st assignment
obj.e = 4;
obj.dd = 5;
obj.f = 'foo'; //2nd assignment

for (var prop in obj) {
    result.push(prop);
}

result.toString(); //"a,b,c,f,e,dd"
