//change 'makeBlinkyDancer' to BlinkyDancer classname
var PracticeDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('yolodance');

};

PracticeDancer.prototype = Object.create(Dancer.prototype);
PracticeDancer.prototype.constructor = PracticeDancer;

PracticeDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  //change blinkydancer this
  this.$node.mouseover(function() {
    $(this).css('background-size', '240px');
  });

  this.$node.mouseout(function() {
    $(this).css('background-size', '120px');
  });
};