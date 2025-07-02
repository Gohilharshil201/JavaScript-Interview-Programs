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
