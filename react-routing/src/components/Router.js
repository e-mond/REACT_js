import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import ServiceDetails from './ServiceDetails';
import './styles.css'; 

const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav className="nav">
          <div className="logo">
            <img src={require('../../src/asserts/L1.png')} alt="ea shots logo" />
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/services" activeClassName="active">Services</NavLink>
            </li>
          </ul>
          <button className="get-template-btn">Get Template</button>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
