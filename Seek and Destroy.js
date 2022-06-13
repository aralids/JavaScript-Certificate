function destroyer(arr, ...removables) {
  return arr.filter(item => removables.includes(item) === false);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);