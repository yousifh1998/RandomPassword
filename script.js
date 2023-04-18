var generateBTN = document.querySelector("#genearate");

function generatePassword() {
  console.log("You clicked the button!")
   
  return "Generated Password will go here!"
}


     function WritePassword() {
    var password = generatePassword(); 
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

generateBTN.addEventListener("click", WritePassword);