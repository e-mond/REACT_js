import React, { useState } from 'react';
import Users from './components/User'; 

function App() {

  //An initial array of predefined users
  const initialUsers = [
    { name: 'Rebecca Adams', email: 'adamsbecca01@got.com', gen: 'Femaale' },
    { name: 'John Snow', email: 'johnsnow@got.com', gen: 'Male' },
  
  ];

  //  state that holds users array
  const [users, setUsers] = useState(initialUsers);


  return (
    <div className="App">

      {/* Passing the users array as props to the Users component */}
      <Users users={users} /> 
    </div>
  );
}

export default App;
