import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceDetails.css'; 

const ServiceDetails = () => {
  let { id } = useParams();

  let serviceDetails = {
    photography: {
      title: "Photography",
      description: "Capturing moments that last a lifetime. From weddings to corporate events, our photographers excel in immortalizing every moment."
    },
    filmmaking: {
      title: "Filmmaking",
      description: "Bringing stories to life on the silver screen. Our filmmakers are passionate about turning visions into cinematic reality."
    }
  
  };

  return (
    <div className="service-details-container">
      {serviceDetails[id] && (
        <>
          <h2>{serviceDetails[id].title}</h2>
          <p>{serviceDetails[id].description}</p>
          <Link to="/services" className="back-link">Back to Services</Link>
        </>
      )}
    </div>
  );
};

export default ServiceDetails;
