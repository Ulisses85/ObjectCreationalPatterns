var expect = require('chai').expect;
var StackPrototypal = require('../lib/prototypal.js').Stack;
var StackPseudoClassical= require('../lib/pseudoClass.js').Stack;
var StackShared= require('../lib/shared.js').Stack;
var StackFunc= require('../lib/functionalStack.js').Stack;



describe('General test for all stack instances', function () {

    var stackFun=StackFunc();
    var stackShared=StackShared();
    var stackProto=StackPrototypal();
    var stackPseudo=StackPseudoClassical;


    it('all instances except pseudo classical should return an object', function () {

        expect(stackFun).to.be.a('object');
        expect(stackShared).to.be.a('object');
        expect(stackProto).to.be.a('object');
        expect(stackPseudo).to.not.be.a('object');

    })

    it('all instances except pseudo classical should return an object', function () {

        expect(StackFunc.push).to.not.be.a('function');
        expect(stackFun.push).to.be.a('function');
        expect(StackShared.push).to.not.be.a('function');
        expect(StackFunc.prototype.push).to.not.be.a('function');
        expect(StackShared.prototype.push).to.not.be.a('function');
        expect(StackPrototypal.prototype.push).to.be.a('function');
        expect(StackPseudoClassical.prototype.push).to.be.a('function');

        // expect(stackPseudo).to.not.be.a('object');

    })



});
