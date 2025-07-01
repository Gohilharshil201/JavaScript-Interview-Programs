// Write a program to swap two numbers without using a temporary variable.
let numberOne = 10;
let numberTwo = 20;

// Without using temp
let swapTwoNumbers = ([numberOne, numberTwo] = [numberTwo, numberOne]);
console.log(swapTwoNumbers);

// Using temp
temp = numberOne;
numberOne = numberTwo;
numberTwo = temp;
console.log(numberOne, numberTwo);
