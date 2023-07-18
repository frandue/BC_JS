import Axios from "axios";

//Necistamos una URL en la que hacer la peticion del archivo ".env"
const urlAccountList = `${process.env.BASE_API_URL}/account-list`;     //Nos traemos todos los datos

//Exportamos la lista de cuentas. No necesitamos parametro porque ya esta logeado
export const getAccountList = () =>Axios.get(urlAccountList).then(response => {
//Axios con get para obtener datos, como es una promesa con el then obtengo los parametros del servidor
    return response.data;
});

const urlAccount = `${process.env.BASE_API_URL}/account`;

export const insertAccount = (account) =>
    Axios.post(`${urlAccount}/${account.id}`, account).then( response => {
        return response.data;
     }); 