// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = parseInT(prompt("Enter password length(betwee8 and 128):"));
   if (IntersectionObserverEntry(passwordLength)  ||passwordLength < 8 || passwordLenth> 128) {
    alert("please enter a valid password legnth between 8 and 128. 128.");
    return"";

  }

  var includeLowercase = confirm("Include lowercase charachters?");
  var includeUppercase = confirm("Include Uppercase charachters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialChars = confirm("Include special charachters?");

  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
    alert("please select at least one character type.");
    return "";
  }