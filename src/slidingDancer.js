
var SlidingDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('sliding');
};

SlidingDancer.prototype = Object.create(Dancer.prototype);
SlidingDancer.prototype.constructor = SlidingDancer;


SlidingDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);
  // this.$node.toggle();
  this.$node.animate({ 'left': '-750px', 'right': '-=700px', 'left': '-1500px' }, 8000);
};