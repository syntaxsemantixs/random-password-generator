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



// user input variables

var userInput;
var numbers;
var specialChar;
var upperCase;
var lowerCase;

//individual and single scenarios

lowerChar = "abcdefghijklmnopqrstuvwxyz"

upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

numChar = "1234567890"

specChar = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"

//all character scenarios

allcharacters = lowerChar + upperChar + numChar + specChar

lowerUpperNum = lowerChar + upperChar + numChar

lowerNumSpec = lowerChar + numChar + specChar

lowerUpper = lowerChar + upperChar

lowerNum = lowerChar + numChar

lowerSpec = lowerChar + specialChar

upperNumSpec = upperChar + numChar + specChar

upperNum = upperChar + numChar

upperSpec = upperChar + specChar

numSpec = numChar + specialChar


function generatePassword() {
  // userinput prompt
  userInput = window.prompt("Please choose your password length. Must be between (8 - 128 characters).")

  if (!userInput) {
    return "Generator cancelled.\nPress the button to try again.";
    //all prompts based off userinput
  } else if (userInput >= 8 && userInput <= 128) {
    lowerCase = window.confirm("Would you like to use LOWERCASE characters?")
    upperCase = window.confirm("Would you like to use UPPERCASE characters?")
    numbers = window.confirm("Would you like to use NUMBERS characters?")
    specialChar = window.confirm("Would you like to use SPECIAL characters?")
  } else {
    //generatePassword()
    return "Generator cancelled.\nA length between (8 - 128 characters) must be chosen.\nPress the button to try again."
  };

  // no user data results
  if (!lowerCase && !upperCase && !numbers && !specialChar) {
    return "No characters were selected.\nPress the button to try again.";
  }
  //all characters results
  else if (lowerCase && upperCase && numbers && specialChar) {
    var result = ""
    for (let i = 0; i < userInput; i++) {
      result += allcharacters[Math.floor(Math.random() * allcharacters.length)]
      console.log(result)
    }
    return result
  }
  //lower results
  else if (lowerCase && upperCase && numbers && !specialChar) {
    var result = ""
    for (let i = 0; i < userInput; i++) {
      result += lowerUpperNum[Math.floor(Math.random() * lowerUpperNum.length)]
      console.log(result)
    }
    return result
  } else if (lowerCase && !upperCase && numbers && specialChar) {
    var result = ""
    for (let i = 0; i < userInput; i++) {
      result += lowerNumSpec[Math.floor(Math.random() * lowerNumSpec.length)]
      console.log(result)
    }
    return result
  } else if (lowerCase && upperCase && !numbers && !specialChar) {
    var result = ""
    for (let i = 0; i < userInput; i++) {
      result += lowerUpper[Math.floor(Math.random() * lowerUpper.length)]
      console.log(result)
    }
    return result
  } else if (lowerCase && !upperCase && numbers && !specialChar) {
    var result = ""
    for (let i = 0; i < userInput; i++) {
      result += lowerNum[Math.floor(Math.random() * lowerNum.length)]
      console.log(result)
    }
    return result
  } else if (lowerCase && !upperCase && !numbers && specialChar) {
    var result = ""
    for (let i = 0; i < userInput; i++) {
      result += lowerSpec[Math.floor(Math.random() * lowerSpec.length)]
      console.log(result)
    }
    return result
  }
  //upper results
  else if (!lowerCase && upperCase && numbers && specialChar) {
    var result = ""
    for (let i = 0; i < userInput; i++) {
      result += upperNumSpec[Math.floor(Math.random() * upperNumSpec.length)]
      console.log(result)
    }
    return result
  } else if (!lowerCase && upperCase && numbers && !specialChar) {
    var result = ""
    for (let i = 0; i < userInput; i++) {
      result += upperNum[Math.floor(Math.random() * upperNum.length)]
      console.log(result)
    }
    return result
  } else if (!lowerCase && upperCase && !numbers && specialChar) {
    var result = ""
    for (let i = 0; i < userInput; i++) {
      result += upperSpec[Math.floor(Math.random() * upperSpec.length)]
      console.log(result)
    }
    return result
  }
  // number and special result
  else if (!lowerCase && !upperCase && numbers && specialChar) {
    var result = ""
    for (let i = 0; i < userInput; i++) {
      result += numSpec[Math.floor(Math.random() * numSpec.length)]
      console.log(result)
    }
    return result
  }
  //single resutlts
  else if (lowerCase && !upperCase && !numbers && !specialChar) {
    var result = ""
    for (let i = 0; i < userInput; i++) {
      result += lowerChar[Math.floor(Math.random() * lowerChar.length)]
      console.log(result)
    }
    return result
  } else if (!lowerCase && upperCase && !numbers && !specialChar) {
    var result = ""
    for (let i = 0; i < userInput; i++) {
      result += upperChar[Math.floor(Math.random() * upperChar.length)]
      console.log(result)
    }
    return result
  } else if (!lowerCase && !upperCase && numbers && !specialChar) {
    var result = ""
    for (let i = 0; i < userInput; i++) {
      result += numChar[Math.floor(Math.random() * numChar.length)]
      console.log(result)
    }
    return result
  } else if (!lowerCase && !upperCase && !numbers && specialChar) {
    var result = ""
    for (let i = 0; i < userInput; i++) {
      result += specChar[Math.floor(Math.random() * numChar.length)]
      console.log(result)
    }
    return result
  }
}