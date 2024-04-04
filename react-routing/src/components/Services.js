import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

function Services() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        <div className="service-item">
          <Link to="/services/photography">
            <div className="image-container">
              <img src={require('../../src/asserts/Laptop.jpeg')} alt="Photography" />
              <img src={require('../../src/asserts/Workings.jpeg')} alt="Photography" />
              <img src={require('../../src/asserts/Wedding.jpeg')} alt="Photography" />
              <img src={require('../../src/asserts/Event.jpeg')} alt="Photography"  />
            </div>
            <h3>Photography</h3>
          </Link>
          <p>Capturing moments that last a lifetime. From weddings to corporate events, our photographers excel in immortalizing every moment.</p>
        </div>
        <div className="service-item">
          <Link to="/services/filmmaking">
            <div className="image-container">
              <img src={require('../../src/asserts/1.jpeg')} alt="Filmmaking" />
              <img src={require('../../src/asserts/2.jpeg')} alt="Filmmaking" />
              <img src={require('../../src/asserts/3.jpeg')} alt="Filmmaking" />
              <img src={require('../../src/asserts/4.jpeg')} alt="Filmmaking" />
            </div>
            <h3>Filmmaking</h3>
          </Link>
          <p>Bringing stories to life on the silver screen. Our filmmakers are passionate about turning visions into cinematic reality.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
