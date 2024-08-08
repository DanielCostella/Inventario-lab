import axios from 'axios';

const api = axios.create({
  baseURL: 'https://inventario-lab-backend.onrender.com/api', // URL de tu backend
});

export default api;