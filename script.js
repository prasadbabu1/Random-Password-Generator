const passArea = document.querySelector(".password-area");

function generatePassword(
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSpecialChars
) {
  let charset = "";
  if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) charset += "0123456789";
  if (includeSpecialChars) charset += "!@#$-_";

  if (
    !(
      includeUppercase ||
      includeLowercase ||
      includeNumbers ||
      includeSpecialChars
    )
  ) {
    alert("Please select at least one character type");
    return null;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

function main() {
  const length = parseInt(prompt("Enter the desired length of the password:"));
  const includeUppercase = confirm("Include uppercase letters?");
  const includeLowercase = confirm("Include lowercase letters?");
  const includeNumbers = confirm("Include numbers?");
  const includeSpecialChars = confirm("Include special characters?");

  const password = generatePassword(
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSpecialChars
  );
  if (password) {
    passArea.innerHTML = password;
  }
}
