import React from 'react';
import './Contact.css'; 

function Contact() {
  return (
    <div className="contact-page">
      <div className="company-info">
        <h1>At Iron Gate Studios,</h1>
        <p>we are passionate about capturing moments and telling stories through photography and filmmaking.Feel free to reach out to us for any inquiries, collaborations, or just to say hello!</p>
      </div>
      <div className="contact-container">
        <div className="message-form">
          <h2>Send Us a Message</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-details">
          <h2>Contact Details</h2>
          <p><strong>Email:</strong> contact@irongatestudios.com</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Iron Gate Lane, Cityville, State, Country</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
