var formGrade = document.getElementById("formIdGrade");
var opTagGrade = document.getElementById("opTagGrade");

function submitForm(event) {
  var gradeNumber1 = $("#grade-number1").val();
  gradeNumber1 == "" ? (gradeNumber1 = "5") : gradeNumber1;
  var gradeNumber2 = $("#grade-number2").val();
  gradeNumber2 == "" ? (gradeNumber2 = "6") : gradeNumber2;
  var gradeNumber3 = $("#grade-number3").val();
  gradeNumber3 == "" ? (gradeNumber3 = "7") : gradeNumber3;

  opTagGrade.innerHTML = "";
  event.preventDefault();
  opTagGrade.innerHTML = `The average is ${gradeAverage(
    gradeNumber1,
    gradeNumber2,
    gradeNumber3
  )}`;
}

formGrade.addEventListener("submit", submitForm);
