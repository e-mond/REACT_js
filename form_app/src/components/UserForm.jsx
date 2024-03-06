import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';


function UserForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create a new user object
        const newUser = {
            name: name,
            email: email,
            Id: uuid() 
        };
        // Call the addUser function passed from App component
        props.addUser(newUser);
        // Reset the form fields
        setName("");
        setEmail("");
    }
    

    return (
        <Container className="form-container">
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>User Form</h2>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Label column sm="12" className="form-label">User Fullname</Form.Label>
                    <Col sm="12">
                        <Form.Control className="form-control" type="text" name="name" placeholder="Enter your fullname" value={name} onChange={handleNameChange} />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Form.Label column sm="12" className="form-label">User Email</Form.Label>
                    <Col sm="12">
                        <Form.Control className="form-control" type="email" name="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
                    </Col>
                </Row>

                <Button className="submit-button" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default UserForm;
