import Axios from "axios";

//Necistamos una URL en la que hacer la peticion del archivo ".env"
const urlAccountList = `${process.env.BASE_API_URL}/account-list`;     //Nos traemos todos los datos
//Exportamos la lista de cuentas. No necesitamos parametro porque ya esta logeado
export const getAccountList = () =>Axios.get(urlAccountList).then(response => {
//Axios con get para obtener datos, como es una promesa con el then obtengo los parametros del servidor
    return response.data;
});

//URL en la que almaceno las transferencias
const urlTransfers =  `${process.env.BASE_API_URL}/transfer`;

//Funcion para exportar las transferencias
export const makeTransfer = transfer => Axios.post(urlTransfers, transfer).then(({data}) => data);