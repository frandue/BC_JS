const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
    ];

//1.1-LISTAR PRODUCTOS     
function listarProductos(carrito) {
    console.log("************* El resultado del 1º ejercicio VERSIÓN A *************");
    var a = 1;
    console.log("Listado de productos del carrito:");
    carrito.forEach(producto => {
        console.log(`-${a++}- ${producto.name} (ID ${producto.id}): ${producto.count} unidades a $${producto.price} cada una.`);
    });
    };
listarProductos(carrito);


//1.2-OTRA FORMA DE LISTAR LOS PRODUCTOS
function listarProductos2(carrito){
    console.log("************* El resultado del 1º ejercicio VERSIÓN B *************");
    var a = 0;
    for ( i=0 ; i < carrito.length; i++){       
        a++
        var carrito2 = 0;
        console.log("-_-_-_- Producto nº " + a + " -_-_-_-");
        for (carrito2 in carrito[i]){
            console.log(carrito2 + ":" + carrito[i][carrito2]);
         };
    };
};
 listarProductos2(carrito);

//2-ELIMINAR EL PRODUCTO CON id 54657 
function eliminarProducto(id) {
    console.log("************* El resultado del 2º ejercicio *************");
    console.log("Elminino el objeto del array Carrito con id=54657")
//Duplico el array al que le voy a eliminar el objeto
    const nuevoCarrito = carrito.slice();
    for (let i = 0; i < nuevoCarrito.length; i++) {
      if (nuevoCarrito[i].id === id) {
        nuevoCarrito.splice(i, 1);
        break;
      }
    }
    var a = 0;
    for ( i=0 ; i < nuevoCarrito.length; i++){       
        a++
        var carrito2 = 0;
        console.log("-_-_-_- Producto nº " + a + " -_-_-_-");
        for (carrito2 in nuevoCarrito[i]){
            console.log(carrito2 + ":" + nuevoCarrito[i][carrito2]);
         };
    };
  }; 
  eliminarProducto(54657);

//3-PRECIO TOTAL CARRITO COMPRA
function SumatorioPrecioProducto() {
    console.log("************* El resultado del 3º ejercicio + Opcional. *************");
    var PreTot = 0 ;
    var PreTotDes = 0 ;
    for ( i=0 ; i < carrito.length; i++){
        PreTot = PreTot + carrito[i].price*carrito[i].count;
        };
    console.log("El precio total del carrito sin descuento es " + PreTot + "€");
    if(PreTot>100){
    PreTotDes=PreTot*0.95
    console.log("El precio total del carrito con descuento del 5% es " + PreTotDes + "€");
    };
  };
  SumatorioPrecioProducto()

//4-FILTRAR PRODUCTOS PRIMIUM
function ProductoPremium() {
    console.log("************* El resultado del 4º ejercicio + Opcional. *************");
    console.log("Los productos con id premium, son:")
    for ( i=0 ; i < carrito.length; i++){
        var n = 0;
        if(carrito[i].premium == true){
            console.log(carrito[i].id);
            n++
        };        
    };

    //Mensajes sobre pedidos premium
    if(n == carrito.length){
        console.log ("Gastos de envio Cero patatero");
    }
    else{
        console.log ("Pedido con gastos de envio, por rata...");
    };
};
ProductoPremium()
 