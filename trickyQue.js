console.log([1, 2, 3] + [4, 5, 6]); // 1,2,34,5,6

const randomNumber = Math.floor(Math.random() * 99 + 1); // Avoid 0
console.log(randomNumber);

const number = [69, 1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 3, 3, 2, 1, 4, 78, 89, 5, 6];
const newArr = number.map((num) => {
  return num * 2;
});
console.log(newArr);

const removeDupe = new Set([...number]);
console.log(removeDupe);
