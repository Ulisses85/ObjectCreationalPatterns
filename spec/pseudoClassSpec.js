var expect = require('chai').expect;
var Stack = require('../lib/pseudoClass.js').Stack;

describe('Stack_pseudo is a function', function () {
  var globalStack = new Stack();
    it('is a function', function () {
        expect(Stack).to.be.a('function');
    });
    it('is a number', function () {
      var myStack = new Stack()
        expect(myStack.getSize()).to.be.a('number')
      });
      it('pop returns data last pushed', function () {
          var myStack = new Stack();
          myStack.push('hello');
          expect(myStack.pop()).to.equal('hello');
      });
      it('should push Hello and increment size by 1 , pop should equal Hello and decrement size by 1', function () {
        var newStack = new Stack();
        newStack.push('Hello');
          //expect(newStack).to.be.equal('Hello');
          expect(newStack.getSize()).to.equal(2);
          var data = newStack.pop();
          expect(newStack.getSize()).to.equal(1);
          expect(data).to.equal('Hello');
      });
  });
