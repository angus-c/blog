var wrapper = function(fn) {
  'use strict';
  var deleteNonConfigurable = function () {
    var obj = {};
    Object.defineProperty(obj, "name", {
      configurable: false
    });
    delete obj.name; //Will throw TypeError in Strict Mode
  }
  return deleteNonConfigurable;
}

wrapper()(); //TypeError (Strict Mode enforced)
