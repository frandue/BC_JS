//Datos de partida
const empleado = {
    bruto: 128500,
    hijos: 8,
    pagas: 16,
  };
//funcion de multiplicacion
function SalRet( a , b){
    return a*b ;
};

//Valor del IRPF en funcion de salario. Legislacion 2023
var ret = 1;
if ( empleado.bruto > 0 && empleado.bruto <=12400) {
        ret = empleado.hijos > 0 ? 0.17 : 0.19;}
else if ( empleado.bruto > 12400 && empleado.bruto <=20199) {
       ret = empleado.hijos > 0 ? 0.22 : 0.24;}
else if ( empleado.bruto >= 20200 && empleado.bruto <=35199) {
        ret = empleado.hijos > 0 ? 0.28 : 0.30;}
else if ( empleado.bruto >= 35200 && empleado.bruto <=59999) {
        ret = empleado.hijos > 0 ? 0.35 : 0.37;}
else if ( empleado.bruto >= 60000 && empleado.bruto <=299999) {
        ret = empleado.hijos > 0 ? 0.43 : 0.45;}
else {
    ret = empleado.hijos > 0 ? 0.45 : 0.47;}
       console.log ( "% retencion del IRPF" + " " + ret*100 + "%" );
//Retencion en el salario anualizado
var iva = SalRet( empleado.bruto , ret);
console.log ( "Retencion del IRPF" + " " + iva + "€");

//Salario neto anualizado
var salImp = empleado.bruto - iva ;
console.log ( "Salario neto anual" + " " + salImp + "€" );

//Salario neto mensual en funcion de las pagas
var salImpme = salImp / empleado.pagas ;
console.log ( "Salario neto mensual" + " " + salImpme + "€" + " " + " en " + " " + empleado.pagas + " " + "pagas");