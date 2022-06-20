function telephoneCheck(str) {
  let regularExpressions = {
    regEx1: /^\d{3}-\d{3}-\d{4}/,
    regEx2: /^\(\d{3}\)\d{3}-\d{4}/,
    regEx3: /^\(\d{3}\) \d{3}-\d{4}/,
    regEx4: /^\d{3} \d{3} \d{4}/,
    regEx5: /^\d{10}/,
    regEx6: /^1 \d{3} \d{3} \d{4}/,
    regEx7: /^1 \(\d{3}\) \d{3}-\d{4}/,
    regEx8: /^1\(\d{3}\)\d{3}-\d{4}/,
    regEx9: /^1 \d{3}-\d{3}-\d{4}/
  }

  for (let i of Object.keys(regularExpressions)) {
    if (str.replace(regularExpressions[i],"") === "") {
      return true;
    }
  }
  return false;
}

telephoneCheck("1(555)555-5555");