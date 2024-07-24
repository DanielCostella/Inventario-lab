import React, { useState } from 'react';
import api from '../api';

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/users', { username, password })
      .then(response => {
        console.log('User added:', response.data);
        setUsername('');
        setPassword('');
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add</button>
      </form>
    </div>
  );
};

export default AddUser;