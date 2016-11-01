var Que = function () {
  this.head = 1;
  this.tail = 1;
  this.storage = {};
};
Que.prototype.enQue = function (item) {
  this.storage[this.head] = item;
  ++this.head;
};
Que.prototype.deQue = function () {
  var item = this.storage[this.tail];
  delete this.storage[this.tail];
  this.tail++;
  return item;
};
Que.prototype.getSize = function () {
  return this.head - this.tail;
};

module.exports = {Que};
