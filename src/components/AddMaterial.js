import React, { useState } from 'react';
import api from '../api';

const AddMaterial = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [stock, setStock] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/materials', { nombre, descripcion, stock })
      .then(response => {
        console.log('Material added:', response.data);
      })
      .catch(error => {
        console.error('Error adding material:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Add Material</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            className="form-control"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Stock:</label>
          <input
            type="number"
            className="form-control"
            value={stock}
            onChange={(e) => setStock(parseInt(e.target.value))}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add</button>
      </form>
    </div>
  );
};

export default AddMaterial;