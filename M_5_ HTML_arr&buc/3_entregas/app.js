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

//LISTADO DEL PRODUTOS
//var a = 1;
//for ( i=0 ; i < carrito.length; i++){
//    print(carrito[i]);
//    a = ++a;
//};
//function print (producto){
//    console.log("-_-_-_-Producto nº"+ a +"-_-_-_-");
//    console.log("id: " + producto.id);
//    console.log("name: " + producto.name);
//    console.log("price: " + producto.price);
//    console.log("count: " + producto.count);
//    console.log("premium: " + producto.premium);
//};

//ESTRUCTURA DE CARRITO
    console.log("-_-_-_-Producto nº -_-_-_-");
    console.log("id: " + carrito[0].id);
    console.log("name: " + carrito[0].name);
    console.log("price: " + carrito[0].price);
    console.log("count: " + carrito[0].count);
    console.log("premium: " + carrito[0].premium);



//LISTADO DEL PRODUTOS FOR IN
var a = 1;
for ( i=0 ; i < carrito.length; i++){
    print(carrito[i]);
    a++
};
function print (productos2){
    console.log("-_-_-_- Producto nº " + a + " -_-_-_-");
 for (producto2 in productos2){
    console.log(producto2 + ":" + productos2[producto2]);
 };
}