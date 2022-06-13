function convertHTML(str) {
  let regExAnd = /&/g;
  let regExLessThan = /</g;
  let regExGreaterThan = />/g;
  let regExDoubleQuote = /"/g;
  let regExApostrophe = /'/g;

  let newStr = str.replace(regExAnd, "&amp;")
                  .replace(regExLessThan, "&lt;")
                  .replace(regExGreaterThan, "&gt;")
                  .replace(regExDoubleQuote, "&quot;")
                  .replace(regExApostrophe, "&apos;");

  console.log(newStr)
  return newStr;
}

convertHTML("Dolce & Gabbana");