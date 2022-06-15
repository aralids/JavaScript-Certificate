function convertToRoman(num) {
  const romanNumerals = {1: "I", 4: "IV", 5 : "V", 9: "IX", 10: "X", 40: "XL", 50: "L", 90: "XC", 100: "C", 400: "CD", 500: "D", 900: "CM", 1000: "M"};
  if (num === 0) {
    return "";
  } else {
    for (let i of Object.keys(romanNumerals).reverse()) {
      if (num >= i) {
        return String(romanNumerals[i]) + convertToRoman(num-i);
      }
    }
  }
}

convertToRoman(68);
console.log(convertToRoman(68));