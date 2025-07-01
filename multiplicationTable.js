// Print the multiplication table of a given number.
let i = 3;
for (let index = 1; index <= 10; index++) {
  const result = i * index;
  console.log(`${i} * ${index} =  ${result}`);
}

//Using Arrow Function

const multiplicationTable = (number) => {
  for (let index = 1; index <= 100; index++) {
    console.log(`${number} * ${index} = ${number * index}`);
  }
};
multiplicationTable(5);
