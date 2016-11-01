var expect = require('chai').expect;
var Que = require('../lib/prototypalQue.js').Que;

describe('Que is a function', function () {

    it('is a function', function () {
        expect(Que).to.be.a('function');
    })

    it('should return an object', function () {
        expect(Que()).to.be.a('object');
    })

    it('enQue one item , deQue one item. Item is the same.', function () {
        var newQue=Que();
        newQue.enQue('hello');
        var data=newQue.deQue();
        expect(data).to.equal('hello');

    });

    it('enQue several items , deQue one item, item equals first item Que`d.', function () {
        var newQue=Que();
        newQue.enQue('aaaa');
        newQue.enQue('bbbb');
        newQue.enQue('cccc');
        newQue.enQue('dddd');
        var data;
        data=newQue.deQue();
        expect(newQue.getSize()).to.equal(3);
        expect(data).to.equal('aaaa');
        data=newQue.deQue();
        expect(newQue.getSize()).to.equal(2);
        expect(data).to.equal('bbbb');

    });

    it('Que should return an object, object should have function properties enQue, deQue, getSize', function () {
        var newQue=Que();
        expect(newQue).to.be.an('object');
        expect(newQue.enQue).to.be.an('function');
        expect(newQue.deQue).to.be.an('function');
        expect(newQue.getSize).to.be.an('function');

    });

});