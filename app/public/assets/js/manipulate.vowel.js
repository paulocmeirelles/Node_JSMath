var formVowel = document.getElementById("formIdVowel");
var opTagVowel = document.getElementById("opTagVowel");

function submitForm(event) {
  var vowelString = $("#vowel-string").val();

  opTagVowel.innerHTML = "";
  event.preventDefault();
  opTagVowel.innerHTML = `<b>${vowelString} has ${vowelCounter(
    vowelString
  )} vowels</b>`;
}

formVowel.addEventListener("submit", submitForm);
