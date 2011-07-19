//CONTAINS AN INTENTIONAL ERROR!!!
//sum products while i > n
var i=10, n=0, total=0;
while(console.log(i,n), i-- > n++); {
    total += i*n
}

//CONTAINS AN INTENTIONAL ERROR!!!
//sum an array
var arr = [1,2,3];
for (
    var i=0, total=0;
    i<arr.length;
    console.log(i,total), total += arr[i++]);
)

//CONTAINS AN INTENTIONAL ERROR!!!
//add 4 to members of array and sum it
//(yes there are easier ways to do this!)
var testArray = [3, 5, 8, 4], total = 0;
var plusFour = testArray.map(function(e) {e + 4})
plusFour.forEach(function(n) {console.log(n), isNaN(n) || (total += n)});
