// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
    var passwordLength = parseInt(prompt("Enter password length(betwee8 and 128):"));
    if (isNaN(passwordLength)  ||passwordLength < 8 || passwordLength> 128) {
        alert("please enter a valid password legnth between 8 and 128. 128.");
        return"";
        
    }
    // selecting onoe of each Char type//
    var includeLowercase = confirm("Include lowercase charachters?");
    var includeUppercase = confirm("Include Uppercase charachters?");
    var includeNumbers = confirm("Include numbers?");
    var includeSpecialChars = confirm("Include special charachters?");
    
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
        alert("please select at least one character type.");
        return "";
    }
    // options of character to use//
    var includeLowercase = "abcdefghijklmnopqrstuvwxyz";
    var includeUppercase = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
    var includeNumbers = "0123456789?";
    var includeSpecialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";
    
    var availableChars = "";
    if (includeLowercase) availableChars += lowercaseChars;
    var (includeUppercase) availableChars += UppercaseChars;
  var (includeNumbers) availableChars += numberChars;
  var (includeSpecialChars) availableChars += specialChars;
  
  vargeneratedPassword = "";
  for (var i =  0; i < passwordLength; i++) {
      var randomIndex = Math.floor(math.random() * availableChars.lenth);
      generatedpassword += avaialablechars.charAt(randomIndex);
    }
    return genratedPassword;
}
function writePassword() {
    var password = generatePassword();
    var passwordText = Password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);