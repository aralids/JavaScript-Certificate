function sumFibs(num) {
  let fib1 = 1;
  let fib2 = 1;
  let sum = 1;

  while (fib2 <= num) {
    let fibCopy = fib2;
    if (fibCopy % 2 !== 0) {
      sum += fibCopy;
      console.log("TRUE", fibCopy)
    }
    fib2 += fib1;
    fib1 = fibCopy;
  }
  console.log(sum)
  return sum;
}

sumFibs(4);