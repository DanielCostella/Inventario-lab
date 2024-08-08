import React, { useState, useEffect } from 'react';
import api from '../api';

const MaterialList = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    api.get('/materials')
      .then(response => {
        setMaterials(response.data);
      })
      .catch(error => {
        console.error('Error fetching materials:', error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/materials/${id}`);
      setMaterials(materials.filter(material => material.id !== id));
    } catch (error) {
      console.error('Error deleting material:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center" style={{ fontSize: '2.5rem', color: 'blue' }}>Bienvenido a Inventario</h1>
      <ul className="list-group">
        {materials.map(material => (
          <li key={material.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{material.nombre}</strong>: {material.descripcion} (Stock: {material.stock})
            </div>
            <button className="btn btn-danger" onClick={() => handleDelete(material.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaterialList;