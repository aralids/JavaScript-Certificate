function uniteUnique(...arrays) {
  let newArr = arrays.flat()
                     .filter((item, index, array) => array.slice(0, index).includes(item) === false)

  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);