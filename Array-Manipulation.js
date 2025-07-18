// NOTE: Uncomment all console log

// Find the smallest element in an array.
// let NumberArr = [10,20,30,50,40,60,70,40,90,60,70,10,20,30]; // Repeated numbers

let NumberArr = [10, 30, 50, 40, 60, 70];

const smallestNumber = () => {
  let result = Math.min(...NumberArr);
  return result;
};
// console.log(smallestNumber());

// Sort an array in ascending order (without sort()).
const sortArray = () => {
  let sortedArray = [];
  while (NumberArr.length > 0) {
    let min = Math.min(...NumberArr);
    sortedArray.push(min);
    NumberArr.splice(NumberArr.indexOf(min), 1);
  }
  return sortedArray;
};

// Using sort() method!
const sorting = (arr) => {
  arr.sort();
  return arr;
};
// console.log(sorting([5, 2, 9, 1, 5]));
// console.log(sorting([5,3,2,1]));

// Find the second-largest number in an array.
let newArr = [30, 20, 40, 10];
const secondLargestNumber = (arr) => {
  const sortedArr = arr.sort((a, b) => b - a);
  return sortedArr[1];
};
// console.log(secondLargestNumber(newArr));

// Remove all falsy values from an array
const arr = [0, "hello", false, "", null, 42, undefined, NaN];
const truthValueOnly = arr.filter(Boolean);
// console.log(truthValueOnly);

//Merge two arrays and remove duplicates
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
const result = [...new Set([...arr1, ...arr2])];
// ...new Set() The spread operator converts the Set back into an array:
// console.log(result);

// Find the index of a specific element in an array
const fruits = ["apple", "banana", "cherry"];
const index = fruits.indexOf("banana");
// console.log(index);

//Rotate an array to the right by k steps
let originalArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const randomizeArr = (arr) => {
  return [...arr].sort(() => Math.random() - 0.5); // FOR Shuffle Array
  // return [...arr].sort(() => Math.random() - 1); // FOR Reverse Array
};
console.log(randomizeArr(originalArr));

//  Split an array into chunks of a given size
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(chunkArray(numbers, 3));

//Find the GCD (Greatest Common Divisor) of two numbers
const GCD = (a, b) => {
  while (b != 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};
// console.log(GCD(48, 18));

// Check if a number is a perfect square
function isPerfectSquare(num) {
  return Number.isInteger(Math.sqrt(num));
}

// console.log(isPerfectSquare(25));
// console.log(isPerfectSquare(26));

// Check if a number is an Armstrong number (e.g., 153 → 1³ + 5³ + 3³ = 153)
function isArmstrong(num) {
  const digits = num.toString().split("");
  const power = digits.length;
  const sum = digits.reduce((acc, d) => acc + Math.pow(+d, power), 0);
  return sum === num;
}

// console.log(isArmstrong(153));
// console.log(isArmstrong(123));

// Implement linear search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// console.log(linearSearch([3, 5, 7, 9], 7));

//Find the first non-repeating character in a string
function firstNonRepeatingChar(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}

console.log(firstNonRepeatingChar("aabbcde"));
