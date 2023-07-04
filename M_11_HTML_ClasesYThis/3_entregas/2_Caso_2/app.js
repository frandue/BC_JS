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

class CarritoHotel {
  constructor() {     //Propiedades de la clase
    this._reservas = [];
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
    return ( pax > 0 ? --pax * 40 : 0 )
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
   this._total = this._reservas.reduce((acumulado, lineaReserva) => {
   const { tipoHabitacion, noches } = lineaReserva;
   return acumulado + noches * this.calcularFactorRoom(tipoHabitacion) * 1.21;
   }, 0);
        
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
  this.calculaSubtotal();
  this.calcularTotal();
  }
}
        
console.log("**Carrito de hotel***");
const carrito = new CarritoHotel();
carrito.reservas = reservas;
console.log("Subtotal", carrito.subtotal);
console.log("Total", carrito.total);