// Write a function to check if a number is prime.

const isPrime = (n) => {
  if (n < 0) return false;
  for (let index = 2; index < n; index++) {
    if (n % index === 0) return false;
  }
  return true;
};
console.log(isPrime(2));
console.log(isPrime(17));
console.log(isPrime(25));
console.log(isPrime(97));
