// Remove duplicates from an array.

function removeDuplicateValue() {
  const arr = [1, 2, 3, 4, 5, 6, 6, 3, 7, 8, 8, 4, 5, 9, 0, 2, 6];
  const remove = new Set(arr);
  return console.log([...remove]);
}
removeDuplicateValue();
