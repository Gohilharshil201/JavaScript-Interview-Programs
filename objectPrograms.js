// 1. Create an object car with properties brand, model, and year.
// Add a method displayInfo() that logs the car details.

const car = {
  brand: "Suzuki",
  model: "Swift",
  year: "2024",
  displayInfo() {
    console.log(
      `Car Details Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`
    );
  }
};
// car.displayInfo();

// Convert an object into an array of key-value pairs

const keyValuePair = Object.entries(car);
// console.log(keyValuePair);

// Check if an object is empty
function check() {
  const isEmpty = Object.entries(car).length === 0;
  if (isEmpty) {
    console.log(`Object is Empty`, car);
  } else {
    console.log(`Object has values`, car);
  }
}
// check();

// Deep clone an object (without reference)
const deepClone = JSON.parse(JSON.stringify(car));
// console.log(deepClone);

/*
    Shallow Copy (e.g., Object.assign() or spread operator {...car}) only copies top-level properties 
    (nested objects are still referenced).

    Deep Copy ensures all nested objects/arrays are also cloned.

    const car = {
            brand: "Tesla",
            specs: { range: 500, autopilot: true }
        };

        const deepClone = JSON.parse(JSON.stringify(car));
        deepClone.specs.range = 600; // Only modifies the clone

        console.log(car.specs.range); // 500 (original unchanged)
        console.log(deepClone.specs.range); // 600

    Use Cases:

        ✅ When you need a completely independent copy (modifying deepClone won't affect car).
        ✅ Cloning complex nested objects/arrays safely.
        ✅ Resetting state (e.g., in React, Redux, or Vue).
        ✅ Before modifying an object while keeping the original intact.

    Important:
    ❌ Does NOT work with:

    Functions (methods are removed)
    Date objects (converted to strings)
    undefined, NaN, Infinity (converted to null)
    Circular references (e.g., obj.self = obj → throws TypeError)
*/

// Merge two objects into one
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = { ...obj1, ...obj2 };
const merged2 = {
  ...obj1,
  ...obj2,
  b: `${obj1.b}, ${obj2.b}`
};
// console.log(merged);
// console.log(merged2);

//  Find the number of properties in an object

const findNumberOfProperties = (arr) => {
  let number = Object.keys(arr).length;
  return number;
};
// console.log(findNumberOfProperties(car));

// Filter an object to contain only specific keys
const filterObject = (obj, keys) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([k]) => keys.includes(k))
  );
};

const person = { name: "Alice", age: 30, city: "Paris" };

const filter = filterObject(person, ["name", "age"]);
// console.log(filter);
/*
Object.entries(obj) → Converts the object into an array of [key, value] pairs.
.filter(([k]) => keys.includes(k)) → Keeps only entries where the key (k) is in the keys array.
Object.fromEntries() → Converts the filtered array back into an object.
*/

// Convert an array of objects into a single object with id as keys

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const userMap = Object.fromEntries(users.map((user) => [user.id, user]));
// console.log(userMap);

/* 
users.map(user => [user.id, user])
  Converts each user into a [key, value] pair ([id, user]).

Object.fromEntries()
  Turns the array of [key, value] pairs into an object.
*/

// Check if a key exists in an object
const personDetail = {
  id: 1,
  name: "Alice",
  age: 20,

  id: 2,
  name: "Bob",
  age: 23
};
// console.log("age" in personDetail);
// console.log(personDetail.hasOwnProperty("age"));
// console.log(personDetail.hasOwnProperty("address"));

// Group an array of objects by a property
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 25 }
];

const groupedByAge = people.reduce((acc, person) => {
  const { age } = person;
  if (!acc[age]) acc[age] = [];
  acc[age].push(person);
  return acc;
}, {});

console.log(groupedByAge);
