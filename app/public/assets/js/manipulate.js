var form = document.getElementById("formId");
var opTag = document.getElementById("opTag");

function submitForm(event) {
  opTag.innerHTML = "";
  event.preventDefault();
  opTag.innerHTML = `<b>${simpleCalculator()}</b>`;
}

form.addEventListener("submit", submitForm);

function simpleCalculator() {
  let operator = "";
  var number1 = $("#calculus-number1").val();
  var number2 = $("#calculus-number2").val();

  var operator1 = $('input[id="plus"]:checked').val();
  var operator2 = $('input[id="minus"]:checked').val();
  var operator3 = $('input[id="multiply"]:checked').val();
  var operator4 = $('input[id="divide"]:checked').val();

  operator1 ? (operator = "+") : operator;
  operator2 ? (operator = "-") : operator;
  operator3 ? (operator = "*") : operator;
  operator4 ? (operator = "/") : operator;

  number1 == "" ? (number1 = 10) : number1;
  number2 == "" ? (number2 = 5) : number2;

  return calculator(number1, number2, operator);
}
