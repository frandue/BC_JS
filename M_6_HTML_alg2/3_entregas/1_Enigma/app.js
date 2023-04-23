// Mapeo de letras
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'"; //aom
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm"; //sz*

//funcion de encriptado
function encryptMessage() {
  var message = document.getElementById("message").value;   // creo una variable en la que se almacene el texto a encriptar
  var encryptedMessage = "";    // creo una variable en la que se almacene el texto encriptado
  for (var i = 0; i < message.length; i++) {
    var index = plainAlphabet.indexOf(message[i]);
    if (index != -1) {
      encryptedMessage += encryptedAlphabet[index];
    } else {
      encryptedMessage += message[i];
    }
  }
  document.getElementById("encrypted").value = encryptedMessage;
}

//funcion de desencriptado
function decryptMessage() {
  var encryptedMessage = document.getElementById("encrypted").value;
  var message = "";
  for (var i = 0; i < encryptedMessage.length; i++) {
    var index = encryptedAlphabet.indexOf(encryptedMessage[i]);
    if (index != -1) {
      message += plainAlphabet[index];
    } else {
      message += encryptedMessage[i];
    }
  }
  document.getElementById("message").value = message;
}

document.getElementById("encryptBtn").addEventListener("click", encryptMessage);
document.getElementById("decryptBtn").addEventListener("click", decryptMessage);