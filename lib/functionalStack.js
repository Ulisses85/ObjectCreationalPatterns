var Stack = function () {


    //var instance = {};

    storage = {};
    size = 0;

    console.log('size' + size);
    return {

       push : function (item) {
            var key = ++size;

            storage[key] = item;

        },

       pop : function () {
            var item = storage[size];

            delete storage[size];

            size--;

            return item;
        },

        length : function() {

            return size;
        }

    }

}

module.exports = {Stack}

