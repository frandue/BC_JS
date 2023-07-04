const reservas = [
  {
    tipoHabitacion: "standard",
    desayuno: true,
    pax: 2,
    noches: 2
  },
  {
    tipoHabitacion: "standard",
    desayuno: true,
    pax: 2,
    noches: 2
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 2
  }
];

class ClaseBase {
  constructor(preciosHabitaciones) {
    this.preciosHabitaciones = preciosHabitaciones;
    this._reservas = [];
    this._subtotal = 0;
    this._total = 0;
  }

  calcularFactorRoom(tipoRoom) {
    return 1 ;
  }

  suplementoPersonaAdicional(pax) {
    return pax > 0 ? --pax * 40 : 0;
  }

  suplementoDesayunoPesona(desayuno) {
    return desayuno ? 15 : 0;
  }

  calculaSubtotal() {
    this._subtotal = this._reservas.reduce((acumulado, lineaReserva) => {
      const { tipoHabitacion, noches, pax, desayuno } = lineaReserva;
      if (pax < 2) {
        return acumulado + noches * this.calcularFactorRoom(tipoHabitacion) + pax * noches * this.suplementoDesayunoPesona(desayuno) ;
      } else {
        return (
          acumulado +
          noches *
            (this.calcularFactorRoom(tipoHabitacion) + this.suplementoPersonaAdicional(pax))
        );
      }
    }, 0);
    this._subtotal = Number(this._subtotal.toFixed(2));
  }

  calcularDescuento() {
    return 1 ; // Implementa el cálculo del descuento según la lógica necesaria
  }

  calcularTotal() {
    this._total = this._subtotal * this.calcularDescuento();
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

class ClaseParticular extends ClaseBase {
  constructor() {     
    super();
  }

  calcularFactorRoom(tipoRoom) {
    switch (tipoRoom) {
      case "standard":
        return 100;
      case "suite":
        return 150;
    }
  }

  calcularDescuento() {
    return 1.21;         // Implementa el cálculo del descuento específico para ClaseParticular
  }

}

class ClaseTour extends ClaseBase {
  constructor() {
    super();
  }

  calcularFactorRoom(tipoRoom) {
    return 100;       // Precio fijo de 100 para todas las habitaciones en ClaseTour
  }

  calcularDescuento() {
    return 1.21 * 0.85;       // Implementa el cálculo del descuento específico para ClaseTour
  }

}

console.log("**Booking Base del hotel***");
const booking1 = new ClaseBase();
booking1.reservas = reservas;
console.log("Subtotal", booking1.subtotal);
console.log("Total", booking1.total);

console.log("**Booking Particular del hotel***");
const booking2 = new ClaseParticular();
booking2.reservas = reservas;
console.log("Subtotal", booking2.subtotal);
console.log("Total", booking2.total);

console.log("**Booking Tour del hotel***");
const booking3 = new ClaseTour();
booking3.reservas = reservas;
console.log("Subtotal", booking3.subtotal);
console.log("Total", booking3.total);