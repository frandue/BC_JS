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

//LISTAR PRODUCTOS     
function listarProductos(carrito) {
    var a = 1;
    console.log("Listado de productos del carrito:");
    carrito.forEach(producto => {
        console.log(`-${a++}- ${producto.name} (ID ${producto.id}): ${producto.count} unidades a $${producto.price} cada una.`);
    });
    };
listarProductos(carrito);