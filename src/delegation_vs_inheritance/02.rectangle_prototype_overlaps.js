Rectangle.prototype.overlaps = function(another) {
	var r1x1 = this.left,
	    r1x2 = this.left + this.width,
	    r1y1 = this.top,
	    r1y2 = this.top + this.height,
	    r2x1 = another.left,
	    r2x2 = another.left + another.width,
	    r2y1 = another.top,
	    r2y2 = another.top + another.height;

    return (r1x2 >= r2x1) && (r1y2 >= r2y1) && (r1x1 <= r2x2) && (r1y1 <= r2y2);
}

myRectangle.overlaps(myOtherRectangle);
