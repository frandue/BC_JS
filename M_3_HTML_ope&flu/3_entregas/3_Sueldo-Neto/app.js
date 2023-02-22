const empleado = {
    bruto: 15500,
    hijos: 2,
    pagas: 14,
  };

function SalRet( a , b){
    return a*b ;
};
var ret = 1;
if ( empleado.bruto > 0 && empleado.bruto <=12400) {
        ret = 0.19;
    }
else if ( empleado.bruto > 12400 && empleado.bruto <=20200) {
       ret = 0.24;}
       console.log ( ret );


