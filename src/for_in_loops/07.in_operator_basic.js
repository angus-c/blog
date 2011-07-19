var obj = {a:1, b:2, c:undefined, d:4}, aa = {};

'b' in obj; //true
'c' in obj; //true ('undefined' but still exists)
'e' in obj; //false (does not exist)

delete obj.c;
'c' in obj; //false (no longer exists)

obj.e;
'e' in obj; //false (referenced but not assigned)

//resolving expressions
aa.o = obj;
aa.a = 'a';
aa.a in aa.o; //true
