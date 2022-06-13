function fearNotLetter(str) {
  let newStr; 
  let arr = str.split("").map(item => item.charCodeAt(0));
  arr = (arr.every((item, index, array) => item === array[index + 1] - 1) ? undefined 
    : arr.map((item, index, array) => item === array[index + 1] - 1 ? [item] 
    : [item, item + 1])).flat().map(item => String.fromCharCode(item));
  newStr = arr.reduce((str, item) => str + item, "");
  console.log(newStr);

  return newStr;
}

fearNotLetter("abce");