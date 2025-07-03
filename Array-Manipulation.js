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
// console.log(sorting([5,3,2,1]));

// Find the second-largest number in an array.
let newArr = [30,20,40,10]
const secondLargestNumber = (arr) => {
  const sortedArr = arr.sort((a, b) => b - a);
  return sortedArr[1];
}
console.log(secondLargestNumber(newArr));

