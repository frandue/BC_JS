const reservas = [
  {
  tipoHabitacion: "standard",
  pax: 1,
  noches: 3
  },
  {
  tipoHabitacion: "standard",
  pax: 1,
  noches: 4
  },
  {
  tipoHabitacion: "suite",
  pax: 2,
  noches: 1
  }
];

class ClaseParticular {
  constructor(reservas) {     
    this._reservas = reservas;
    this._subtotal = 0;
    this._total = 0;
  }

 calcularFactorRoom (tipoRoom) {
   switch (tipoRoom) {
    case "standard":
     return 100;
    case "suite":
     return 150;
    };
  }

  suplementoPersonaAdicional(pax) {
    return ( pax > 1 ? --pax * 40 : 0 )
  }

  calculaSubtotal() {
    this._subtotal = this._reservas.reduce((acumulado, lineaReserva) => {
    const { tipoHabitacion, noches, pax } = lineaReserva;
    if (pax <2) {
      return acumulado + noches * this.calcularFactorRoom(tipoHabitacion);}
    else {
    return acumulado + noches * (this.calcularFactorRoom(tipoHabitacion) + this.suplementoPersonaAdicional(pax));
    }
    }, 0);
    this._subtotal = Number(this._subtotal.toFixed(2));
   }
        
  calcularTotal() {
    this._total = this._subtotal * 1.21;
    this._total = Number(this._total.toFixed(2));
  }
        
  get total() {
   return this._total;
  }
        
  get subtotal() {
   return this._subtotal;
  }
        
  set reservas(reservasExterna) {
  this._reservas = reservasExterna;
  }
}

class ClaseTour extends ClaseParticular{

  calcularFactorRoom (tipoRoom) {
    return 100;
  }

  calcularTotal() {
    this._total = this._subtotal * 1.21 * 0.85;
    this._total = Number(this._total.toFixed(2));
   }

}    
console.log("**Booking Particular del hotel***");
const booking1 = new ClaseParticular(reservas);
booking1.calculaSubtotal();
booking1.calcularTotal();
console.log("Subtotal", booking1.subtotal);
console.log("Total", booking1.total);

console.log("**Booking Tour del hotel***");
const booking2 = new ClaseTour(reservas);
booking2.calculaSubtotal();
booking2.calcularTotal();
console.log("Subtotal", booking2.subtotal);
console.log("Total", booking2.total);