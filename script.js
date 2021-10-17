// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordMin = ["8"];
var passWordMax = ["128"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var upperCase = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','~','`','=','+','-','<','>','?',';'];



function writePassword(){
  userChoice = window.prompt("Enter password length");
   if (!userChoice) {
     return;
   }
  if (userChoice < passwordMin){
    window.alert("password must be at least 8 characters long.")
    return;
  } else if (userChoice > passWordMax){
    window.alert("Password must be less than 128 characters long.")
    return;
  } else if(userChoice >= passwordMin,userChoice <= passWordMax){
    window.confirm("would you like your password to contain numbers ? Hit yes or no to continue")
  } else (userChoice <= passWordMax);{
    window.confirm("would you like your password to contain number ? Hit yes or no to continue")
  }
  var password = generatePassoword();
  var passwordText = document.querySelector('#password');
  
  passwordText.value = password;

}

function getPasswordOptions() {
  var length = parseInt(
    prompt("How many characters would you like your password to have ?"),
    10
  );
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
      return null
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

function generatePassoword() {
  var options = getPasswordOptions(); 
  var result = [];

  var possibleCharacters = [];
  var guaranteedCharacters = []; 
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
      var possibleCharacters = getRandom(possibleCharacters);
      result.push(possibleCharacters);
    }
    for (let index = 0; index < guaranteedCharacters.length; index++) {
      result[index] = guaranteedCharacters[index];
      }
      return result.join('');
}
// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
