//change 'makeBlinkyDancer' to BlinkyDancer classname
var BlinkyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  //call the superclass of Dancer pass in the correct argument, 'this'
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // var oldStep = this.step;
};
  // Dancer.call(this, loc)
//have to connect the blinkydancer prototype to the Dancer prototype
// assign the superclass dance step to var oldStep
//have to reset the blinkdancer constructor to blinkydancer
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  //change blinkydancer this
  this.$node.toggle();
};

// return blinkyDancer;