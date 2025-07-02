// Create an object person with properties name, age, and city.
// Add a method greet() that logs "Hello, my name is [name]".

const greeting = {
  name: "harsh",
  age: 20,
  city: "surat",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
greeting.greet();

//Write a function that takes an object and returns all its keys in an array.

const returnKey = Object.keys(greeting);
const returnValue = Object.values(greeting);
console.log(returnKey);
console.log(returnValue);
