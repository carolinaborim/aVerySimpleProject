var add = require('../src/add')
var assert = require('chai').assert;

describe('When adding two numbers', function() {
  it('should return the typed number when I add 0', function () {
    assert.equal(add(0,0),0);
  });

  it('should increment the typed number in 1 when I add 1 in 0', function () {
    assert.equal(add(1,0),1);
  });

  it('should increment the typed number in 1 when I add 1', function () {
    assert.equal(add(1,1),2);
  });
});
