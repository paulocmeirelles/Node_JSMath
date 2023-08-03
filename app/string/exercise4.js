import userImputHelper from "../helper/userImput.helper.js";

function palindrome(word) {
  if (!word) {
    return "Please, insert a word next time!";
  }
  let lenghtWord = word.length;
  for (let i in word) {
    if (word[i].toUpperCase() !== word[lenghtWord - 1].toUpperCase()) {
      return "This word isn't a palindrome";
    }
    lenghtWord--;
  }
  return "This word is a palindrome";
}

userImputHelper.prompt.question(
  "Write a word to know if it's a palindrome\n",
  (word) => {
    console.log(`${palindrome(word)}.`);
    userImputHelper.prompt.close();
  }
);
