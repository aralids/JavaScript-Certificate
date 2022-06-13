function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  let sourceProperties = Object.keys(source);
  console.log(sourceProperties);

  let newCollection = collection.filter(obj => sourceProperties.every(property => obj.hasOwnProperty(property) && source[property] === obj[property]));

  console.log(newCollection)
  
  for (let item of newCollection) {
    arr.push(item);
  }

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });