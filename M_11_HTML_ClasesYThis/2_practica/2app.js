// Modulo 11 -- Herencia --

class Animal {
  constructor (nombre, piernas, ruido) {
    this.tipe = "animal";
    this.nombre = nombre;
    this.piernas = piernas;
    this.ruido = ruido;
  }

  habla() {   //Metodo 
    console.log(`${this.nombre} dice ${this.ruido}`);   //Las `` para interpolacion de cadenas
  }

  anda() {
    console.log(`${this.nombre} camina con ${this.pierna}`);   //Las `` para interpolacion de cadenas
  }
  
  set cazaComida(comida) {  
    this.comida = comida;   //Esta propiedad de la clase no existe pero la estamos setteando
  }


  get come() {
    return `${this.nombre} se come ${this.comida || "nada grauann"}`;
  }

}

class Loro extends Animal {
  constructor(nombre, patitas, escandalo) { // nombre es un parametro de entrada, no tiene que ver con la linea 6
    //Llamamo al contructor del padre con 'super' y heredo todas las propiedades
    super(nombre, patitas, escandalo);

    this.tipe = "loro";    // Puedo machacar las del contructor inicial
  }
  
  habla(amos) {
    super.habla ();
    console.log (`Dame chocolate ${amos}`);
  }
}

console.log("*************Esto es del Puto perro");
const laika = new Animal ("Laika", 4, "wolf");
laika.cazaComida = "huesos";
console.log(laika.come);
//console.log(laika.habla());

//Loro(Sultan,2 , "pipas")
console.log("*************Esto es del Loro");
const loro = new Loro ("Jacobeo", 17,"mucho ruido");
loro.habla("Lissette");