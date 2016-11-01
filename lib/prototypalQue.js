var Que = function () {

    var obj=Object.create(Que.prototype);

    obj.head=1;
    obj.tail=1;
    obj.storage={};
    return obj;

}

Que.prototype.enQue=function(item){

    this.storage[this.head]=item;
    ++this.head;

}

Que.prototype.deQue=function(){

    var item=this.storage[this.tail];
    delete this.storage[this.tail];
    this.tail++;
    return item;

}

Que.prototype.getSize=function(){

    return this.head-this.tail;
}



module.exports={Que};
