// src/components/AddMaterial.js
import React, { useState } from 'react';
import api from '../api';

const AddMaterial = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [stock, setStock] = useState(0);
  const [id, setId] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMaterial = {
      nombre,
      descripcion,
      stock,
      id,
      fecha,
    };

    api.post('/materials', newMaterial)
      .then(response => {
        alert('Material agregado exitosamente');
        setNombre('');
        setDescripcion('');
        setStock(0);
        setId('');
        setFecha('');
      })
      .catch(error => {
        console.error('Error al agregar material:', error);
        alert('Hubo un error al agregar el material');
      });
  };

  return (
    <div className="container mt-5">
      <h2>Agregar Material</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input 
            type="text" 
            className="form-control" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <input 
            type="text" 
            className="form-control" 
            value={descripcion} 
            onChange={(e) => setDescripcion(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input 
            type="number" 
            className="form-control" 
            value={stock} 
            onChange={(e) => setStock(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">ID Usuario</label>
          <input 
            type="text" 
            className="form-control" 
            value={id} 
            onChange={(e) => setId(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha</label>
          <input 
            type="date" 
            className="form-control" 
            value={fecha} 
            onChange={(e) => setFecha(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Agregar Material</button>
      </form>
    </div>
  );
};

export default AddMaterial;