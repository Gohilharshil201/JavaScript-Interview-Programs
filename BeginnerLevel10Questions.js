// Check if a number is positive, negative, or zero.
function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log(checkNumber(5));
console.log(checkNumber(-3));
console.log(checkNumber(0));

// Find the square of a number.
function findSquare(num) {
  return num * num;
}
console.log(findSquare(5));

// Check if a number is divisible by both 5 and 11.
function isDivisibleBy5And11(num) {
  return num % 5 === 0 && num % 11 === 0;
}
console.log(isDivisibleBy5And11(55));
console.log(isDivisibleBy5And11(10));

// Convert minutes into seconds.
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(convertMinutesToSeconds(5));

//Find the area of a rectangle (given length and width).
function findRectangleArea(length, width) {
  return length * width;
}
console.log(findRectangleArea(5, 10));

// Check if a string contains a specific substring.
function containsSubstring(str, substring) {
  return str.includes(substring);
}
console.log(containsSubstring("Hello, world!", "world")); // true
console.log(containsSubstring("Hello, world!", "JavaScript")); // false

// Convert a string to uppercase.
function convertToUpperCase(str) {
  return str.toUpperCase();
}
console.log(convertToUpperCase("Hello, world!"));

//Remove all spaces from a string.
function removeSpaces(str) {
  return str.replace(/\s+/g, "");
}
console.log(removeSpaces("Hello,   world!"));

// Count the number of digits in a number.
function countDigits(num) {
  return num.toString().length;
}
console.log(countDigits(12345)); // 5
console.log(countDigits(0)); // 1

// Check if a given number is an integer.
function isInteger(num) {
  return Number.isInteger(num);
}
console.log(isInteger(5)); // true
console.log(isInteger(5.5)); // false
