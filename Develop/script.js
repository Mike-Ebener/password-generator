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


var capitalLetters = function () {
  var capital = "";
  capital = true;
window.confirm("Do you want capital letters?");
return capital;

}

// var x = window.confirm("Do you want capital letters?")
  // confirm capital true or false
// var x = window.confirm("Do you want to use symbols?")
  //confirm symbols true or false
// var x = prompt("Choose a password length between 8 & 120")
  //log the number of characters



//alerts to reference including case, symbols & length




