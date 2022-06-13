function convertBinary(binaryStr) {
  let decimal = 0;
  for (let i = binaryStr.length - 1; i >= 0; i--) {
    if (binaryStr[i] == "1") {
      decimal += Math.pow(2, (binaryStr.length - 1) - i);
    }
  } 
  return decimal;
}

console.log(convertBinary("11110111"))

function binaryAgent(str) {
  let newStr = str.split(" ")
                  .map(item => convertBinary(item))
                  .map(item => String.fromCharCode(item))
                  .join("");
  console.log(newStr);
  return newStr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");