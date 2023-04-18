var generateBTN = document.querySelector("#genearate");

function WritePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

generateBTN.addEventListener("click", WritePassword);