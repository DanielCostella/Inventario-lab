import React, { useState, useEffect } from 'react';
import api from '../api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleDelete = (id) => {
    api.delete(`/users/${id}`)
      .then(response => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Users</h1>
      <ul className="list-group">
        {users.map(user => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            {user.username}
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;