import React from 'react';
import './User.css'

const Users = ({ users }) => {
  return (
    <div className="Users"> 
      <h1>Predefined Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}, <strong>Gen:</strong> {user.gen}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
