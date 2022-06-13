function pairElement(str) {
  const newStr = str.split("").map(basePair => (basePair == "G") ? [basePair,"C"]
      : (basePair == "C") ? [basePair,"G"]
      : (basePair == "A") ? [basePair, "T"]
      : [basePair, "A"]);

  console.log(newStr);
  console.log(str);

  return newStr;

}

pairElement("GCG");