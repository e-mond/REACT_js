import React, { useState } from 'react';


function BooksForm({ onAddBook }) {
  const [formData, setFormData] = useState({ title: '', author: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook(formData); // Passes the form data to the parent component
    setFormData({ title: '', author: '', description: '' }); // Clears form data
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
        </div>
        <div className="form-input">
          <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} />
        </div>
        <div className="form-input">
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        </div>
        <button type="submit" className="form-button">Add Book</button>
      </form>
    </div>
  );
}

export default BooksForm;
