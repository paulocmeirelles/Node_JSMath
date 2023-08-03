var formInterest = document.getElementById("formIdInterest");
var opTagInterest = document.getElementById("opTagInterest");

function submitForm(event) {
  let interest = "";

  var interestDuration = $("#interest-duration").val();
  interestDuration == "" ? (interestDuration = "12") : interestDuration;
  var interestCapital = $("#interest-capital").val();
  interestCapital == "" ? (interestCapital = "10000") : interestCapital;
  var interestRate = $("#interest-rate").val();
  interestRate == "" ? (interestRate = "1.5") : interestRate;

  var interestSimple = $('input[id="interest-simple"]:checked').val();
  var interestCompound = $('input[id="interest-compound"]:checked').val();
  interestSimple ? (interest = "simple") : interest;
  interestCompound ? (interest = "compound") : interest;

  opTagInterest.innerHTML = "";
  event.preventDefault();
  opTagInterest.innerHTML = `Final value is ${
    interest == "simple"
      ? simpleInterest(interestDuration, interestCapital, interestRate)
      : compoundInterest(interestDuration, interestCapital, interestRate)
  }`;
}

formInterest.addEventListener("submit", submitForm);
