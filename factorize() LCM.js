function factorize(num) {
  const factors = {};
  for (let prime = 2; prime <= num; prime++) {
    while ((num % prime) === 0) {
      factors[prime] = (factors[prime]) ? factors[prime] + 1 : 1;
      num /= prime;
    }
  }
  return factors;
}

console.log(factorize(28))

function smallestCommons(arr) {
  let orderedArr = arr[0] < arr[1] ? [arr[0], arr[1]] : [arr[1], arr[0]]
  console.log(orderedArr);

  let primeFactors = {};
  for (let i = orderedArr[0]; i <= orderedArr[1]; i++) {
    let primes = factorize(i);
    for (let j in primes) {
      if (!primeFactors[j] || primes[j] > primeFactors[j]) {
        primeFactors[j] = primes[j]
      }
    }
  }
  
  let multiple = 1;
  for (let i in primeFactors) {
    multiple *= i ** primeFactors[i]
  }
  return multiple;
}

smallestCommons([1,5]);