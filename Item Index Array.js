function fearNotLetter(str) {
  let newStr = str
                  .split("")
                  .map(item => item.charCodeAt(0))
                  .filter((item, index, array) => 
                  (item !== array[index + 1] - 1) && index !== array.length - 1);

  newStr = newStr.length === 0 ? undefined 
            : String.fromCharCode(Number(newStr[0]) + 1); 
  
  return newStr;
}

fearNotLetter("abce");