// Validacion matricula coche
const patternCAR = /^(\d{4}\s?\-?[A-Z]{3})$/;
const valuesCAR = ['2021 GMD','2345-GMD','4532BDB','0320-AAA','AAA-0320'];

valuesCAR.forEach(value => {
  console.log('Regex matchs with ' + value +'? ->', patternCAR.test(value));
  if (patternCAR.test(value)){
    console.log('Parte numérica ' + value[0] + value[1] + value[2] + value[3]);
    if(value[4] == "-" ){
        console.log('Parte literal ' + value[5] + value[6] + value[7]);
    }else{
        console.log('Parte literal ' + value[4] + value[5] + value[6] );
    }
  }
})