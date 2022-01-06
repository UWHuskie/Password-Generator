// Assignment Code
var generateBtn = document.querySelector("#generate");
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
var passwordNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var passwordSymbols = ["!", "@", "#", "%", "^", "&", "*", "(", ")"];
var password = "generatePassword";
var resultsArr = [];

function generatePassword() {
  var lettersConfirm = window.confirm("Do you want letters in your password?");
  // window.prompt("Yes or No")
  var numConfirm = window.confirm("Do you want numbers in your password?");
  // window.prompt("Yes or No")
  var symbolConfirm = window.confirm("Do you want symbols in your password?");
  // window.prompt("Yes or No")
  var lengthPassword = parseInt(window.prompt("Pick a number from 8 to 128"));
  console.log(typeof lengthPassword);
  console.log(9);
  if (lengthPassword <= 8 || lengthPassword >= 128) {
    generatePassword();
  }
  if (!lettersConfirm && !numConfirm && !symbolConfirm) {
    window.alert("Please choose a number, letter, or symbol.");
    generatePassword();
  }
  function random(arr) {
    var index = Math.floor(Math.random() * arr.length);
    var element = arr[index];
    return element;
  }
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

//  Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//   Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
