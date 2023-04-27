

var randomPick = (numN, nMin, nMax) => {
  var numN = parseInt(document.getElementById("varA").value);
  var nMin = parseInt(document.getElementById("varB").value);
  var nMax = parseInt(document.getElementById("varC").value);

  var numRandom = 0;
  const arrayRandom = [];
    if( (nMin+numN) > nMax) {   // Condiciones varias que yo considero
      alert("Aumenta el número max " );
    } else if( nMin == nMax) {
      alert("El número max no puede ser igual al número min" );
    } else if( nMax > nMin ){
        for (var i = 0; i < numN; i++) {
          numRandom = Math.round(((nMax - nMin)*Math.random()) + nMin);
          while ( arrayRandom.includes(numRandom)){     //Que esta operacion se realice mientras el numero ya pertenezca al array
            numRandom = Math.round(((nMax - nMin)*Math.random()) + nMin);
          }
          arrayRandom.push(numRandom);    //Voy añadiendo los numeros al array   
    }
    console.log(arrayRandom);
    }
    const arrayRan = document.getElementById("arrayRan");
    arrayRan.innerHTML = `Los valores aleatorios son: ${arrayRandom}`;
  }
//EVENTS
document.getElementById("generator").addEventListener("click", randomPick);