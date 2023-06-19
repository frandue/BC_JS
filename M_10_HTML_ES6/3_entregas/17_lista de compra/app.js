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

console.log("Lista sin IVA ");
console.log( JSON.stringify(shoppingCart));

//A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
function shoppingCarIVA(list) {
  return list.map(item => {
    const { product, price, units } = item;
    const IVA = (price * units * 0.21).toFixed(2);
    return { product, price, units, IVA };
  });
}
console.log("Lista con IVA ");
console.log( JSON.stringify(shoppingCarIVA(shoppingCart)));

//B. Ordena la lista de más a menos unidades.
function moreToLess(list) {
  return list.sort((a, b) => b.units - a.units);
}
console.log("Lista de mas a menos unidades ");
console.log(JSON.stringify(moreToLess(shoppingCart)));

//C. Obtén el subtotal gastado en droguería.
function subTotalDrugstore(list) {
  return list
  .filter(item => item.category === "Droguería")
  .map(item => {
    const { product, price, units } = item;
    const SUB = (price * units).toFixed(2);
    return { product, price, units, SUB };
  });
}
console.log("subtotal gastado en droguería ");
console.log(JSON.stringify(subTotalDrugstore(shoppingCart)));
