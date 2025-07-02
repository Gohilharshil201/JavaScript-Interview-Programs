// Write a function to flatten a nested array
// (e.g., [1, [2, [3, 4]], 5] → [1, 2, 3, 4, 5]).

const flattenArray = (arr) => {
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

console.log(flattenArray([1, [2, [3, 4]], 5]));
