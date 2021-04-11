// Assignment code here
//Added

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function to alert when button is clicked //




//alerts to reference including case, symbols & length





var generateBtn = window.alert("You need to capitalize");