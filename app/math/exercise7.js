import userImputHelper from "../helper/userImput.helper.js";

function gradeAverage(grade1, grade2, grade3) {
  if (
    !parseInt(grade1.replace(",", ".")) ||
    !parseFloat(grade2.replace(",", ".")) ||
    !parseFloat(grade3.replace(",", "."))
  ) {
    return "Invalid Values";
  }

  return (
    (parseFloat(grade1) + parseFloat(grade2) + parseFloat(grade3)) /
    3
  ).toFixed(2);
}

userImputHelper.prompt.question("Type grade first grade\n", (grade1) => {
  userImputHelper.prompt.question("Type grade second grade\n", (grade2) => {
    userImputHelper.prompt.question("Type grade third grade\n", (grade3) => {
      console.log(`The average is ${gradeAverage(grade1, grade2, grade3)}`);
      userImputHelper.prompt.close();
    });
  });
});
