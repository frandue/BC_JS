//Módulo 11

//Centro comercial
//Area perfumeria

// // // // const subtotal = 30;
// // // // const descuento = 10;

// // // // const calculaTotal = (subtotal, descuento) => subtotal - descuento * subtotal / 100 ;

// // // // console.log("Perfumeria" , calculaTotal(subtotal,descuento)); //Perfumeria 27

//Area supermercado (dto. 20%)

// // // // const subtotal = 50;
// // // // const descuento = 20;

// // // // const calculaTotal = (subtotal, descuento) => subtotal - descuento * subtotal / 100 ;

// // // // console.log("Perfumeria" , calculaTotal(subtotal,descuento)); //Perfumeria 40

//Si lo tuviese esto repetido varias veces habria un conflicto de nombres por que ya ha sido declarado esa variable

//Para areglarlo:
    //Renombrarlos -> Poco dinamico y nada interesante
    //Romper en fichero distintos
    //Atraves de las clases, definimos un comportamiento y tenemos copias del mismo. En la clase definimos las normas que queremos implementar.
        //  En la instacia podemos tener diferentes islas o parcelas aisladas en la que tener nuestros datos.


//Definiendo nuestra clase, en vez de function se usa class:

class TotalDepartamento {
  constructor(descuento) {
    this.descuento = descuento;
    this._subtotal = 0;
    // // //this.total = 0; Losdeshabilito por el get
    this.total = 0  // Lo tengo que habilitar para el set
  }
  //Metodos de la clases. La clase expone los funciones hacia fuera. Lo desahilito por el get
  // // // calculaTotal () {
  // // //   this.total = this.subtotal - this.descuento * this.subtotal / 100;

  // Mediante un get(Campo calculado)

  //Getter    -> una función SIN argumentos, que funciona cuando se lee una propiedad
  // // get total () {
  // //   return this._subtotal -(this.descuento * this._subtotal) / 100;
  // // }

  //Setter    -> una función CON un argumento, que se llama cuando se establece la propiedad
  set subtotal (nuevoValor) {
    this._subtotal = nuevoValor;
    this.total = this._subtotal - (this.descuento * this._subtotal) / 100;
  }
  }


  //Mediante un set(samos el _ en el nombre de la propiedad para no usar el mismo)

  

//Instanciar la clase, ojo con el orden

const totalesPerfumeria = new TotalDepartamento(10);
totalesPerfumeria.subtotal = 50;    //Lo habilito para el set
// // // totalesSupermercado.calculaTotal(); Lo deshabilito por el get
console.log("PERF: ", totalesPerfumeria); //Asi puedo ver los valores del objeto creado en perfumeria
console.log("Perfumeria: ", totalesPerfumeria.total);


const totalesSupermercado = new TotalDepartamento(10);
totalesSupermercado.subtotal = 30;    //Lo habilito para el set
// // // totalesSupermercado.calculaTotal();  Lo deshabilito por el get
console.log("SUP: ", totalesSupermercado);  //Asi puedo ver los valores del objeto creado en supermercado
console.log("Supermercado: ",totalesSupermercado.total);