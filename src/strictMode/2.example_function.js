012; //No Error (Strict Mode not enforced globally)
function foo() {
    "use strict";
    x=3; //Strict Mode will throw an error for implicit globals
}
foo(); //ReferenceError (Strict Mode is enforced for function foo)
