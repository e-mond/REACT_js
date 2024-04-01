import React from 'react';
import './Contacts.css';


function Contacts({ contacts }) {
  return (
    <div className='contacts'>
      <h2>Directory Of Footballers Across Europe</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
