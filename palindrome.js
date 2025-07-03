// Write a function to check if a string is a palindrome.

function palindrome(str) {
  const text = str.toLowerCase().split("").reverse().join("");
  if (text == str.toLowerCase()) {
    console.log(`${str} is palindrome`);
  } else {
    console.log(`${str} is not palindrome`);
  }
}
palindrome("Wow");

// Check if a number is a palindrome (e.g., 121).
let palindromeNumber = 121;
const isPalindrome = (num) => {
  const strNum = num.toString();
  const reversedStrNum = strNum.split("").reverse().join("");
  return strNum === reversedStrNum;
};
console.log(`${palindromeNumber} is palindrome: ${isPalindrome(palindromeNumber)}`);
