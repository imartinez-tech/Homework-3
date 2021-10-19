// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var upperCase = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','~','`','=','+','-','<','>','?',';'];

function getPasswordOptions() {
  var length = parseInt(
    prompt("How many characters would you like your password to have ?"),
    10
  );
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }  

  if (length < 8) {
    alert("Password length must be at least 8 characters");
    return null; 
  }
  if (length > 128) {
    alert("Password length must be less than 129 characters");
    return null;
  }
  var hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters."
  );

  var hasNumbers = confirm(
    "Click OK to confirm including numbers."
  );

  var hasLowerCase = confirm(
    "Click OK to confirm including lowercase letters."
  );
  
  var hasUpperCase = confirm(
    "Click OK to confirm including upper case letters."
  );

  if (hasSpecialCharacters === false &&
      hasNumbers === false &&
      hasLowerCase === false &&
      hasUpperCase === false 
    ) { 
      alert("Must select at least one character type");
      return null;
  }

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumbers: hasNumbers,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
  };
  return passwordOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

function generatePassword() {
  var options = getPasswordOptions(); 
  var result = [];

  var possibleCharacters = [];
  var guaranteedCharacters = []; 
  
  if (!options) return null;

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }
  if (options.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(getRandom(lowerCase));
    }
  if (options.hasUpperCase) {
      possibleCharacters = possibleCharacters.concat(upperCase);
      guaranteedCharacters.push(getRandom(upperCase));
    }
    for (let index = 0; index < options.length; index++) {
      var possibleCharacter = getRandom(possibleCharacters);
      result.push(possibleCharacter);
    }
    for (let index = 0; index < guaranteedCharacters.length; index++) {
      result[index] = guaranteedCharacters[index];
      }
      return result.join('');
}

var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
