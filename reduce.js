const reduce = function (array, iterator, accumulator) {
    if (accumulator !== undefined) {
        for (let i = 0; i < array.length; i++) {
            accumulator = iterator(accumulator, array[i])
        }
    } else {
        accumulator = array[0]
        for (let i = 0; i < array.length - 1; i++) {
            accumulator = iterator(accumulator, array[i + 1])
        }
    }
    return accumulator
};