const each = function (array, iterator) {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        iterator(array[i], i, array)
    }
};