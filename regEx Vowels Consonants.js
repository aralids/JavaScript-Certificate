function translatePigLatin(str) {
  let newStr = str.slice(0);
  console.log(newStr)

  let regExVowel = /^([aeoui])/
  if (regExVowel.test(newStr)) {
    newStr += "way";
  } else {
    let arr = newStr.match(/^[^aeoui]+/);
    console.log(arr);
    newStr = newStr.replace(/^[^aeoui]+/, "");
    newStr += arr[0] + "ay";
  }

  console.log(newStr)
  return newStr;
}

translatePigLatin("consonant");
translatePigLatin("eight");