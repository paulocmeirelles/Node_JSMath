var formPalindrome = document.getElementById("formIdPalindrome");
var opTagPalindrome = document.getElementById("opTagPalindrome");

function submitForm(event) {
  var palindromeString = $("#palindrome-string").val();

  opTagPalindrome.innerHTML = "";
  event.preventDefault();
  opTagPalindrome.innerHTML = `<b>${palindromeString} ${palindrome(
    palindromeString
  )}</b>`;
}

formPalindrome.addEventListener("submit", submitForm);
