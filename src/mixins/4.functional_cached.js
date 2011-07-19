var asRectangle = (function() {
  function area() {
    return this.length * this.width;
  }
  function grow() {
    this.length++, this.width++;
  }
  function shrink() {
    this.length--, this.width--;
  }
  return function() {
    this.area = area;
    this.grow = grow;
    this.shrink = shrink;
    return this;
  };
})();

var RectangularButton = function(length, width, label, action) {
  this.length = length;
  this.width = width;
  this.label = label;
  this.action = action;
}

asButton.call(RectangularButton.prototype);
asRectangle.call(RectangularButton.prototype);

var button3 =
  new RectangularButton(4, 2, 'delete', function() {return 'deleted'});
button3.area(); //8
button3.grow();
button3.area(); //15
button3.fire(); //'deleted'
