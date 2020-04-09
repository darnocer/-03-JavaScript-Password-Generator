// prompt user for password length

var lengthSelected = true;
var passwordLength;

while (lengthSelected) {
  passwordLength = prompt("How many characters would you like the password length to be? Select a number between 8 and 128.");
  if (
    passwordLength < 8 || 
    passwordLength > 128 || 
    isNaN(passwordLength)
    ) {
      alert("Please enter a valid input");
      } 
  else {
    lengthSelected = false;
  }
}

console.log("Length: " + passwordLength);

// prompt user for which character types
var lowerCase = confirm("Would you like it to contain lowercase letters?");
console.log("Lowercase? " + lowerCase);

var upperCase = confirm("Would you like it to contain uppercase letters?");
console.log("Uppercase? " + upperCase);

var numeric = confirm("Would you like it to contain numeric characters?");
console.log("Numeric? " + numeric);

var special = confirm("Would you like to include special characters?");
console.log("Special? " + special);

// Character arrays

var charLower = "qwertyuiopasdfghjklzxcvbnm";
var charUpper = "QWERTYUIOPASDFGHJKLZXCVBNM";
var charNumeric = "1234567890";
var charSpecial = "!@#$%?+=";

var charPossible = [];

// which character types
if (lowerCase == true) {

  charPossible = [].concat(charPossible, charLower);

}

if (upperCase == true) {

  charPossible = [].concat(charPossible, charUpper);

}

if (numeric == true) {

  charPossible = [].concat(charPossible, charNumeric);

}

if (special == true) {

  charPossible = [].concat(charPossible, charSpecial);

}

// Possible characters
charPossible = charPossible.join('');
console.log("Possible characters: " + charPossible);

var result = [];

function generatePassword() {
  var lengthCharPossible = charPossible.length;
  console.log(lengthCharPossible);

  var index;

    for (i = 0; i < passwordLength; i++) {
     index = Math.floor(Math.random() * lengthCharPossible); 
     console.log("index: " + index);
     console.log("value: " + charPossible[index]);

     result[i] = charPossible[index];
  }

  return result.join('');
  // console.log("Password: " + result); 

}



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
