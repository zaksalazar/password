// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = uppercase.map(letter => letter.toLowerCase())
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getRandomInt(max) {
  Math.random()
     return Math.floor(Math.random() * max)
}

function generatePassword() {
//Step 1 ask user how many characters?
  var passwordLength = prompt("How many charcters would you like your password to be? (8-128)", "12") 

  //password length perameters
if (passwordLength <8 || passwordLength > 128) {
  alert ("password must be betweeb 8 and 128 characters")
  return generatePassword(); 
}
  
//step 2 ask user to use uppercase?
  var useUppercase = confirm('Would you like to include uppercase letters?')
  
//step 3 ask uder to use lowercase? 
  var useLowercase = confirm('Would you like to include lowercase letters?')
  
//step 4 ask user to use numbers?
  var useNumbers = confirm('Would you like to include numbers?')
  
//step 5 ask user to use special character?
  var useSpecials = confirm('Would you like to include special characters?')
  

//arrange selected numbers and characters that can be randomized 
  var potentialCharacters = []
if (useUppercase) {
    potentialCharacters = potentialCharacters.concat(uppercase)
}

if (useLowercase) {
    potentialCharacters = potentialCharacters.concat(lowercase)
}

if (useNumbers) {
  potentialCharacters = potentialCharacters.concat(numbers)
}

if (useSpecials) {
    potentialCharacters = potentialCharacters.concat(special)
}

//create the password length 

var password = ''
for (var i = 0; i < passwordLength; i++) {
  password = password + potentialCharacters[getRandomInt(potentialCharacters.length)]
}
return password 

}
