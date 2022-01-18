// Setting a variable of generteBth.
var generateBtn = document.querySelector("#generate");

// Setting a variable to an array with the lower case alphabets.
var passwordLowerLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
//  Creating four variables to generate numbers, use symbols and  generate a password , and a open array.
var passwordNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var passwordSymbols = ["!", "@", "#", "%", "^", "&", "*", "(", ")"];
var password = "generatePassword";
var resultsArr = [];

// Creating a function
function generatePassword() {

  // Created three variables to confirm and one to prompt the user for action.
  var lettersConfirm = window.confirm("Do you want letters in your password?");
  
  var numConfirm = window.confirm("Do you want numbers in your password?");
  
  var symbolConfirm = window.confirm("Do you want symbols in your password?");
  
  var lengthPassword = parseInt(window.prompt("Pick a number from 8 to 128"));
  // Logging the information to the console.
  console.log(typeof lengthPassword);
  console.log(9);

  // Beginning of two if statements.
  if (lengthPassword <= 8 || lengthPassword >= 128) {

    // Calling the unction.
    generatePassword();
  }
  if (!lettersConfirm && !numConfirm && !symbolConfirm) {

    // A windows alert to ask user for input.
    window.alert("Please choose a number, letter, or symbol.");

    // Calling the function.
    generatePassword();
  }
  // Start of a new function, two variables amd to return the element variable.
  function random(arr) {
    var index = Math.floor(Math.random() * arr.length);
    var element = arr[index];
    return element;
  }

  // Beginning of a for loop to be ran with three if statements. Created a new variable and to return the result of passwordString.
  for (let i = 0; i < lengthPassword; i++) {
    if(lettersConfirm){
        resultsArr.push(random(passwordLowerLetters))
    }
    if(numConfirm){
        resultsArr.push(random(passwordNum))
    }
    if(symbolConfirm){
        resultsArr.push(random(passwordSymbols))
    }
  }
    var passwordString = resultsArr.join("")
  return passwordString;
}

//  a function WritePassword that has two variables and a method.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//   Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
