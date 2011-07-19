var trutheyTester = function(expr) {
    return expr ? "truthey" : "falsey";
}

trutheyTester({}); //truthey (an object is always true)

trutheyTester(false); //falsey
trutheyTester(new Boolean(false)); //truthey (an object!)

trutheyTester(""); //falsey
trutheyTester(new String("")); //truthey (an object!)

trutheyTester(NaN); //falsey
trutheyTester(new Number(NaN)); //truthey (an object!)
