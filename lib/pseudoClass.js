var Stack = function () {
  this.size = 1;
  this.storage = {};
};
Stack.prototype.push = function (item) {
  var key = ++this.size;
  this.storage[key] = item;
};
Stack.prototype.pop = function () {
  var item = this.storage[this.size];

  delete this.storage[this.size];

  this.size--;
  return item;
};
Stack.prototype.getSize = function () {
  return this.size;
};

module.exports = {Stack};
