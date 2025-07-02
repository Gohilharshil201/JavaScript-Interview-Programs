const countVowels = (str) => {
  const vowel = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("Hello World"));
console.log(countVowels("javaScript"));
console.log(countVowels("im leaning javascript basic programs!!"));
