var expect = require('chai').expect;
var Que = require('../lib/pseudoQue.js').Que;

describe('Pseudo_Que is a function', function () {

    it('is a function', function () {
        expect(Que).to.be.a('function');
    });
        it('enQue one item , deQue one item. Item is the same.', function () {
            var newQue= new Que;
            newQue.enQue('hello');
            var data=newQue.deQue();
            expect(data).to.equal('hello');

        });

        it('enQue several items , deQue one item, item equals first item Que`d.', function () {
            var newQue = new Que;
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

        it('newQue should have function properties enQue, deQue, getSize', function () {
            var newQue= new Que;
            expect(newQue.enQue).to.be.an('function');
            expect(newQue.deQue).to.be.an('function');
            expect(newQue.getSize).to.be.an('function');
        });
    });
