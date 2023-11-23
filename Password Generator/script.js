var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function generatePassword() {
    var passwordLength = parseInt(prompt ("Enter Password Length (Between and 128):"));
    
    // selecting onoe of each Char type//
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChars = "0123456789";
    var specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";
    
    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include Uppercase characters?");
    var includeNumbers= confirm("Include numbers?");
    var includeSpecialChars = confirm("Include special characters?");
    
    var availableChars = "";
    var generatedPassword = "";

    if (includeLowercase) availableChars += lowercaseChars;
    if (includeUppercase) availableChars += uppercaseChars;
    if (includeNumbers) availableChars += numberChars;
    if (includeSpecialChars) availableChars += specialChars;
    
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a valid password legnth between 8 and 128.");
        return "";
    }

    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * availableChars.length);
        generatedPassword += availableChars.charAt(randomIndex);
    }
    
    return generatedPassword;
} 

generateBtn.addEventListener("click", writePassword);