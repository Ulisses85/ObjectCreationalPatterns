var Que= function() {

    var tail=1;
    var head=1;
    var storage={};

return {

    enQue: function(item){

        storage[head]=item;
        ++head;
    },

    deQue: function(){
    var item=storage[tail];
        delete storage[tail];
        tail++;
        return item;
    },

    getSize: function() {
    return head - tail;
    },

    getHead: function () {
      return head;
    },

    getTail: function () {
        return tail;
    }

}

}

module.exports={Que}