var products = [
  {
    product: "Jamón Ibérico",
    units: 1,
    price: 9.99,
  },
  {
    product: "Queso Tostado",
    units: 6,
    price: 4.45,
  },
  {
    product: "Vino Tinto",
    units: 12,
    price: 2.15,
  },
];

var getDiscount = (units, cost) => {
  var unitDiscount = units > 5 ? 5 : 0;
  var costDiscount = cost >= 50 ? 5 : 0;
  return unitDiscount + costDiscount;
};

var productCost = product => {
  var productCost = product.units * product.price;
  var productDiscount = getDiscount(product.units, productCost);
  return productCost * (1 - productDiscount / 100);
};

var totalCost = productList => {
  var totalCost = 0;
  for (var product of productList){
    totalCost = totalCost + productCost(product)
  };
  return totalCost;
};

console.log(totalCost(products));