var arr = [1,2,3];
var args = echoArgs(1,2,3);

Object.prototype.toString.apply(arr); //[object Array]
Object.prototype.toString.apply(args); //[object Object]

arr.push(4); //4
args.push(4); //TypeError: args.push is not a function

arr.length = 1;
arr[2]; //undefined
args.length = 1;
args[2]; //3
