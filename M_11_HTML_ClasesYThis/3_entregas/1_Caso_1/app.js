const reservas = [
  {
  tipoHabitacion: "standard",
  pax: 3,
  noches: 2
  },
  {
  tipoHabitacion: "standard",
  pax: 3,
  noches: 2
  },
  {
  tipoHabitacion: "suite",
  pax: 3,
  noches: 2
  }
];

class CarritoHotel {
  constructor(reservas) {     //Propiedades de la clase
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
        
  set reservas(reservas) {
  	this._reservas = reservas;
  }
}
        
console.log("**Booking Particular del hotel***");
const booking = new CarritoHotel(reservas);
booking.calculaSubtotal();
booking.calcularTotal();
console.log("Subtotal", booking.subtotal);
console.log("Total", booking.total);