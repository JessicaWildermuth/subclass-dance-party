
var SlidingDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('sliding');


};

SlidingDancer.prototype = Object.create(Dancer.prototype);
SlidingDancer.prototype.constructor = SlidingDancer;

SlidingDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);

  this.$node.effect('shake');
  // , '{direction: right, times: 4, distance: 300}', 1000);
};