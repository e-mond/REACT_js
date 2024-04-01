import React from 'react';
import './Books.css';

function Books({ books }) {
  return (
    <div className='books-container'> 
      <h2>Books</h2>
      <table className='table-container'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
