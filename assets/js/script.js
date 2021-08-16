// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!#$%&'()*+,-./:;<=>?@[]\^_`{|}~";
var numbers = "123456789";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var length = window.prompt("How many characters do you want in your password?");
  if (length <= 128 && length >= 8 ){
    var confirmLower = window.confirm("Do you want lower case letters?");
    var confirmUpper = window.confirm("Do you want upper case letters?");
    var confirmNumber = window.confirm("Do you want numbers?");
    var confirmSpecial = window.confirm("do you want special characters?");
    
    var charSet = "";
    var password = "";

    if ((confirmLower === false) && (confirmUpper === false) && (confirmNumber === false) && (confirmSpecial === false)) {
      alert("Please choose at least one character type");
      return ("Your Secure Password");
    }

    if (confirmLower === true) {
      charSet += lowerCase ;
    }
    if (confirmUpper === true) {
      charSet += upperCase ;
    }
    if (confirmNumber === true) {
      charSet += numbers ;
    }
    if (confirmSpecial === true) {
      charSet += special ;
    }

    for (var i = 0; i < length; i++) {
      password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return (password);
  }
    else {
     alert("Please enter a number between 8-128");

      return ("Your Secure Password");
    }
}













// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
