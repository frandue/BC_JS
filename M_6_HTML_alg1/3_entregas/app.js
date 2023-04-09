// Constantes. Tipos de IVA
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

var showProducts = productList => {     //Creo una funcion en la que creo el contenido en HTML
  var container = document.getElementById("Product-list-container");  //Elijo en que parque quiero que se enpiece a crear el arbol diamico
  var subTotal = 0;
  var subTotalTax = 0;

  var num = 1;    //Variable para contabilizar el numero de productos
  for (var product of productList) {
    var description = document.createElement("div"); // Todo va a estar conerizado de "div"
    
    var name = document.createElement("span");    //Dentro de la variable NAME almaceno en un span la descripcion de producto y el numero
    name.innerText = num++ + ". " + product.description;
    description.appendChild(name);
    
    var price = document.createElement("span");   //Dentro de la variable PRICE almaceno en un span almaceno el valor del producto 
    price.innerText = " - " + product.price + "€/Ud.";
    description.appendChild(price);

    var input = document.createElement("input"); // Almaceno dentro del input parametros
    input.type = "number";    
    input.min = 0;
    input.max = product.stock;    // valor maximo limitado por el stock
    input.value = 0;
    input.title = product.tax;    // almace en esta variable el valor del tipo de IVA
    description.appendChild(input);
    container.appendChild(description);
  };
  
  var calculateButton = document.createElement("button");   // Creo el boton 
  calculateButton.innerText = "CALCULAR";   // Texto que introduzco en el boton
  calculateButton.type = "submit";    // Tipo para darle las propiedades con CSS
  calculateButton.addEventListener("click", function() {    // Funcion que se ejecuta al hacer click en el boton
    var inputs = container.getElementsByTagName("input");
    subTotal = 0;
    subTotalTax = 0;
    for (var i = 0; i < inputs.length; i++) {
      var price = inputs[i].previousSibling.textContent.replace(" - ", "").replace("€/Ud.", "");  // Devuelve el nodo anterior al especificado y me quedo con product.price
      if (inputs[i].value > 0) {
        subTotal += inputs[i].value * price; // almaceno el subtotal el valor de cada producto por su numero de unidades
      }
      if (inputs[i].value > 0) {
        subTotalTax += inputs[i].value * price * (parseInt(inputs[i].title) / 100); // almaceno el IVA de cada producto por su numero de unidades
      }
    }
    var subTotalText = document.getElementById("subtotal");
    subTotalText.innerText = "Subtotal: " + subTotal.toFixed(2) + "€";
    
    var subTotalTaxText = document.getElementById("IVA");
    subTotalTaxText.innerText = "IVA: " + subTotalTax.toFixed(2) + "€";

    var subTotalWithTaxText = document.getElementById("TOTAL");
    subTotalWithTaxText.innerText = "TOTAL: " + ( subTotal + subTotalTax ).toFixed(2) + "€";
  });
  container.appendChild(calculateButton);

  var subTotalDiv = document.createElement("div");
  subTotalDiv.id = "subtotal";
  subTotalDiv.innerText = "Subtotal: 0€";
  container.appendChild(subTotalDiv);

  var subTotalTaxDiv = document.createElement("div");
  subTotalTaxDiv.id = "IVA";
  subTotalTaxDiv.innerText = "IVA: 0€";
  container.appendChild(subTotalTaxDiv);

  var subTotalWithTaxDiv = document.createElement("div");
  subTotalWithTaxDiv.id = "TOTAL";
  subTotalWithTaxDiv.innerText = "TOTAL: 0€";
  container.appendChild(subTotalWithTaxDiv);
};

showProducts(products);