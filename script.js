// Assignment code here
var passLength;


function generatePassword() {
  var lengthInput = prompt("Enter number of characters between 8-128");
  alert("Password needs at least one capital/one lowercase letter");
  alert("Password needs at least one special character");
  console.log(passLength);
  if (lengthInput && !isNaN(lengthInput)) {
    passLength = Math.max(8, Math.min(128, parseInt(lengthInput, 10)));
    return "Generated password will go here!";
  } else {
    alert("Invalid input. Please enter a valid number between 8 and 128.");
    return "Invalid password length";
  }
}
  
//permitted characters for randomly generated password will go here
 
  const passwordElement = document.getElementById("password");
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const specialCharacter = "!@#$%^&*)(}{][?/><+-_=";
  const allCharacters = upperCase + lowerCase + number + specialCharacter;



var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var passLength = prompt("Enter number of characters between 8-128");
  alert("Password needs at least one capital/one lowercase letter");
  alert("Password needs at least one special character");
  console.log(passLength);
  if (passLength && !isNaN(passLength)) {
    passLength = Math.max(8, Math.min(128, parseInt(passLength, 10)));

    var password = "";
    password += getRandomCharacter(lowerCase);
    password += getRandomCharacter(upperCase);
    password += getRandomCharacter(number);
    password += getRandomCharacter(specialCharacter);
    
    while (passLength > password.length) {
      password += getRandomCharacter(allCharacters);
    }
    console.log("passlength" , passLength);
    console.log("password" , password);

    passwordElement.value = password;
  } else {
    alert("Invalid input. Please enter a valid number between 8 and 128.");
  }
}

function getRandomCharacter(characterSet) {
  return characterSet[Math.floor(Math.random() * characterSet.length)];
}


// Write password 
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += specialCharacter[Math.floor(Math.random() * specialCharacter.length)];

  while (passLength > password.length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  // Display the generated password
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);