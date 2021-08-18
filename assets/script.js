var password = document.querySelector('#Password');
var button = document.querySelector("button");

    var createPassword = () => {
    var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    var passwordLength = 10;
    var passwordVal = "";
    for (var i=0; i<passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() *  char.length);
        passwordVal += char.substring(randomNumber, randomNumber+1);
    }
document.getElementById("Password").value = passwordVal;
}
button.addEventListener("click", createPassword)