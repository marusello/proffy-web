import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proffyamarcelo.herokuapp.com',
});

export default api;