
// Assignment code here


// Get references to the #generate button element in html
var generateBtn = document.querySelector("#generate");
var generatePassword = function() {

var checkCase = window.confirm ("Do you want to use capital letters?");
  console.log (checkCase);
var checkSymbol = window.confirm ("Do you want to use special symbols?");
  console.log (checkSymbol);
var checkNumber = window.confirm ("Do you want to use numbers?");
  console.log (checkNumber);
var checkLength = window.prompt ("How many characters would you like your password to be (between 8-128)?");
  console.log (checkLength);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// list



