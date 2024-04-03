import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
  let { id } = useParams();

  return (
    <div>
      <h2>Service Details</h2>
      <p>Service ID: {id}</p>
    </div>
  );
};

export default ServiceDetails;
