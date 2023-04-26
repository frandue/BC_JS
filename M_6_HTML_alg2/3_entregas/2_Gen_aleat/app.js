

var randomPick = (numN, nMin, nMax) => {
  var numN = document.getElementById("varA").value;
  var nMin = document.getElementById("varB").value;
  var nMax = document.getElementById("varC").value;

  var arrayRandom = "";
    if( nMin > nMax) {
      alert("El número mínimo no puede ser mayor que el maximo " );
    } else if( nMin == nMax) {
      alert("El número max no puede ser igual al número min" );
    } else if( numN < 2) {
      alert("El número a generado tiene que ser mayor de 2" );
    } else if( nMax > nMin ){
        for (var i = 0; i < numN; i++) {
          var numRandom = ((nMax - nMin)/Math.random()) + nMin;
          arrayRandom += numRandom.toFixed();
          console.log(numRandom);
    }
    }
  }
//EVENTS
document.getElementById("generator").addEventListener("click", randomPick);