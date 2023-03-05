// Calculadora

// INPUTS
var numA = () => parseInt(document.getElementById("varA").value);
var numB = () => parseInt(document.getElementById("varB").value);

//OPERATIONS
var sum = () => numA() + numB();
var sub = () => numA() - numB();
var mult = () => numA() * numB();
var div = () => numA() / numB();

//RESULT
var ResultSum = () => document.getElementById("result").innerText = sum();
var ResultSub = () => document.getElementById("result").innerText = sub();
var ResultDiv = () => document.getElementById("result").innerText = div();
var ResultMult = () => document.getElementById("result").innerText = mult();

//EVENTS
document.getElementById("suma").addEventListener("click", ResultSum);
document.getElementById("resta").addEventListener("click", ResultSub);
document.getElementById("div").addEventListener("click", ResultDiv);
document.getElementById("multi").addEventListener("click", ResultMult);

//CONDITIONAL
function ifSum () {
  if (isNaN(numA()) || isNaN(numB())){
    document.getElementById("result").innerText = "Error, incluir dos números para sumar.";
  };
};
function ifSub () {
  if (isNaN(numA()) || isNaN(numB())){
    document.getElementById("result").innerText = "Error, incluir dos números para restar.";
  };
};
function ifDiv () {
  if (isNaN(numA()) || isNaN(numB())){
    document.getElementById("result").innerText = "Error, incluir dos números para dividir.";
  };
}
function ifMult () {
  if (isNaN(numA()) || isNaN(numB())){
    document.getElementById("result").innerText = "Error, incluir dos números para multiplicar";
  };
};

//EVENTS 
document.getElementById("suma").addEventListener("click", ifSum);
document.getElementById("resta").addEventListener("click", ifSub);
document.getElementById("div").addEventListener("click", ifDiv);
document.getElementById("multi").addEventListener("click", ifMult);