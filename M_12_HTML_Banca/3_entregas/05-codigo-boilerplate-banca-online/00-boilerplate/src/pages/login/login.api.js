// Importamos las libreria de axios, la que usamos en APIs
import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/login`;

//Diferentes metodos:
   // get -> Para recuperar informacio
   // post -> Para insertar datos
   // put -> Para actualizar datos
   // delete -> Para borrar datos

//Metodo para login API
export const isValidLogin = (login) => Axios.post(url, login).then(response => {
            return response.data;

});