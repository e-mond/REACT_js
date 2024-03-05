import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'; 

function App() {
  const [users, setUser] = useState([
    {name: "King", email: "king@email.com", Id: uuid()}, 
    {name: "Ewuraba", email: "ewuraba@email.com", Id: uuid()}, 
    {name: "Bob", email: "bob46@email.com", Id: uuid()}, 
    {name: "Jack", email: "jack@email.com", Id: uuid()}, 
  ]);

  const addNewUser = (newUser) => {
    setUser([...users, newUser]);
  };

  const editUser = (UserId, newUserDetails) => {
    let arr = users.map(user =>
  };

  const removeUser = (UserId) => {
    console.log(UserId);
  }

  return (
    <Container>
      <Row>
        <Col>
          <UserForm  addUser={addNewUser} />
        </Col>

        <Col>
          <UserList users={users}
                    editUser={editUser}
                    removeUser={removeUser} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
