var Rectangle = function(left, top, length, width, options) {
	//whatever...
}

Rectangle.prototype.overlaps = function(another) {
	var r1x1 = this.left,
	    r1x2 = this.left + this.width,
	    r1y1 = this.top,
	    r1y2 = this.top + this.height,
	    r2x1 = another.left,
	    r2x2 = another.left + another.width,
	    r2y1 = another.top,
	    r2y2 = another.top + another.height;

    return (r1x2 >= r2x1) && (r1y2 >= r2y1) && (r1x1 <= r2x2) && (r1y1 <= r2y2));
}

Rectangle.prototype.overlaps.call(
	{left: 10, top: 10, width 12, height: 6},
	{left: 8, top: 15, width 9, height: 16});
//true
Rectangle.prototype.overlaps.call(
	{left: 10, top: 10, width 12, height: 6},
	{left: 8, top: 25, width 9, height: 16});
//false;
