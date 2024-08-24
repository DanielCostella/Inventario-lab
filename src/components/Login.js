import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate para redirección

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Inicializa useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      alert('Inicio de sesión exitoso');
      setUsername('');
      setPassword('');
      navigate('/dashboard');  // Redirige al Dashboard después del login exitoso
    } catch (error) {
      alert('Error al iniciar sesión');
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Usuario</label>
          <input 
            type="text" 
            className="form-control" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input 
            type="password" 
            className="form-control" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;