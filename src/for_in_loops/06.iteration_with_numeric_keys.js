var obj = {3:'a', 2:'b', 'foo':'c', 1:'d'}, result = [];

for (var prop in obj) {
    result.push(prop);
}

result.toString();
//Chrome -&gt; "1,2,3,foo"
//Other browsers -&gt; "3,2,foo,1"
