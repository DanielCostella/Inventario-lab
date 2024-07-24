import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MaterialList from './components/MaterialList';
import SearchMaterial from './components/SearchMaterial';
import AddMaterial from './components/AddMaterial';
import UserList from './components/UserList';
import AddUser from './components/AddUser';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MaterialList />} />
        <Route path="/search" element={<SearchMaterial />} />
        <Route path="/add" element={<AddMaterial />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </Router>
  );
};

export default App;