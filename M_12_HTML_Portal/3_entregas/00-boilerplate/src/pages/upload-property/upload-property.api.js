import Axios from 'axios';

const urlEquipment = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentList = () => 
  Axios.get(`${urlEquipment}`).then(({data}) => 
    data);

const urlProvinces = `${process.env.BASE_API_URL}/provinces`;

export const getProvincesList = () => 
  Axios.get(`${urlProvinces}`).then(({data}) => 
    data);
    
const urlSaleTypes = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypes = () => 
  Axios.get(`${urlSaleTypes}`).then(({data}) => 
    data);

const urlContact = `${process.env.BASE_API_URL}/properties`;

//Funcion para exportar las transferencias
export const makePropertie = contact => Axios.post(urlContact, contact).then(({data}) => data);
    