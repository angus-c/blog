//#1 pseudo code simulation of operator precedence..
//original
return 5 * 2 + 3,  22;
//apply * operator
return 10 + 3,  22;
//apply + operator
return 13, 22;
//apply , operator
return 22;

//#2 pseudo code simulation of operator precedence
//original
var a = 7, 5;
//apply = operator
var a, 5; //a is now 7
//SyntaxError: missing variable name
