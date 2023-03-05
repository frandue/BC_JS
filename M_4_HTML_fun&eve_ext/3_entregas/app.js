// Calculadora

// INPUTS
var numA = () => parseInt(document.getElementById("varA").value);
// First number
var ope = 0 ;
var ini = 0;
var total = 0;
var resul = 0;

//OPERATIONS
var sum = () => ope=  1;
var sub = () => ope = 2;
var mul = () => ope = 3;
var div = () => ope = 4;
var end = () => ope = 5;

//EVENTS
document.getElementById("suma").addEventListener("click", sum);
document.getElementById("suma").addEventListener("click", opera);

document.getElementById("equal").addEventListener("click", end);
document.getElementById("equal").addEventListener("click", opera);

//CONDICIONAL
function opera (){
if (ope = 0){
  total = ini + numA;
}
else if (ope =1){
  total = resul + numA ;
}
else if (ope =2){
  total = resul - numA;
}
else if (ope =3){
  total = resul * numA;
}
else if (ope =4){
  total = resul / numA;
}
else if (ope =5){
  total = resul;
};
return resul = total;
};
console.log(resul);

// END EVENTS IQUAL
//RESULT
var ResultSum = () => document.getElementById("result").innerText = end();
document.getElementById("equal").addEventListener("click", equal);


