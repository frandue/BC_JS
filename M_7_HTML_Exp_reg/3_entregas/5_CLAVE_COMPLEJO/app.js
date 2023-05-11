// Validation Password
//https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a

const patternPassword = /^(?=.*[!@#$%^&*()_+-=,./;':\"\\|\[\]{}<>?])(?=.*[A-Z])(?=.*\d)(?=.*[a-z]).{8,}$/ ;
const valuesPassword = ['2021"@GMaD','2345"@-GaMD','4532BDB"@a','0320"@-AAAa','AAA"@-0320a'];

valuesPassword.forEach(value => {
  console.log('Regex matchs with ' + value +'? ->', patternPassword.test(value));
})