const producto = { count: 3, price: 12.55, type: "alimentacion"};

const noiva = producto.count < 0 ? 0 : producto.count*producto.price;

console.log( "Valor sin iva" + " " + noiva + "€" );

let iva = noiva*0.21;;

switch(producto.type) {
case "alimentacion":
    iva = noiva*0.1;
    break;
case "libro":
    iva = noiva*0.04;
    break;
}
console.log( "Valor del iva" + " " + iva + "€" );

const ptotal = noiva + iva ;
console.log( "Valor total" + " " + ptotal + "€" );