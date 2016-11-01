var Stack = function() {

    var obj = Object.create(Stack.prototype);

    obj.size=1;
    obj.storage={};

    return obj;
}

//var funcMethods={};

Stack.prototype.push= function (item){
    var key = ++size;

    storage[key] = item;

};
Stack.prototype.pop= function (){

    var item = storage[size];

    delete storage[size];

    size--;
    return item;

};
Stack.prototype.getSize= function (){

    return size;

};


module.exports={Stack}