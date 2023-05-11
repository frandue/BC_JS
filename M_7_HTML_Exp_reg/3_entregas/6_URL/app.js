// Validation URL
// https://gist.github.com/SavannahF/61b12a2c880183e1612488f8ec8b4aa3

const patternURL = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/ ;
const valuesURL = ['https://gist.github.com','https://www.youtube.com','https://www.lemoncode.net','www.lemoncode.net','lemoncode.net'];

valuesURL.forEach(value => {
  console.log('Regex matchs with ' + value +'? ->', patternURL.test(value));
})