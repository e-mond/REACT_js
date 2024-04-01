import React, { useState } from 'react';
import UserCard from './UserCard';

const UserListApp = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);

  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      name: `User ${users.length + 1}`,
      email: `user${users.length + 1}@example.com`
    };
    setUsers([...users, newUser]);
  };

  return (
    <div className="user-list-app">
      <h1>User List</h1>
      <button onClick={addUser}>Add User</button>
      <div className="user-list">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserListApp;
