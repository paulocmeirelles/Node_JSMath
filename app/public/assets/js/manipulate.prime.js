var formPrime = document.getElementById("formIdPrime");
var opTagPrime = document.getElementById("opTagPrime");

function submitForm(event) {
  var prime1 = $("#prime-number").val();
  var prime2 = $("#n-prime-numbers").val();
  prime1 == "" ? (prime1 = 13) : prime1;
  prime2 == "" ? (prime2 = 5) : prime2;

  opTagPrime.innerHTML = "";
  event.preventDefault();
  opTagPrime.innerHTML = `<b>${check_prime_number(
    prime1
  )}</br>${first_n_prime_numbers(prime2)}</b>`;
}

formPrime.addEventListener("submit", submitForm);
