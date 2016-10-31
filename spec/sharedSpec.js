var expect = require('chai').expect;
var Stack = require('../lib/shared.js').Stack;

describe('Stack_shared is a function', function () {

    it('is a function', function () {
        expect(Stack).to.be.a('function');
    });
    it('is an object', function () {
        expect(Stack()).to.be.an('object');
    });
    it('should push Hello and increment size by 1 , pop should equal Hello and decrement size by 1', function () {
      var newStack = Stack();
      newStack.push('Hello');
        // expect(newStack).to.be.equal('Hello');
        expect(newStack.getSize()).to.equal(2);
        var data = newStack.pop();
        expect(newStack.getSize()).to.equal(1);
        expect(data).to.equal('Hello');
    });
  })
