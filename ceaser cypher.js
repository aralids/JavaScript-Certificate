function rot13(str) {
 let newStr = str
                  .split("")
                  .map(item => Boolean(item.match(/\W/)) == true ? item.charCodeAt(0) : item.charCodeAt(0) + 13 <= "Z".charCodeAt(0) ? item.charCodeAt(0) + 13 : (item.charCodeAt(0)+13)-26)
                  .map(item => String.fromCharCode(item))
                  .join("")
                  
  console.log(newStr);
  return newStr;
}

rot13("SERR PBQR PNZC");