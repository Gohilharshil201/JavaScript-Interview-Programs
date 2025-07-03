// NOTE: Uncomment all console log
// Print numbers from 1 to 10 using a for loop.
for (let index = 1; index <= 10; index++) {
//   console.log(`${index}`);
}
console.log("\n");
// Print numbers from 10 to 1 (descending order).
for (let index = 10; index >= 1; index--) {
//   console.error(`${index}`);
}

// Print all odd numbers between 1 and 50.
for (let index = 1; index <= 50; index++) {
  if (index % 2 != 0) {
    // console.log(`${index} is odd number`);
  }
}

// Calculate the sum of digits of a number.
let number = 12345;
let sum = 0;
let digits = number.toString().split("");
sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
// console.log(`Sum of digits is: ${sum}`);

// Print a right-angled triangle pattern using *
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
//   console.log(pattern);
}


