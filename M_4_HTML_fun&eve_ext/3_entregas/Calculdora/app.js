// -------------------Calculadora-------------------
//VALORES INICIALES
let result = 0;
let operation = 0; 

// INPUTS
function getNumA () { return parseInt(document.getElementById("varA").value); };

//function getNumB () { return parseInt(document.getElementById("varB").value); };

//--INITIAL CONDITION
function areNumVal (ope1,operacion) {
  if (isNaN(ope1) ){
    document.getElementById("result").innerText = "Error, incluir número para " + operacion + ".";
    return false;}
  return true;};

//OPERATIONS "+" "-" "/" "*" "=" "parcial"
function ResultSum(){
  var ope1 = getNumA();
  areNumVal (ope1,"sumar");  
  total(ope1, operation ,result);
  operation = 1;
  };
function ResultSub(){
  var ope1 = getNumA();
  areNumVal (ope1,"restar");
  total(ope1, operation ,result);
  operation = 2;
  };
function ResultDiv(){
  var ope1 = getNumA();
  console.log(operation);
  areNumVal (ope1,"división");
  total(ope1, operation ,result);
  operation= 3;
  };
function ResultMult(){
  var ope1 = getNumA();
  areNumVal (ope1,"multiplicación");
  total(ope1, operation ,result);
  operation = 4;
  };
function equal(){
  var ope1 = getNumA();
if ( operation == 0) {result = ope1;}  
else if ( operation == 1) {result = result + ope1;}
else if ( operation == 2) {result = result - ope1;}
else if ( operation == 3 && ope1 ==0) {alert("No se puede divir entre cero");}
else if ( operation == 3 && ope1 !=0) {result = result / ope1;}
else if ( operation == 4) {result = result * ope1;}
document.getElementById("result").innerText = "El valor final es " + result;
  };
function total(ope1, operation, resultope) {
if (result == 0 && operation == 0 ) { result = ope1;}
else if ( operation == 1) {result = result + ope1;}
else if ( operation == 2) {result = result - ope1;}
else if ( operation == 3 && ope1 ==0) {alert("No se puede divir entre cero");}
else if ( operation == 3 && ope1 !=0) {result = result / ope1;}
else if ( operation == 4) {result = result * ope1;};
  };
//EVENTS
document.getElementById("suma").addEventListener("click", ResultSum);
document.getElementById("resta").addEventListener("click", ResultSub);
document.getElementById("div").addEventListener("click", ResultDiv);
document.getElementById("multi").addEventListener("click", ResultMult);
document.getElementById("equal").addEventListener("click", equal);