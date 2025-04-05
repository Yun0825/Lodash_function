const map = function (array, iterator) {
    let arr = Array.from(array);
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        arr[i] = iterator(arr[i], i, array);
    }
    return arr;
};