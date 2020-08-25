describe('yoloDancer', function() {

  var yoloDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    yoloDancer = new YoloDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(yoloDancer.$node).to.be.an.instanceof(jQuery);
  });


  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(yoloDancer, 'step');
      expect(yoloDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(yoloDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(yoloDancer.step.callCount).to.be.equal(2);
    });
  });
});