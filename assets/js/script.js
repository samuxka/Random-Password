var password = document.getElementById("passsword");

function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%&*()^ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passswordLength = 8;
    var passsword = "";

    for (var i = 0; i <= passswordLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        passsword += chars.substring(randomNumber, randomNumber - 1);
    }

    document.getElementById("password").value = passsword;
}

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0,999);
    document.execCommand("copy");
}