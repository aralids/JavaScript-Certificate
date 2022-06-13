function dropElements(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr = arr.slice(i);
      return newArr;
    }
  }
  return newArr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });