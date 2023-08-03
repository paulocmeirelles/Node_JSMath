import userImputHelper from "../helper/userImput.helper.js";

function simpleInterest(duration, initialCapital, interestRate) {
  if (
    !parseInt(duration) ||
    !parseFloat(initialCapital.replace(",", ".")) ||
    !parseFloat(interestRate.replace("%", "").replace(",", "."))
  ) {
    return "Invalid Values";
  }
  let rate = parseFloat(interestRate.replace("%", "").replace(",", ".")) / 100;

  return (
    parseFloat(initialCapital.replace(",", ".")) +
    rate * parseFloat(initialCapital.replace(",", ".")) * duration
  ).toFixed(2);
}

function compoundInterest(duration, initialCapital, interestRate) {
  if (
    !parseInt(duration) ||
    !parseFloat(initialCapital.replace(",", ".")) ||
    !parseFloat(interestRate.replace("%", "").replace(",", "."))
  ) {
    return "Invalid Values";
  }

  return (
    parseFloat(initialCapital.replace(",", ".")) *
    (1 + parseFloat(interestRate.replace("%", "").replace(",", ".")) / 100) **
      duration
  ).toFixed(2);
}

function chosenType() {
  return new Promise((resolve) => {
    userImputHelper.prompt.question(
      "Which type of interest do you want?(type number)\n1. Simple Interest\n2. Compound Interest\n",
      async (type) => {
        if (type) {
          resolve(type);
        }
      }
    );
  });
}

async function interest() {
  const type = await chosenType();
  if (type == 1) {
    userImputHelper.prompt.question(
      "Type the initial capital\n",
      (initialCapital) => {
        userImputHelper.prompt.question(
          "Type the interest rate (in percentage)\n",
          (interestRate) => {
            userImputHelper.prompt.question(
              "Type how many months the investment will durate\n",
              (duration) => {
                console.log(
                  simpleInterest(duration, initialCapital, interestRate)
                );
                userImputHelper.prompt.close();
              }
            );
          }
        );
      }
    );
  } else if (type == 2) {
    userImputHelper.prompt.question(
      "Type the initial capital\n",
      (initialCapital) => {
        userImputHelper.prompt.question(
          "Type the interest rate (in percentage)\n",
          (interestRate) => {
            userImputHelper.prompt.question(
              "Type how many months the investment will durate\n",
              (duration) => {
                console.log(
                  compoundInterest(duration, initialCapital, interestRate)
                );
                userImputHelper.prompt.close();
              }
            );
          }
        );
      }
    );
  } else {
    console.log("Invalid Option");
    userImputHelper.prompt.close();
  }
}
interest();
