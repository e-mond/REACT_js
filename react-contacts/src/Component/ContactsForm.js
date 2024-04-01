import React, { useState } from 'react';

function ContactsForm({ onAddContact }) {
  const [formData, setFormData] = useState({ name: '', phoneNumber: '', location: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(formData);
    setFormData({ name: '', phoneNumber: '', location: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h2>Add To Directory</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
        <button type="submit">Add New Person</button>
      </form>
    </div>
  );
}

export default ContactsForm;
