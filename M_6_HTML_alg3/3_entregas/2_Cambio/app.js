// Datos de partida
// Constantes
const changeCost = [200,100,50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01];
// Condiciones del cambio
function billTicket () {
  var deuda = parseFloat(document.getElementById("cost").value).toFixed(2);
  var billeteSeleccionado = parseFloat(document.getElementById("cash").value).toFixed(2);
    if(deuda > billeteSeleccionado && billeteSeleccionado < 200 && deuda < 200) {
       alert("Pagar con un billete mayor");
    } else if (deuda == billeteSeleccionado) {
       alert("El pago fue exacto");  
    } else if (isNaN(deuda) || deuda == "0") {
       alert("No debes nada");
    } else {  
       var cambio = (billeteSeleccionado - deuda).toFixed(2);
       var resultado = document.getElementById("resultado");
       resultado.innerHTML = "";
       for (var i = 0; i < changeCost.length; i++) {
           console.log(changeCost[i],cambio);
         if (changeCost[i] <= cambio) {
           var units = Math.floor(cambio / changeCost[i]);
           printChange(units,changeCost[i]);
           cambio = (cambio - changeCost[i]*units).toFixed(2); 
           if (cambio == 0) return;
        }
      }
    }
}
function printChange (units,type) {
  // Agregar los billetes utilizados al elemento div "resultado"
  var resultado = document.getElementById("resultado");
  resultado.innerHTML += "";
  var p = document.createElement("p");
  if (type >= 5) {
    p.textContent = units + " billete/s de: " + type + " €";
  } else  {
    p.textContent = units +  " moneda/s de: " + type + " €";
  }
  resultado.appendChild(p);
} 
document.getElementById("Cambio").addEventListener("click",billTicket);