Function.prototype.curry = function() {
  var fn = this;
  var args = [].slice.call(arguments, 0);
  return function() {
    return fn.apply(this, args.concat([].slice.call(arguments, 0)));
  };
}

var asRectangle = (function() {
  function area() {
    return this.length * this.width;
  }
  function grow(growBy) {
    this.length += growBy, this.width +=growBy;
  }
  function shrink(shrinkBy) {
    this.length -= shrinkBy, this.width -= shrinkBy;
  }
  return function(options) {
    this.area = area;
    this.grow = grow.curry(options['growBy']);
    this.shrink = shrink.curry(options['shrinkBy']);
    return this;
  };
})();

asButton.call(RectangularButton.prototype);
asRectangle.call(RectangularButton.prototype, {growBy: 2, shrinkBy: 2});

var button4 = new RectangularButton(2, 1, 'add', function() {return 'added'});
button4.area(); //2
button4.grow();
button4.area(); //12
button4.fire(); //'added'
