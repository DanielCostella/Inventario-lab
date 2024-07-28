import axios from 'axios';

const api = axios.create({
  baseURL: 'https://inventario-lab-backend.onrender.com', // URL de tu backend
});

export default api;