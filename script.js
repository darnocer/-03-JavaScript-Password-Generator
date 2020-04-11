// set global variables
var userLength;
var charPossible = [];

// prompt user for password options when button is clicked
function getPasswordOptions() {
  //initialize while loop
  var initializer = true;

  // prompt user for password length
  while (initializer) {
    userLength = prompt(
      "How many characters would you like the password length to be? Select a number between 8 and 128."
    );
    // displays alert and repeats prompt if user tries to cancel
    if (userLength === null) {
      alert("No password for you, then");
    }
    // displays alert and repeats prompt if user did not enter a valid input
    else if (userLength < 8 || userLength > 128 || isNaN(userLength)) {
      alert("Please enter a valid input");
    } else {
      // end while loop with valid input
      initializer = false;
    }
  }
  console.log("Length: " + userLength);

  //initialize while loop
  initializer = true;

  // prompt user for which character types to include. they must select at least one character type (will be asked again if no to all)
  while (initializer) {
    // ask about lowercase letters
    var userLowercase = confirm(
      "Would you like it to contain lowercase letters?"
    );
    console.log("Lowercase? " + userLowercase);

    // ask about uppercase letters
    var userUppercase = confirm(
      "Would you like it to contain uppercase letters?"
    );
    console.log("Uppercase? " + userUppercase);

    // ask about numbers
    var userNumeric = confirm("Would you like it to contain numbers?");
    console.log("Numeric? " + userNumeric);

    var userSpecial = confirm(
      "Would you like to include speacial characters? (!@#$%?+=)"
    );
    console.log("Special? " + userSpecial);

    // check user selected at least one valid input
    if (
      userLowercase == false &&
      userUppercase == false &&
      userNumeric == false &&
      userSpecial == false
    ) {
      // ask again if they did not select any
      alert("Must select at least one criterion to generate password");
      // end while loop
    } else {
      initializer = false;
    }
  }

  // Character arrays
  var charLower = "qwertyuiopasdfghjklzxcvbnm";
  var charUpper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var charNumeric = "1234567890";
  var charSpecial = "!@#$%?+=";

  // which character types to include in possible characters array
  // add lowercase characters to possible characters array
  if (userLowercase == true) {
    charPossible.push(charLower);
  }

  // add uppercase characters to possible characters array
  if (userUppercase == true) {
    charPossible.push(charUpper);
  }

  // add numbers to possible characters array
  if (userNumeric == true) {
    charPossible.push(charNumeric);
  }

  // add special characters to possible characters array
  if (userSpecial == true) {
    charPossible.push(charSpecial);
  }

  // returns array of strings of different character types
  console.log(charPossible);
}

function generatePassword() {
  // declare variables
  var indexType;
  var charArray;
  var index;
  var resultAll = [];
  var result = [];
  var password = [];

  // adds the user selected length number of values
  for (i = 0; i < userLength; i++) {
    // ensure all selected character types are used at least once
    for (j = 0; j < charPossible.length; j++) {
      // move through each available character array
      charArray = charPossible[j];
      // randomly select index of current character array
      index = Math.floor(Math.random() * charArray.length);
      // add each value from randomly selected index to array
      // create part of the password containing at least one of each selected character type
      resultAll[j] = charArray[index];
    }

    // after all character types have been used at least once each, for remaining password characters select type at random
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

  // combine array with all character types and array with random character types to get password with user selected length
  password = resultAll.concat(result);

  // combine values in array into string without "" or ,
  return password.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // only prompt the user when they click the button
  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // reset global so new password can be generated
  charPossible = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// TEST CASES
// password length < 8, > 128, letter, cancel
// only lowercase letters selected
// only userUppercase letters selected
// only userNumeric characters selected
// only userSpecial characters selected
// all character types selected
// no character types selected
// clicking generate multiple times in one session
