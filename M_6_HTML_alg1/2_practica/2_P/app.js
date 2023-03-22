console.log("Módulo 6 - Algoritmoos 1");
console.log("Bienvenidos");

var number;

do {
var rest;
var letter;

//Paso 1: pedir los datos al usuario
number = prompt("Intoruce tu número de DNI");

//Paso 2: comprobar que es un número 
if (parseInt(number) === Number(number)) {
  console.log("Es un número", number);
  number = Number (number);

  // Paso 3: número entre 0 y 99999999
  if (number >= 0 && number <= 99999999){
    console.log("El número es válido", number)
  // Paso 4: obtener el resto y la letra correspondiente
    rest = number % 23;

    switch (rest) {
      case 0:
        letter = "T";
        break;
      case 1:
        letter = "R";
        break;
      case 2:
        letter = "W";
        break;
      case 3:
        letter = "A";
        break;
      case 4:
        letter = "G";
        break;
      case 5:
        letter = "M";
        break;
      case 6:
        letter = "Y";
        break;
      case 7:
        letter = "F";
        break;
      case 8:
        letter = "P";
        break;
      case 9:
       letter = "D";
        break;
      case 10:
        letter = "X";
        break;
      case 11:
        letter = "B";
        break;
      case 12:
        letter = "N";
        break;
      case 13:
        letter = "J";
        break;
      case 14:
        letter = "Z";
        break;
      case 15:
        letter = "S";
        break;
      case 16:
        letter = "Q";
        break;
      case 17:
        letter = "V";
        break;
      case 18:
        letter = "H";
        break;
      case 19:
        letter = "L";
        break;
      case 20:
        letter = "C";
        break;
      case 21:
        letter = "K";
        break;
      case 22:
        letter = "E";
        break;
    }

    // letter = digito de control
    alert("Número: "+ number + ", letra: " + letter);
    number = null;
    } else {
      alert("El número de DNI es erroneo")
    }
  } else {
  if (number !== null){
      alert(number + " No es un número");
    } 
  }
} while(number !== null);

//Pimer requisito: La entrada debe ser un número
//Segundo requisito: "La entrade debe ser un número entre 0 y 99.999.999
//Tercer requisito: Si lo introducido no es un numero debera indicarse con un 'alert' al usuario
//Cuarto requisito: Debera repetirse el proceso hasta que el usuario pulse cancerlar.