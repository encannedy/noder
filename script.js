// Assignment Code
var generateBtn = document.querySelector("#generate");

function passwordOptions() {
  var passwordLength = prompt("How long do you want your password?");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Length must be between 8 and 128");
    return;
  }

  var specialChar = confirm("Do you want to use a special character (*&^%$#@!?)");
  var upper = confirm("Do you want to use upper case letters?");
  var lower = confirm("DO you want to use lower case letters?");
  var numeric = confirm("Do you want to use numbers?");

  if (specialChar === false && upper === false && lower === false && numeric === false) {
    alert("Please choose at least one character type");
    return;
  }

  return {
    passwordLength: parseInt(passwordLength),
    specialChar: specialChar,
    upper: upper,
    lower: lower,
    numeric: numeric
  }
}

//expand all of these arrays
var specialCharAt = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"];
// finish adding special characters

var upperCase = ["A", "B", "c", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

//["!","@","A","B","C",1,2,3,4,5,6,7,8,9,0]
// 8
// 0 to 15
// @1A

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var pwd = "";
  var char_superset = [];
  var options = passwordOptions();

  if (options.specialChar) {
    char_superset = char_superset.concat(specialCharAt)
  }
  if (options.upper) {
    char_superset = char_superset.concat(upperCase)
  }
  if (options.lower) {
    char_superset = char_superset.concat(lowerCase)
  }
  if (options.numeric) {
    char_superset = char_superset.concat(numbers)
  }
  // todo add lower
  // todo add number

  for (i = 0; i < options.passwordLength; i++) {

    var index = Math.floor(Math.random() * char_superset.length)

    pwd = pwd.concat(char_superset[index]);
  }


  return pwd;
}
