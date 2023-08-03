import userImputHelper from "../helper/userImput.helper.js";

function factorial(number) {
  if (!parseInt(number)) {
    return "Please, insert a number next time";
  }
  let result = 1;
  for (let i = parseInt(number); i > 1; i--) {
    result *= i;
  }
  return result;
}

userImputHelper.prompt.question(
  "Which number do you want to see factorial?\n",
  (number) => {
    console.log(
      `Factorial of ${parseInt(number)} (${parseInt(number)})! is ${factorial(
        number
      )}.`
    );
    userImputHelper.prompt.close();
  }
);
