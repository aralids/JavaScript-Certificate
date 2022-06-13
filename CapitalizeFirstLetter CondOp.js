function myReplace(str, before, after) {
  after = (/^[A-Z]/.test(before)) ? after.charAt(0).toUpperCase() + after.slice(1) : after.charAt(0).toLowerCase() + after.slice(1);
  return str.replace(RegExp(before), after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");