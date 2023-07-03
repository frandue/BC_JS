// Carrito de la compra

/**
 *  Cada producto
 *  Nombre , cantidada, compra de cada uno, precio y IVA
 */

// Requisiros

/**
 * Queremos calcular:
 * - El subtotal de la compra( suma de producto por cantidad sin contar con el IVA)
 * - El total de la compra (subtotal + IVA)
 */

const cesta = [
  {
    nombre: "Cerveza",
    cantidad: 1,
    precio: 2,
    tipoIVA: "general"
  },
  {  
    nombre: "Galletas",
    cantidad: 3,
    precio: 1,
    tipoIVA: "reducido"
  },
  {  
    nombre: "Pan",
    cantidad: 4,
    precio: 0.5,
    tipoIVA: "superreducido"
  }
];

class CarritoDeLaCompra {
  constructor() {     //Propiedades de la clase
    this._cesta = [];
    this._subtotal = 0;
    this._total = 0;
  }

calculaSubtotal() {
    // // // for (let i = 0; i < This._cesta.length; i ++) {
    // // //   this._subtotal =
    // // //     this._subtotal + this._cesta[i].precio * this._cesta[i].cantidad;
    // // // }
    //***EVITAMOS EL BUCLE con un DESTRUCTURING ***/

     this._subtotal = this._cesta.reduce((
      acumulado, lineaTicket) => acumulado + (lineaTicket.cantidad * lineaTicket.precio),
      0);     //Valor inicial

}

calcularFactorIVA (tipoIVA) {
  switch (tipoIVA) {
    case "general":
      return 1.21;
    case "reducudo":
      return 1.1;
    case "superreducido":
      return 1.4;   //1,04
  }
  return 1;
}

calcularTotal() {
  this._total = cesta.reduce(
    (acumulado, { cantidad, precio, tipoIVA}) =>
      acumulado + cantidad * precio * this.calcularFactorIVA(tipoIVA),
      0
    );
  this._total = Number(this._total.toFixed(2));     //Añado para redondear el valor  2 decimales
}

get total() {
  return this._total
}

get subtotal() {
  return this._subtotal;
}

set cesta(cestaExterna) {
  this._cesta = cestaExterna;
  this.calculaSubtotal();
  this.calcularTotal(); 
}
}

class CarritoExtranjero extends CarritoDeLaCompra {
  calcularTotal() {
    this._total = cesta.reduce(
      (acumulador, {cantidad, precio }) => acumulador + cantidad*precio,
      0
    ); 
  }
}

console.log("**Carrito de la compra normal***");
const carrito = new CarritoDeLaCompra();
carrito.cesta = cesta;    //1
console.log("Subtotal", carrito.subtotal);
console.log("Total", carrito.total);

console.log("**Carrito de la compra Extrangera***");
const carritoExtrangero = new CarritoExtranjero();
carritoExtrangero.cesta = cesta;    //1
console.log("Subtotal", carritoExtrangero.subtotal);
console.log("Total", carritoExtrangero.total);

