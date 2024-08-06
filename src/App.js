import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MaterialList from './components/MaterialList';
import SearchMaterial from './components/SearchMaterial';
import AddMaterial from './components/AgregarMaterial';
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
          <Route path="/add" element={<AgregarMaterial />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;