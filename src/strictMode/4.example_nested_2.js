var test = function(fn) {
  'use strict';
  fn();
}

var deleteNonConfigurable = function () {
  var obj = {};
  Object.defineProperty(obj, "name", {
    configurable: false
  });
  delete obj.name; //will throw TypeError in Strict Mode
}

test(deleteNonConfigurable); //no error (Strict Mode not enforced)
