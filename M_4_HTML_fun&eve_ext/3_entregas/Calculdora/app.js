// Calculadora

// INPUTS
var numA = () => parseInt(document.getElementById("varA").value);

// VARIABLES
var ope = 0 ;
var conta = 1;
var total = 0;
var result = 0;

//OPERACIONES


//RESULT PARCIAL
function parcial (){  
  console.log(result);
  console.log(conta);
  if (conta == 1 ){result = numA()}
  else if ( conta > 1 && ope == 1){result = result + numA()}
  else if ( conta > 1 && ope == 2){result = result - numA()}
  else if ( conta > 1 && ope == 3){result = result / numA()}
  else if ( conta > 1 && ope == 4){result = result * numA()};
  console.log(result);
  console.log(conta);
};
  //SUM
function sum () {if (conta == 1){result = numA();ope = 1}
  else if ( conta > 1 && ope == 1){result = result + numA();ope=1;}
  else if ( conta > 1 && ope == 2){result = result - numA();ope=1;}
  else if ( conta > 1 && ope == 3){result = result / numA();ope=1;}
  else if ( conta > 1 && ope == 4){result = result * numA();ope=1;};  
};
  //SUBSTRA
function sub () {if (conta == 1){result = numA();ope = 2}
else if ( conta > 1 && ope == 1){result = result + numA();ope=2;}
else if ( conta > 1 && ope == 2){result = result - numA();ope=2;}
else if ( conta > 1 && ope == 3){result = result / numA();ope=2;}
else if ( conta > 1 && ope == 4){result = result * numA();ope=2;};
};
  //DIVISION
function div () {if (conta == 1){result = numA();ope = 3}
else if ( conta > 1 && ope == 1){result = result + numA();ope=3;}
else if ( conta > 1 && ope == 2){result = result - numA();ope=3;}
else if ( conta > 1 && ope == 3){result = result / numA();ope=3;}
else if ( conta > 1 && ope == 4){result = result * numA();ope=3;};
};
  //MULTIPLY
function mult () {if (conta == 1){result = numA();ope = 4}
else if ( conta > 1 && ope == 1){result = result + numA();ope=4;}
else if ( conta > 1 && ope == 2){result = result - numA();ope=4;}
else if ( conta > 1 && ope == 3){result = result / numA();ope=4;}
else if ( conta > 1 && ope == 4){result = result * numA();ope=4;};
};

//COUNTER
function count () {conta = conta + 1 ;};
console.log(conta);

  //OPERATIONS EQUAL
function equ () {
  if (conta == 1 && result == 0){result = "No has puesto número";ope = 5;}
  else if (ope == 1){result = result + numA()}
  else if (ope == 2){result = result - numA()}
  else if (ope == 3){result = result / numA()}
  else if (ope == 4){result = result * numA()}
  else if (conta > 1  ){result = result+" "+"Resultado final"};
};
//RESULT
function OpeTotal () {document.getElementById("result").innerText = result;};
console.log (conta);             
//EVENT OPERA ALL
document.getElementById("suma").addEventListener("click",sum);
document.getElementById("resta").addEventListener("click",sub);
document.getElementById("div").addEventListener("click",div);
document.getElementById("multi").addEventListener("click",mult);
document.getElementById("equal").addEventListener("click",equ);
//EVENT EQUAL
document.getElementById("equal").addEventListener("click",OpeTotal);
//EVENT IMPUT
document.getElementById("suma").addEventListener("click",numA);
document.getElementById("resta").addEventListener("click",numA);
document.getElementById("div").addEventListener("click",numA);
document.getElementById("multi").addEventListener("click",numA);
document.getElementById("equal").addEventListener("click",numA);
//EVENT COUNTER
document.getElementById("suma").addEventListener("click",count);
document.getElementById("resta").addEventListener("click",count);
document.getElementById("div").addEventListener("click",count);
document.getElementById("multi").addEventListener("click",count);
document.getElementById("equal").addEventListener("click",count);
