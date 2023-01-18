// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q","R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var selected = []
var passwordLength 
var passwordLengthPrompt = function() {
  var lengthResponse = prompt("What do you want to be the password length?");
  if (lengthResponse >= 8 && lengthResponse <= 128) {
    passwordLength = lengthResponse
  }
  else {
    alert("Pick a password between 8 to 128 characters")
    generatePassword();
  }
};
// Write password to the #password input
function generatePassword () {
  selected = []
  
  passwordLengthPrompt();
  var includeLower = confirm("Do you want to include lower case?");
  var includeUpperCase = confirm("Do you want to include upper case letter?");
  var includeNumbers = confirm("Do you want to include number?");
  var includeSpecial = confirm("Do you want to include special characters?");

  //console.log(passwordLength());

  console.log([includeLower, includeUpperCase, includeNumbers, includeSpecial]);

  if (includeLower == true) {
    selected = [...selected, ...lowerCase]
  }
  if (includeUpperCase == true) {
    selected = [...selected, ...upperCase]
  }
  if (includeNumbers == true) {
    selected = [...selected, ...numbers]
  }
  if (includeSpecial == true) {
    selected = [...selected, ...special]
  }
  console.log(selected)
  
  var password = "";

  for(i = 0; i < passwordLength; i++) {
    var randomChar = selected [Math.floor (Math.random () * selected.length)];

    password = password + randomChar;
  }

  return password;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
