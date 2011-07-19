var asCircle = function() {
  this.area = function() {
    return Math.PI * this.radius * this.radius;
  };
  this.grow = function() {
    this.radius++;
  };
  this.shrink = function() {
    this.radius--;
  };
  return this;
};

var Circle = function(radius) {
    this.radius = radius;
};
asCircle.call(Circle.prototype);
var circle1 = new Circle(5);
circle1.area(); //78.54

var asButton = function() {
  this.hover = function(bool) {
    bool ? mylib.appendClass('hover') : mylib.removeClass('hover');
  };
  this.press = function(bool) {
    bool ? mylib.appendClass('pressed') : mylib.removeClass('pressed');
  };
  this.fire = function() {
    return this.action();
  };
  return this;
};

var RoundButton = function(radius, label, action) {
    this.radius = radius;
    this.label = label;
    this.action = action;
};

asButton.call(RoundButton.prototype);
asCircle.call(RoundButton.prototype);

var button1 = new RoundButton(4, 'yes!', function() {return 'you said yes!'});
button1.fire(); //'you said yes!'

var asOval = function(options) {
  this.area = function() {
    return Math.PI * this.longRadius * this.shortRadius;
  };
  this.ratio = function() {
    return this.longRadius/this.shortRadius;
  };
  this.grow = function() {
    this.shortRadius += (options.growBy/this.ratio());
    this.longRadius += options.growBy;
  };
  this.shrink = function() {
    this.shortRadius -= (options.shrinkBy/this.ratio());
    this.longRadius -= options.shrinkBy;
  };
  return this;
}

var OvalButton = function(longRadius, shortRadius, label, action) {
  this.longRadius = longRadius;
  this.shortRadius = shortRadius;
  this.label = label;
  this.action = action;
};

asButton.call(OvalButton.prototype);
asOval.call(OvalButton.prototype, {growBy: 2, shrinkBy: 2});

var button2 = new OvalButton(3, 2, 'send', function() {return 'message sent'});
button2.area(); //18.84955592153876
button2.grow();
button2.area(); //52.35987755982988
button2.fire(); //'message sent'
