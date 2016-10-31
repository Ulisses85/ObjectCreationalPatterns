var expect = require('chai').expect;
var Que = require('../lib/sharedQue.js').Que;

describe('Que_shared is a function', function () {

    it('is a function', function () {
        expect(Que).to.be.a('function');
    });
    it('should return a num', function () {
      var newQue = Que();
        expect(newQue.getSize()).to.be.a('number');
    });
    it('should return a num', function () {
      var newQue = Que();
      newQue.enQue('Hello')
        expect(newQue.getSize()).to.equal(1);
        newQue.enQue('Olleh')
          expect(newQue.getSize()).to.equal(2);
          var data = newQue.deQue();
          expect(data).to.equal('Hello');
          expect(newQue.getSize()).to.equal(1);
    });
  });
