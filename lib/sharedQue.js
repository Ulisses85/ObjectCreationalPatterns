var Que = function () {
  return {
    tail: 1,
    head: 1,
    storage: {},
    enQue: sharedMethods.enQue,
    deQue: sharedMethods.deQue,
    getSize: sharedMethods.getSize
  };
};
var sharedMethods = {

  enQue: function (item) {
    this.storage[this.head] = item;
    ++this.head;
    // console.log(this.head);
  },
  deQue: function () {
    var item = this.storage[this.tail];
    delete this.storage[this.tail];
    this.tail++;
    return item;
  },
  getSize: function () {
    return this.head - this.tail;
  }
};

module.exports = {Que};
