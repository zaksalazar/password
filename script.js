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

// Alphabet, Numbers, Special Characters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = uppercase.map(letter => letter.toLowerCase())
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"]

function generatePassword(){}
//Step 1 ask user how many characters?
var passwordLength = promt('How many charcters would you like your password to be?', '12') 
console.log(passwordLength)
//step 2 ask user to use uppercase?
var useUppercase = confirm('Would you like to include uppercase letters?')
console.log(useUppercase)
//step 3 ask uder to use lowercase? 
var useLowercase = confirm('Would you like to include lowercase letters?')
console.log(useLowercase)
//step 4 ask user to use numbers?
var useNumbers = confirm('Would you like to include numbers?')
console.log(useNumbers) 
//step 5 ask user to use special character?
var useSpecials = confirm('Would you like to include special characters?')
console.log(useSpecials) 