function steamrollArray(arr) {
  let newArr = arr.flat();
  while (newArr.some(item => item.constructor === newArr.constructor)) {
    newArr = newArr.flat();
  }
  console.log(newArr);
  return newArr;
}
steamrollArray([1, [2], [3, [[4]]]]);