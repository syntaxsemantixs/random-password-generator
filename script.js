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



  var userInput;
  var numbers;
  var specialChar;
  var upperCase;
  var lowerCase;

lowerChar = "abcdefghijklmnopqrstuvwxyz"

upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

numChar = "1234567890"

specChar = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"

allcharacters = lowerChar + upperChar + numChar + specChar

lowerUpperNum = lowerChar + upperChar + numChar

lowerNumSpec = lowerChar + numChar + specChar

lowerUpper = lowerChar + upperChar

lowerNum = lowerChar + numChar

lowerSpec = lowerChar + specialChar

upperNumSpec = upperChar + numChar + specChar

upperNum = upperChar + numChar

UpperSpec = upperChar + specChar

numSpec = numChar + specialChar


  var values;

function generatePassword() {
  console.log("Hello")


  userInput = window.prompt("Please choose your password length. Must be between (8 - 128 characters).")

  if (!userInput){
    return "Generator cancelled.\nPress the button to try again.";
  } else if (userInput > 8 && userInput < 128) {
    lowerCase = window.confirm("Would you like to use LOWERCASE characters?")
    upperCase = window.confirm("Would you like to use UPPERCASE characters?")
    numbers = window.confirm("Would you like to use NUMBERS characters?")
    specialChar = window.confirm("Would you like to use SPECIAL characters?")
  }else {
    generatePassword()
  };

  // no user data
  if (!lowerCase && !upperCase && !numbers && !specialChar) {
    return "No characters were selected.\nPress the button to try again.";
  }else if (lowerCase && upperCase && numbers && specialChar){
    var result = ""
    for (let i=0; i < userInput; i++) {
      result += allcharacters[Math.floor(Math.random() * allcharacters.length)]
      console.log(result)
    }
    return result
  }
}