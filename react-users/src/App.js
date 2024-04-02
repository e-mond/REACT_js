import React, { useState } from 'react';
import UsersForm from './components/UsersForms';
import Users from './components/User';

function App() {
  const [users, setUsers] = useState([
    { name: 'Crispin S. Wales', email: 'cris.wales@codetrain.com', gen: 20 },
    { name: 'Micheal Adams', email: 'micheal02@codetrain.com', gen: 26 },
    { name: 'Benrad Acquah', email: 'b.acquah07@codetain.com', gen: 14 },

  ]);

  const handleAddUser = newUser => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="App">
      <UsersForm onAddUser={handleAddUser} />
      <h1>List of Users</h1>
      <Users users={users} />
    </div>
  );
}

export default App;
