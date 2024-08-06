import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Asegúrate de que esta ruta sea correcta
import MaterialList from './components/MaterialList';
import SearchMaterial from './components/SearchMaterial';
import AgregarMaterial from './components/AgregarMaterial'; // Usando el nombre correcto aquí
import UserList from './components/UserList';
import AddUser from './components/AddUser';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<MaterialList />} />
          <Route path="/search" element={<SearchMaterial />} />
          <Route path="/add" element={<AgregarMaterial />} /> {/* Usando el nombre correcto aquí */}
          <Route path="/users" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;