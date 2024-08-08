import React, { useState } from 'react';
import api from '../api';

const SearchMaterial = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [material, setMaterial] = useState(null);

  const handleSearch = () => {
    api.get(`/materials/${searchTerm}`)
      .then(response => {
        setMaterial(response.data);
      })
      .catch(error => {
        console.error('Error fetching material:', error);
      });
  };

  return (
    <div>
      <h1>Search Material</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter material ID"
      />
      <button onClick={handleSearch}>Search</button>
      {material && (
        <div>
          <h2>Material Details</h2>
          <p>Name: {material.nombre}</p>
          <p>Description: {material.descripcion}</p>
          <p>Stock: {material.stock}</p>
        </div>
      )}
    </div>
  );
};

export default SearchMaterial;