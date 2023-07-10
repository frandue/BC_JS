// Lista de la compra:
const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

// console.log("Lista sin IVA ");
// console.log(shoppingCart);

//A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
function shoppingCartIVA(list) {
  return list.map(item => {
    return {
      ...item,
      iva: Math.round(item.price*0.21 * 100) / 100,
    }
  });
}
// console.log("Lista con IVA ");
// console.log( shoppingCartIVA(shoppingCart));

//B. Ordena la lista de más a menos unidades.
function moreToLess(list) {
  return list.sort((a, b) => {
    if (a.units > b.units) return -1;
    if (a.units < b.units) return 1;
    return 0;
  });
}
// console.log("Lista de mas a menos unidades ");
// console.log(moreToLess(shoppingCart));

//C. Obtén el subtotal gastado en droguería.
function subTotalDrugstore(list) {
  return list
  .filter(item => item.category === "Droguería")
  .reduce((accumulator, currentValue) => accumulator + currentValue.units * currentValue.price,
  0
  );
}
// console.log("subtotal gastado en droguería ");
// console.log(subTotalDrugstore(shoppingCart));


//D.  Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.
function listSort(list) {
  list.sort((a, b) => a.category.localeCompare(b.category));
  list.forEach(item =>console.log( `${item.product} (${item.category})-> ${item.price * item.units} €`));
}
console.log("Producto(categoría)-> Precio Total €");
listSort(shoppingCart);

// console.log(listSort(shoppingCart));