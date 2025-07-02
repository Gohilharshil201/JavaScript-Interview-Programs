// Capitalize the first letter of each word in a sentence.

let word = ["im", "learning", "javascript", "basic", "interview", "programs"];
const Capitalize = () => {
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1);
  }
  return word;
};
console.log(Capitalize());
