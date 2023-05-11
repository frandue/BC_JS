function introCard() {
  // Obtener el valor del input de la tarjeta
  const cardNumInput = document.getElementById("cardNum");
  const cardNum = cardNumInput.value;
  const cardNumIntro = cardNum.slice(0, 2);
  console.log(cardNum);
  console.log(cardNumIntro);
  validCard();
}
function validCard() { 
  const patternCard = /^(50|51|52|53|54|55)\d{2}\s?\-?\d{4}\s?\-?\d{4}\s?\-?\d{4}$/;
  var p = document.createElement("p");

  if (patternCard.test(cardNum.value)) {
    p.textContent = "El número de tarjeta es correcto";
  } else {
    p.textContent = "El número de tarjeta no es correcto";
  }
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  resultado.appendChild(p);
}
document.getElementById("ok").addEventListener("click", introCard);