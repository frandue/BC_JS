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
  constructor() {
    this._cesta = [];
    this._subtotal = 0;
  }

  calculaSubtotal() {
    // // // for (let i = 0; i < This._cesta.length; i ++) {
    // // //   this._subtotal =
    // // //     this._subtotal + this._cesta[i].precio * this._cesta[i].cantidad;
    // // // }
    //***EVITAMOS EL BUCLE con un DESTRUCTURING ***/

     this._subtotal = this._cesta.reduce((
      acumulado, lineaTicket) => acumulado + (lineaTicket.cantidad * lineaTicket.precio),
      0); //Valor inicial

  }

  get subtotal() {
    return this._subtotal;
  }

  set cesta(cestaExterna) {
    this._cesta = cestaExterna;
    this.calculaSubtotal();
  }
}

const carrito = new CarritoDeLaCompra();

carrito.cesta = cesta;

console.log("Subtotal", carrito.subtotal);

**************         1,50,00
