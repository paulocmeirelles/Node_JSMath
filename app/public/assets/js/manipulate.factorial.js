var formFactorial = document.getElementById("formIdFactorial");
var opTagFactorial = document.getElementById("opTagFactorial");

function submitForm(event) {
  var factorialNumber = $("#factorial-number").val();
  factorialNumber == "" ? (factorialNumber = 5) : factorialNumber;

  opTagFactorial.innerHTML = "";
  event.preventDefault();
  opTagFactorial.innerHTML = `<b>${factorialNumber}! = ${factorial(
    factorialNumber
  )}</b>`;
}

formFactorial.addEventListener("submit", submitForm);
