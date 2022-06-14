function palindrome(str) {
  let regEx = /[^a-zA-z1-9]|_/g;
  str = str.replace(regEx, "");
  return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
}

palindrome("_eye");