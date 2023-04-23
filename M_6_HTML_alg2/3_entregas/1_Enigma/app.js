// Mapeo de letras
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'"; //aom
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm"; //sz*

//funcion de encriptado
function encryptMessage() {
  var message = document.getElementById("message").value;   // creo una variable en la que se almacene el texto a encriptar que he introducido
  var encryptedMessage = "";    // creo una variable en la que se almacene el texto encriptado
  for (var i = 0; i < message.length; i++) {    // Recorro los elementos de "message" desde 0 hasta message.length
    var index = plainAlphabet.indexOf(message[i]);    // De cada letra de "message" busco el numero que le corresponde en "plainAlphabet"
    console.log(index);
    if (index != -1) {  // Si el numero de index es != a -1 voy almaceando en "encryptedMessage" el mensaje encriptado 
      encryptedMessage += encryptedAlphabet[index];
      console.log(encryptedMessage);
    } else {    // Si el numero de index es = a -1 guado el valor "message" en "encryptedMessage"
      encryptedMessage += message[i];
      console.log(encryptedMessage);
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