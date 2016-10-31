var expect = require('chai').expect;
var Stack = require('../lib/prototypal.js').Stack;

describe('Stack is a function', function () {

    it('is a function', function () {
        expect(Stack).to.be.a('function');
    })

    it('should return a number', function () {
        var newStack = Stack();
        expect(newStack.getSize()).to.be.a('number');
        })


    it('pop returns data last pushed', function () {
        var myStack = Stack();
        myStack.push('hello');
        expect(myStack.pop()).to.equal('hello');
    })
});

