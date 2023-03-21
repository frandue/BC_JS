const producto = { count: 4, price: 12.55, type: "alimentacion"};

//Creo la funcion de multiplicacion
function TotSi ( a , b ) {
    return a * b;
};

//Si la cantidad es menor o igual a 0, precio es 0
var pTot = producto.count <= 0 ? 0: TotSi(producto.count,producto.price);

console.log( "Precio sin iva" + " " + pTot + "€" );

//Creo la variable donde almaceno el impuesto IVA 21%
var iva = TotSi( pTot , 0.21 );

//Modifico el IVA si es un libro o alimentacion
switch(producto.type) {
    case "alimentacion":
        var iva = TotSi(pTot , 0.1);
        break;
    case "libro":
        var iva = TotSi(pTot , 0.04);
        break;
    };
    console.log( "Precio del iva" + " " + iva.toFixed(2) + "€" );
    
    const ptotal = pTot + iva ;
    console.log( "Precio + IVA" + " " + ptotal.toFixed(2) + "€" );