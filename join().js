function sentensify(str) {
  // Only change code below this line
  let arr = str.split(/\W/);
  console.log(arr);
  let newStr = arr.join(" ");
  console.log(newStr);
  
  return newStr;
  // Only change code above this line
}

sentensify("May-the-force-be-with-you");