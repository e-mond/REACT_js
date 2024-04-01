import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

export default function Home() {
  return (
    <div className="home-container">
      <div className="background-image"></div>
      <div className="content">
        <h1>Welcome to Our Rulaw Unisex Boutique</h1>
        <p>Discover our exquisite collection of dresses.</p>
        <Link to="/items" className="explore-link">Explore Dresses</Link>
      </div>
    </div>
  );
}
