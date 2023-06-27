// Modulo 11 -- This --

// ******************** class PreciosAPI {
// // //   constructor() {
// // //     this.descuento = 0.8;
// // //   }

// // //   cargaPrecioDeServidor () {
// // //     setTimeout (function() {
// // //       const precio = 2; // <- Simulando entrada de la API

// // //       console.log(precio * this.descuento);
// // //       console.log("TCL: PreciosAPI -> cargaPreciosDeServidor -> this", this.descuento);
// // //     }, 1000);
// // //   }
// // // }

// // // const preciosAPI = new PreciosAPI();
// // // preciosAPI.cargaPrecioDeServidor();

// Tre formas de arreglar esto

//*********************** 1_Enlazar un el this

// // // // class PreciosAPI {
// // // //   constructor() {
// // // //     this.descuento = 0.8;
// // // //   }

// // // //   cargaPrecioDeServidor () {
// // // //     setTimeout (function() {
// // // //       const precio = 2; // <- Simulando entrada de la API

// // // //       console.log(precio * this.descuento);
// // // //       console.log("TCL: PreciosAPI -> cargaPreciosDeServidor -> this", this.descuento);
  
// // // //     }.bind(this), 1000); // Lo enlazamos al this
// // // //   }
// // // // }

// // // // const preciosAPI = new PreciosAPI();
// // // // preciosAPI.cargaPrecioDeServidor();

//*********************** 2_Enlazar con una flecha, Con las arrow function usa el this interno

// // // class PreciosAPI {
// // //   constructor() {
// // //     this.descuento = 0.8;
// // //   }

// // //   cargaPrecioDeServidor () {
// // //     setTimeout (() => {   //Lo enlazamos con una flecha
// // //       const precio = 2; // <- Simulando entrada de la API

// // //       console.log(precio * this.descuento);
// // //       console.log("TCL: PreciosAPI -> cargaPreciosDeServidor -> this", this.descuento);
  
// // //     }, 1000);
// // //   }
// // // }

// // // const preciosAPI = new PreciosAPI();
// // // preciosAPI.cargaPrecioDeServidor();


// ******************** 3_Con Self or that {
  class PreciosAPI {
  constructor() {
    this.descuento = 0.8;
  }

  cargaPrecioDeServidor () {
    //Asignar el valor this dentro de una variable por fuera de la funcion interna para poder usarla
    const self = this ; //Creo una variable llamada self o that
    setTimeout (function() {
      const precio = 2; // <- Simulando entrada de la API

      console.log(precio * self.descuento);
      console.log("TCL: PreciosAPI -> cargaPreciosDeServidor -> this", self.descuento);
    }, 1000);
  }
}

const preciosAPI = new PreciosAPI();
preciosAPI.cargaPrecioDeServidor();

