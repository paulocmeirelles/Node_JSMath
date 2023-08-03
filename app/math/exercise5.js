import userImputHelper from "../helper/userImput.helper.js";

function table(number) {
  if (!parseInt(number)) {
    return "Please insert a number next time!";
  }

  for (let i = 1; i <= 10; i++) {
    console.log(`${parseInt(number)} * ${i} = ${parseInt(number) * i}`);
  }
}

userImputHelper.prompt.question(
  "Type a number to print your table\n",
  (number) => {
    table(number);
    userImputHelper.prompt.close();
  }
);
