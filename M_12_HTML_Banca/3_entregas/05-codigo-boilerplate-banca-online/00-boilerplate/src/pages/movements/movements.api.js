//Importo la biblioteca de axios, realizo solicitudes HTTP desde Node.js
import Axios from "axios";

//URL del endpoint de movimientos
const url = `${process.env.BASE_API_URL}/movements`; 

//Aqui obtengo solo los movimiento del Id selecionado.
export const getAccountMovements = (accountId) => {
  const new_url = `${url}?accountId=${accountId}`; // Esta nueva URL me traerá únicamente los movimientos de la cuenta con id 'accountId'
//Get se usa para obtener datos del servidor
  return Axios.get(new_url).then(response => response.data);
} 


// Aqui obtengo todo los movimientos para todos los Id,
export const getMovementsList = () =>{
//Axios con get para obtener datos, como es una promesa con el then obtengo los parametros del servidor
  return Axios.get(url).then(response => response.data);
}
