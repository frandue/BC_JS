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
        
//LISTAR PRODUCTOS CON FOR IN 
    var a = 1;
    for ( i=0 ; i < carrito.length; i++){
        print(carrito[i]);
        a++
    };
    //Funcion para imprimir todas las variables del producto
    function print (productos2){
        var producto2 = 0;
        console.log("-_-_-_- Producto nº " + a + " -_-_-_-");
     for (producto2 in productos2){
        console.log(producto2 + ":" + productos2[producto2]);
     };
    };

//ELIMINAR EL PRODUCTO CON id 54657 
    let allId = [];
    //creo un nuevo array con solo los id
    for ( i=0 ; i < carrito.length; i++){
    allId[i] = carrito[i].id;
    };
    //busco la posición del producto
    posId = allId.indexOf(54657);
    let carritoEli = [];
    //producto eliminado
    carritoEli = carrito.splice(posId,1);

//PRECIO TOTAL CARRITO COMPRA
    var PreTot = 0 ;
    var PreTotDes = 0 ;
    for ( i=0 ; i < carrito.length; i++){
        PreTot = PreTot + carrito[i].price*carrito[i].count;
        };
    console.log("El precio total del carrito sin descuento es " + PreTot + "€");
    if(PreTot>100){
    PreTotDes=PreTot*0.95
    console.log("El precio total del carrito con descuento del 5% es " + PreTotDes + "€");
    }
    


//FILTRAR PRODUCTOS PRIMIUM
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
        console.log ("Pedido sin gastos de envio");
    }
    else{
        console.log ("Pedido con gastos de envio");
    };
