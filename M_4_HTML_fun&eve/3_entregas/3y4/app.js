// -------------------Calculadora-------------------
// INPUTS
function getNumA () { return parseInt(document.getElementById("varA").value); };
function getNumB () { return parseInt(document.getElementById("varB").value); };
//--INITIAL CONDITION
function areNumVal (ope1,ope2,operacion) {
  if (isNaN(ope1) || isNaN(ope2)){   //ope1 == "" -> si pongo esto en el primero y el valor es cero en//
    document.getElementById("result").innerText = "Error, incluir dos números para " + operacion + ".";
    return false;}
  return true;};
//OPERATIONS & RESULT
function ResultSum(){
  const ope1 = getNumA();
  const ope2 = getNumB();
  if (areNumVal(ope1,ope2,"sumar")){
    const result = ope1 + ope2;
    document.getElementById("result").innerText = "El valor de la suma es : " + result;
  }};
function ResultSub(){
  const ope1 = getNumA();
  const ope2 = getNumB();
  if (areNumVal(ope1,ope2,"restar")){
    const result = ope1 - ope2;
    document.getElementById("result").innerText = "El valor de la resta es : " +  result;
  }};
function ResultDiv(){
  const ope1 = getNumA();
  const ope2 = getNumB();
  if( ope2 == 0){
    console.log(alert("No se puede divir entre cero"))
  } else if (areNumVal(ope1,ope2,"división")){
    const result = ope1 / ope2;
    document.getElementById("result").innerText = "El valor de la división es : " +  result;
  }};
function ResultMult(){
  const ope1 = getNumA();
  const ope2 = getNumB();
  if (areNumVal(ope1,ope2,"multiplicación")){
    const result = ope1 + ope2;
    document.getElementById("result").innerText = "El valor de la multiplicación es : " +  result;
  }};
//EVENTS
document.getElementById("suma").addEventListener("click", ResultSum);
document.getElementById("resta").addEventListener("click", ResultSub);
document.getElementById("div").addEventListener("click", ResultDiv);
document.getElementById("multi").addEventListener("click", ResultMult);