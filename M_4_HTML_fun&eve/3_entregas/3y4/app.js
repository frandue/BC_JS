//Funcion suma(al poner un + me los concatenaba)
function suma (a,b){
 return (-1*(-1*a - 1*b)) ;
};
//Funcion resta
 function resta (a,b){
 return (a - b) ;
};
//Funcion multiplicacion
function multiplicacion (a,b){
 return (a * b) ;
};
//Funcion divisio
function division (a,b){
 return (a / b) ;
};    
//Prgunto que operacion se quiere realizar     
//const opera = prompt ("Que operacion quieres : suma, resta, multiplicacion o division");
//Sconsole.log(opera);

//const varA = prompt ("Valor del primer numero");

//const varB = prompt ("Valor del segundo numero");

var resultado = 0

document.getElementById("suma")
  .addEventListener("click",   );

document.getElementById("resta").addEventListener("click", resta);
document.getElementById("div").addEventListener("click", division);
document.getElementById("multi").addEventListener("click", multiplicacion);
//switch (opera){
//case "suma" :
//        resultado = suma (varA,varB);
//        console.log("El valor de la suma "+ resultado);
//        break;
//case "resta" :
//        resultado = resta (varA,varB);
//        console.log("El valor de la resta "+ resultado);
//       break;
//case "multiplicacion" :
//        resultado = multiplicacion (varA,varB);
//        console.log("El valor de la multiplicacion "+ resultado);
//        break;
//case "division" :
//        resultado = division (varA,varB);
//        console.log("El valor de la division "+ resultado);
//        break;       
//};