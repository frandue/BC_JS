import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyDetail = id => 
  Axios.get(`${url}/${id}`).then(({data}) => 
    data);
    