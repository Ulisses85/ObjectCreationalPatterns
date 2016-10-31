var Stack = function (){
  return {
    size: 1,
    storage: {},
    push: sharedMethods.push,
    pop: sharedMethods.pop,
    getSize: sharedMethods.getSize
  };
};
var sharedMethods = {
  push: function (item) {
    this.size++;
    this.storage[this.size] = item;
  },
  pop: function () {
    var data = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return data;
  },
  getSize: function () {
    return this.size;
  }
};
module.exports = {Stack};
