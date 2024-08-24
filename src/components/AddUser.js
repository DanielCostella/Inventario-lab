import React, { useState } from 'react';
import api from '../api';

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage('Por favor, completa todos los campos.');
      return;
    }

    api.post('/users', { username, password })
      .then(response => {
        console.log('Usuario agregado:', response.data);
        setUsername('');
        setPassword('');
        setMessage('Usuario agregado exitosamente.');
      })
      .catch(error => {
        console.error('Error al agregar el usuario:', error);
        setMessage('Error al agregar el usuario.');
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Agregar Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Agregar</button>
        {message && <p className="mt-3">{message}</p>}
      </form>
    </div>
  );
};

export default AddUser;