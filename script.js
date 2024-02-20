
function generatePassword() {
  let passwordLength = prompt("Enter the desired length for the password:");
  while(isNaN(passwordLength)  || passwordLength < 8  || passwordLength > 128) {
    passwordLength = prompt("Password length must be between 8 and 128 characters. Please enter a valid length:");
  }

  let includeUppercase = window.confirm("Include uppercase characters?");
  let includeLowercase = window.confirm("Include lowercase characters?");
  let includeNumbers = window.confirm("Include numbers?");
  let includeSymbols = window.confirm("Include symbols?");

  let charset = "";
  if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) charset += "0123456789";
  if (includeSymbols) charset += "!@#$%^&*()-_+=<>?";

  if (charset === "") {
    return "No character set selected. Please include at least one type of character.";
  }
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

