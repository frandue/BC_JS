// Validation COLOR hexadecimal
// https://www.geeksforgeeks.org/how-to-validate-hexadecimal-color-code-using-regular-expression/

const patternURL = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/ ;
const valuesURL = ['#F00','#FFE4C4','#000000','#FFEBCD','FFE#BCD'];

valuesURL.forEach(value => {
  console.log('Regex matchs with ' + value +'? ->', patternURL.test(value));
})