import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaSignInAlt, FaShoppingCart } from 'react-icons/fa';


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        {/* Logo */}
        <img src="/src/asserts/Logo.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-middle">
        {/* Navigation Links */}
        <NavLink to="/" activeClassName="active" className="nav-link">Home</NavLink>
        <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
        <NavLink to="/service" activeClassName="active" className="nav-link">Services</NavLink>
      </div>
      <div className="navbar-right">
        {/* Sign-in Button */}
        <button className="signin-btn">
          <FaSignInAlt />
          Sign In
        </button>
        {/* Add to Cart Icon */}
        <div className="cart-icon">
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
}
