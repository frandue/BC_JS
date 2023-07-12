import Axios from "axios";
//Necistamos una URL en la que hacer la peticion del archivo ".env"
const url = `${process.env.BASE_API_URL}/account-list`;     //Nos traemos todos los datos
//Exportamos la lista de cuentas. No necesitamos parametro porque ya esta logeado
export const getAccountList = () =>Axios.get(url).then(response => {
//Axios con get para obtener datos, como es una promesa con el then obtengo los parametros del servidor
    return response.data;
});

