function diffArray(arr1, arr2) {
  const newArr = arr1
  .filter(item => arr2.includes(item) == false)
  .concat(arr2.filter(item => arr1.includes(item) == false));

  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);