function spinalCase(str) {
  let newStr = str
                  .replace(/([a-z])([A-Z])/g, "$1 $2")
                  .toLowerCase()
                  .split(/\W|_/)
                  .filter(substr => substr !== "")
                  .join("-");
  console.log(str, newStr);

  return newStr;
}

spinalCase('This Is Spinal Tap');