// Write a function that returns the sum of all numbers from 1 to n.

function sumOfallNumber() {
  let arr = [1, 2, 3];
  let sum = arr.reduce((preValue, value) => {
    return preValue + value;
  }, 0);
  return console.log(`sum is ${sum}`);
}
sumOfallNumber();
