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

//OPERATIONS & RESULT
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
function equal() {
if ( operation == 1) {result = result + ope1;}
else if ( operation == 2) {result = result - ope1;}
else if ( operation == 3) {result = result / ope1;}
else if ( operation == 4) {result = result * ope1;};
  document.getElementById("result").innerText = result;
};
function total(ope1, operation, resultope) {
if (result == 0 && operation == 0 ) { result = ope1;}
else if ( operation == 1) {result = result + ope1;}
else if ( operation == 2) {result = result - ope1;}
else if ( operation == 3) {result = result / ope1;}
else if ( operation == 4) {result = result * ope1;};

};


//EVENTS
document.getElementById("suma").addEventListener("click", ResultSum);
document.getElementById("resta").addEventListener("click", ResultSub);
document.getElementById("div").addEventListener("click", ResultDiv);
document.getElementById("multi").addEventListener("click", ResultMult);
document.getElementById("result").addEventListener("click", equal);