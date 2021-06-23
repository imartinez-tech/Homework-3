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


// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
