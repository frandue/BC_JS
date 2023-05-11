//Módulo 7 - Expresiones Regulares - Introducción


// validacion de un correo

////function validateEmail(email) {
//// const atPosition = email.indexOf("@");
////  const dotPosition = email.lastIndexOf(".");
////  if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= email.length) {
////  alert("Not a valid e-mail address");
////  return false;
////  }
////  return true;
//// }
///// Misma expresion usando una regular
/////function validateEmail(email) {
/////  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
/////  return re.test(email.toLowerCase());
///// }

 // Validadcion de una imagen
 //crear un aregular expresion

// //onst pattern = /imagen./;
// imagenA
// imagen0
// imagenB
// imagen
// ImagenB -> No
// imagen BB -> No


const myValueOk = "imagenA";
const myValueNotOk = "imag";
const pattern2 = /imagen./;

const resultOk = pattern2.test(myValueOk);
console.log(resultOk);

const resultNotOk = pattern2.test(myValueNotOk);
console.log(resultNotOk);

// con ^ este simbolo si o si tiene que empezar por iamgen // const pattern = /^imagen./;
// Añadiendo el $ alfinal me limita la logitud de la regExp // const pattern = /^imagen.$/;
// Para que compruebe uno de los caracteres comodines // const pattern = /^imagen.\.jpg; tengo que usa \ para salir de la regExp y poder usar un caracter especial

// cadena de texto
const pattern = /^Jose/;
const values = ['Jose Perez Gomez', 'Manuel Lozano','Maria Jose perez'];

values.forEach(value => {
  console.log('Regex matchs with ' + value +'? ->', pattern.test(value));
})

//cadena de numeros
const pattern3 = /[1234567890]/;
const values3 = ['123123asdf','1', 'A','a'];

values3.forEach(value => {
  console.log('Regex matchs with ' + value +'? ->', pattern3.test(value));
})
//const pattern3 = /[1234567890]/ -> asi podria muchos numeros  y const pattern3 = /^[1234567890]$/ y asi solo un número
//const pattern4 = /^\w\w\w$// ->\w ->[a-zA-Z0-9], todas las letras de la a  la z en la mayusculas y minusculas, todos los número y la barra baja
// /W (mayuscula)son los caracteres contrarios a \w(minuscula) tambien podria escribir en vex de \W == \^w
// Simbolos para limitar el ^empieze y el $terminar
// caracter especial  \d ->[0-9] coninciden numeros \D -> [^0-9] no coinciden numeros.
// \s -> [ ] (espacio en blanco, tabulador, nueva linea) y \S -> [^  ] NO (espacio en blanco, tabulador, nueva linea)

// Ejemplo para validar un DNI
const pattern4 = /^\d\d\d\d\d\d\d\d\s[A-Za-z]$/;
const values4 = ['12345678 Q','12345678-Q','12345678-q','abc45678-Q','abc45678 Q'];

values4.forEach(value => {
  console.log('Regex matchs with ' + value +'? ->', pattern4.test(value));
})

// Ejemplo para validar un DNI SIMPLIFICADO
const pattern5 = /^\d{8}\s[A-Za-z]$/;
const values5 = ['12345678 Q','12345678-Q','12345678-q','abc45678-Q','abc45678 Q'];

values5.forEach(value => {
  console.log('Regex matchs with ' + value +'? ->', pattern5.test(value));
})
// Cuando no sepa el numero de repeticiones /^\d{2,}$ de 2 hasta el infinito

// \s? la interrogacion significa que puede o no haber, en este caso espacio \? -> [0,1] que seria si o no
// \* de cero hasta el infinito -> [0, ], tambien seria que no hubiese numero
// si quiero que aparezca la palabra entera en vez de [] tengo que poner ()

// Ejemplo para validar MATRICULAS
// 1 RegExp para MA4959AZ -> /^[A-Z]{1,2}\d{4}[A-Z]{1,2}$/
// 2 RegExp para 9734HKH  -> /^ d{4}[A-Z]{3}$/
// para elegir entre una cosa o la otra (A)|(B)

const pattern6 = /^([A-Z]{1,2}\d{4}[A-Z]{1,2})|(\d{4}[A-Z]{3})$/;
const values6 = ['MA4959AZ','9734AKH'];

values6.forEach(value => {
  console.log('Regex matchs with ' + value +'? ->', pattern6.test(value));
})

//Verficar una direccion de IP

const pattern7 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
// mas simplificado const pattern7 = /^(\d{1,3}\.){3}\d{1,3}$/;
const values7 = ['123.9.9.1','A.0.0.1','-1.52.45.233','10.98.199.1'];

values7.forEach(value => {
  console.log('Regex matchs with ' + value +'? ->', pattern7.test(value));
})