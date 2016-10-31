var Stack = function() {
//console.log('&*************************')
    var stackInstance = Object.create(funcMethods);

    stackInstance.size=1;
   // console.log('****************' + stackInstance.size);

    stackInstance.storage={};
    return stackInstance;
}

var funcMethods={};

 funcMethods.push= function (item){
  //   console.log('&***************push**********')
    var key = ++size;

    storage[key] = item;
  //   console.log('push' + item);
  //   console.log('storage' + storage[key]);

};
 funcMethods.pop= function (){
    // console.log('&******************popo*******')
    var item = storage[size];
  //   console.log('&******************popo*******' + storage[1])

    delete storage[size];

    size--;
  //   console.log('pop' + item);
    return item;

};
 funcMethods.getSize= function (){
//     console.log(size);

    return size;

};


module.exports={Stack}