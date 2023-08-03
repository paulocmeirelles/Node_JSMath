import userImputHelper from "../helper/userImput.helper.js";

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

userImputHelper.prompt.question(
  "Type a phrase to count the number of vowels\n",
  (phrase) => {
    console.log(vowelCounter(phrase));
    userImputHelper.prompt.close();
  }
);
