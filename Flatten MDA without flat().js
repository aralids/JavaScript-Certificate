function steamrollArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].constructor === arr.constructor) {
      console.log(steamrollArray(arr[i]), ...steamrollArray(arr[i]))
      newArr.push(...steamrollArray(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
steamrollArray([1, [2], [3, [[4]]]]);