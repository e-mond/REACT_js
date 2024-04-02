import React, { useState } from 'react';
import './UsersForm.css'

function UsersForm({ onAddUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gen: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddUser(formData);
    setFormData({
      name: '',
      email: '',
      gen: ''
    });
  };

  return (
    <div>
      <h1>Add New User</h1>
      <form className='FormContainer' onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Gen:</label>
          <input
            type="text"
            name="gen"
            value={formData.gen}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UsersForm;
