var expect = require('chai').expect;
var Stack = require('../lib/functionalStack.js').Stack;

describe('Stack is a function', function () {

    it('is a function', function () {
        expect(Stack).to.be.a('function');
    })

    it('pop returns data last pushed', function () {
        var myStack = Stack();
        myStack.push('hello');
        var data=myStack.pop();
        expect(data).to.equal('hello');
    })

    it('gets stack increments by 1 for each push', function () {
        var myStack = Stack();
        expect(myStack.length()).to.equal(0);
        myStack.push('hello');
        expect(myStack.length()).to.equal(1);
        myStack.push('hello');
        expect(myStack.length()).to.equal(2);
    })

    it('gets stack increments by 1 for each push, then decrememnts by 1 for each pop', function () {
        var myStack = Stack();
        expect(myStack.length()).to.equal(0);
        myStack.push('hello');
        expect(myStack.length()).to.equal(1);
        myStack.push('hello');
        expect(myStack.length()).to.equal(2);
        var data=myStack.pop();
        var data=myStack.pop();
        expect(myStack.length()).to.equal(0);
    })


    it('size increments by 1', function () {
        var testStack = Stack();
        testStack.push('hello');
        testStack.push('hello');
        expect(testStack.length()).to.equal(2);
    })

    it('Stack should return an object', function () {
        var myStack1 = Stack();
        expect(myStack1).to.be.an('object');
    })

})

