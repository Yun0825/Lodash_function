const flatten = function (nestedArray) {
  let arr = []
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      arr = [...arr, ..._.flatten(nestedArray[i])]
    } else {
      arr.push(nestedArray[i])
    }
  }
  return arr
};