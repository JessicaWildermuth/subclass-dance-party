// Creates and returns a new dancer object that can step
// change 'makeDancer'  - Dancer for class
var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  //this a property, change the word dance to - 'this'
  this.$node = $('<span class="dancer"></span>');
  //part of constructor - when dancer is made, it immedietly steps
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();

  // var dancer = {};
};

// create dancer prototype methods
// part of prototype objct
Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

//part of prototype obj
Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

//Add Line Up function

Dancer.prototype.lineUp = function(top, left) {

  var styleSettings = {
    left: left,
    top: top
  };
  this.$node.css(styleSettings);
  // $('.inLine').append(this.$node);
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body

// return dancer;
