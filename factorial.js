// Calculate the factorial of a number.
const factorial = (n) => {
  if (n < 0) return;
  if (n === 0 || n === 1) return 1;
  //  NOTE: Method: 1
  //   let result = 1;
  //   for (let index = 2; index <= n; index++) {
  //     result *= index;
  //   }
  //   return result;

  // NOTE: Method: 2
  return n * factorial(n - 1);
};
console.log(factorial(5));
