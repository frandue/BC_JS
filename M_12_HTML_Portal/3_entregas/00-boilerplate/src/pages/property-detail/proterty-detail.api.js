
import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyDetail = id => 
  Axios.get(`${url}/${id}`).then(({data}) => 
    data);


const urlEquipment = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentList = () => 
  Axios.get(`${urlEquipment}`).then(({data}) => 
    data);

const urlContact = `${process.env.BASE_API_URL}/contact`;

//Funcion para exportar las transferencias
export const makeContact = contact => Axios.post(urlContact, contact).then(({data}) => data);
    