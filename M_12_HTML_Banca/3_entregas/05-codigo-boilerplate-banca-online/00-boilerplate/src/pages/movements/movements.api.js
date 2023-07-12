import Axios from "axios";
//En json de este URL me traigo todos los movimientos
const url = `${process.env.BASE_API_URL}/movements`;     //Nos traemos todos los dato

export const getMovementsList = () =>Axios.get(url).then(response => {
    //Axios con get para obtener datos, como es una promesa con el then obtengo los parametros del servidor
        return response.data;
    });