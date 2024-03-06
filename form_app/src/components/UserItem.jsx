import React, { useState } from 'react';
import { Button, Modal, Form } from "react-bootstrap";
import './styles.css'; 

function UserItem(props) {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState(props.details.name);
    const [email, setEmail] = useState(props.details.email);

    const handleModalState = () => {
        setShowModal(!showModal);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleEdit = () => {
        let newDetails = { name: name, email: email };
        let mergeDetails = { ...props.details, ...newDetails };
        props.editUser(props.details.Id, mergeDetails);
        handleModalState(); // Close modal after editing
    }
    

    return (
        <div className="user-item-container">
            <h1>{props.details.name}</h1>
            <h3>{props.details.email}</h3>
            <div className="user-item-buttons">
              <Button onClick={handleModalState}>Edit</Button>
              <Button onClick={() => props.removeUser(props.details.Id)} variant="danger">Remove</Button>
            </div>
            <Modal show={showModal} onHide={handleModalState}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>User Fullname</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter your fullname" value={name} onChange={handleNameChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleEdit}>Save Changes</Button>
                    <Button variant="secondary" onClick={handleModalState}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default UserItem;
