const slice = function (array, start, end) {
    const arr = Array.from(array)
    const tempArr = [];
    const len = arr.length;
    end === undefined ? end = arr.length : end = end
    start = Math.trunc(start)
    end = Math.trunc(end)

    // start >= 0 && end >= 0
    if (start >= 0 && end >= 0) {
        for (let i = start; i < end; i++) {
            tempArr.push(arr[i])
        }
        return tempArr
        // start < 0 && end >= 0
    } else if (start < 0 && end >= 0) {
        const reverseNum = len + start;

        if (reverseNum >= end) {
            for (let i = end; i <= reverseNum; i++) {
                tempArr.push(arr[i])
            }

            return tempArr
        }

        for (let i = reverseNum; i < end; i++) {
            tempArr.push(arr[i])
        }

        return tempArr
        // start >= 0 && end < 0
    } else if (start >= 0 && end < 0) {
        const reverseNum = len + end;

        if (reverseNum >= start) {
            for (let i = start; i <= reverseNum - 1; i++) {
                tempArr.push(arr[i])
            }
            return tempArr
        }

        for (let i = reverseNum; i < end; i++) {
            tempArr.push(arr[i])
        }
        return tempArr
    }
    return arr;
};