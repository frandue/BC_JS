import Axios from "axios";

//URL del endpoint de movimientos
const url = `${process.env.BASE_API_URL}/movements`; 

export const getAccountMovements = (accountId) => {
  const new_url = `${url}?accountId=${accountId}`; // Esta nueva URL me traerá únicamente los movimientos de la cuenta con id 'accountId'
  return Axios.get(new_url).then(response => response.data);
} 

export const getMovementsList = () =>{
  //Axios con get para obtener datos, como es una promesa con el then obtengo los parametros del servidor
  return Axios.get(url).then(response => response.data);
}
