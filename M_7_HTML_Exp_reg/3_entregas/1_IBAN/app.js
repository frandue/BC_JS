// Validacion de IBAN
const patternIBAN = /^([A-Z]{2}\d{2}\s?(\d{4}\s?){2}\d{2}\s?\d{10})$/;
const valuesIBAN = ['ES6600190020961234567890','ES66 0019 0020 9612 3456 7890','ES 982038 5778 98 300076823','ES982038 5778 98 3000768236','98ES2038 5778 98 3000768236'];

valuesIBAN.forEach(value => {
  console.log('Regex matchs with ' + value +'? ->', patternIBAN.test(value));
  if (patternIBAN.test(value)){
    console.log('Código del pais ' + value[0] + value[1]);
    console.log('Código de control ' + value[2] + value[3]);
  }
})