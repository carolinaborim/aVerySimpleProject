var subtract = require('../src/subtract')
var assert = require('chai').assert;

describe('When subtracting two numbers', function() {
  it('should return the typed number when I subtract 0', function () {
    assert.equal(subtract(1,0),1);
  });

  it('should decrement the current number in one when I subtract one', function() {
    assert.equal(subtract(0,1),-1);
  });

  it('should decrement the typed number in 1, when I subtract 1', function (){
    assert.equal(subtract(1,1),0);
  });

  it('should return 2 when I pass -1 due to math operation', function (){
    assert.equal(subtract(1,-1),2);
  });
});
