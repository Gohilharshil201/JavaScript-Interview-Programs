// Implement a simple calculator (add, subtract, multiply, divide).
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

console.log("Addition: ", add(5, 3));
console.log("Subtraction: ", subtract(5, 3));
console.log("Multiplication: ", multiply(5, 3));
console.log("Division: ", divide(5, 3));
console.log("Division by zero: ", divide(5, 0));
