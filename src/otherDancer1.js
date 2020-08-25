
var SlidingDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('sliding');


};

SlidingDancer.prototype = Object.create(Dancer.prototype);
SlidingDancer.prototype.constructor = SlidingDancer;

// SlidingDancer.prototype.lineUp = function(top, left) {

//   var styleSettings = {
//     left: left,
//     top: top
//   };
//   this.$node.css(styleSettings);
//   this.$node.setPosition(top, left);
//   // $('.inLine').append(this.$node);
// };

SlidingDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);
  this.$node.toggle();
  // this.$node.effect('shake', { direction: 'right', times: 1, distance: 300}, 1000 );

};