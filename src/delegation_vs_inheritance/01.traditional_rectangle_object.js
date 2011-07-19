var Rectangle = function(left, top, length, width, options) {
	this.left = left;
	this.top = top;
	this.length = length;
	this.width = width;
    if (options) {
    	this.color = options.color;
    	this.border = options.border;
    	this.opacity = options.opacity;
    	//... etc.
    }
}

var myRectangle = new Rectangle(10, 10, 30, 20, {color:'#FAFAFA', opacity:0.7});
