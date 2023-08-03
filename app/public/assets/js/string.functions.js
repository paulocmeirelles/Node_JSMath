function palindrome(word) {
  if (!word) {
    return "Please, insert a word next time!";
  }
  let lenghtWord = word.length;
  for (let i in word) {
    if (word[i].toUpperCase() !== word[lenghtWord - 1].toUpperCase()) {
      return "isn't a palindrome";
    }
    lenghtWord--;
  }
  return "is a palindrome";
}

function vowelCounter(string) {
  if (!string) {
    return "String not found";
  }
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string[i].toUpperCase() == "A" ||
      string[i].toUpperCase() == "E" ||
      string[i].toUpperCase() == "I" ||
      string[i].toUpperCase() == "O" ||
      string[i].toUpperCase() == "U"
    ) {
      count++;
    }
  }
  return count;
}
