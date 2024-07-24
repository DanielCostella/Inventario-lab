import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Asegúrate de que este es el puerto en el que corre tu backend
});

export default api;