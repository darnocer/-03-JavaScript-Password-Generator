// set global variables
var passwordLength;
var charPossible = [];

// prompt user for password options when button is clicked
function getPasswordOptions() {
  // prompt user for password length
  //initialize while loop
  var lengthSelected = true;

  while (lengthSelected) {
    passwordLength = prompt(
      "How many characters would you like the password length to be? Select a number between 8 and 128."
    );
    console.log(passwordLength);
    if (passwordLength === null) {
      alert("No password for you, then");
    }
    // repeats prompt if user did not enter a valid input
    else if (
      passwordLength < 8 ||
      passwordLength > 128 ||
      isNaN(passwordLength)
    ) {
      alert("Please enter a valid input");
    } else {
      // end while loop
      lengthSelected = false;
    }
  }
  console.log("Length: " + passwordLength);

  // prompt user for which character types
  //initialize while loop
  var optionsSelected = true;

  while (optionsSelected) {
    var lowerCase = confirm("Would you like it to contain lowercase letters?");
    console.log("Lowercase? " + lowerCase);

    var upperCase = confirm("Would you like it to contain uppercase letters?");
    console.log("Uppercase? " + upperCase);

    var numeric = confirm("Would you like it to contain numeric characters?");
    console.log("Numeric? " + numeric);

    var special = confirm("Would you like to include special characters?");
    console.log("Special? " + special);

    // check user selected at least one valid input
    if (
      lowerCase == false &&
      upperCase == false &&
      numeric == false &&
      special == false
    ) {
      alert("Must select at least one criterion to generate password");
      // end while loop
    } else {
      optionsSelected = false;
    }
  }

  // Character arrays
  var charLower = "qwertyuiopasdfghjklzxcvbnm";
  var charUpper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var charNumeric = "1234567890";
  var charSpecial = "!@#$%?+=";

  // which character types
  if (lowerCase == true) {
    charPossible.push(charLower);
  }

  if (upperCase == true) {
    charPossible.push(charUpper);
  }

  if (numeric == true) {
    charPossible.push(charNumeric);
  }

  if (special == true) {
    charPossible.push(charSpecial);
  }

  console.log(charPossible);
}

function generatePassword() {
  var indexType;
  var charArray;
  var index;
  var resultAll = [];
  var result = [];
  var password = [];

  for (i = 0; i < passwordLength; i++) {
    // ensure all selected character types are used at least once
    for (j = 0; j < charPossible.length; j++) {
      // move through each character array
      charArray = charPossible[j];
      // randomly select value in selected character array
      index = Math.floor(Math.random() * charArray.length);
      // create part of the password containing at least one of each selected character type
      resultAll[j] = charArray[index];
    }

    // after all character types have been used at least once each, for remaining password characters select at random
    // randomly select character type to select a value from
    indexType = Math.floor(Math.random() * charPossible.length);
    console.log(charPossible[indexType]);
    // grab the random character array
    charArray = charPossible[indexType];
    // randomly select index from selected character array
    index = Math.floor(Math.random() * charArray.length);
    // add value of index to part of the password
    result[i] = charArray[index];
  }
  console.log("resultAll: " + resultAll);
  console.log("result: " + result);

  password = resultAll.concat(result);

  return password.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  charPossible = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// TEST CASES
// password length < 8, > 128, letter, cancel
// only lowercase letters selected
// only uppercase letters selected
// only numeric characters selected
// only special characters selected
// all character types selected
// no character types selected
// clicking generate multiple times in one session
