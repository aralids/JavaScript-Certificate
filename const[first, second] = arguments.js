function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== typeof 2) {
    return undefined
  }
  if (second === undefined) {
    console.log(first, second, (second) => addTogether(first, second))
    return (second) => addTogether(first, second);
    }
  if (typeof(second) !== typeof 2)
    return undefined;
  return first + second;
}

addTogether(2,3);