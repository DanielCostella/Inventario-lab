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

  return (
    <div className="container mt-5">
      <h1 className="text-center">Materials</h1>
      <ul className="list-group">
        {materials.map(material => (
          <li key={material.id} className="list-group-item">
            <strong>{material.nombre}</strong>: {material.descripcion} (Stock: {material.stock})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaterialList;