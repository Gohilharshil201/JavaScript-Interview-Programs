// Merge two sorted arrays into one sorted array.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
const margeArr = () => {
  return [...arr1, ...arr2];
};
console.log(margeArr());
