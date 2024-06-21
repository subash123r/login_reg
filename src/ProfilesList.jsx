

import React from 'react';
import './index.css'
import { useNavigate } from 'react-router-dom';



const services = [

  {
    title: 'Low',
    price: '$40/hour',
    features: [
      'School & Learning Spaces',
      'Basement & Garages',
      'Moving & Relocation',
      'Home Office',
    ],
  },
  {
    title: 'Average',
    price: '$40/hour',
    features: [
      'Disinfect against COVID-19 transmission',
      'Events & Parties',
      'Senior Living',
    ],
  },
  {
    title: 'premium',
    price: '$50/day',
    features: [
      'Home Maintenance & Cleaning',
      'In-Home Plant Care',
      'Feed & Walk Pets',
    ],
  },
];

const Services = () => {
  const Navigate = useNavigate()
  return (
    <div className="services-container">
      <h1>PRICING</h1>
      <h2>Affordable Pricing <br/>with our Finest Services</h2>
      

      <div className="services">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>
            <p>Starting from</p>
            <h3>{service.price}</h3>
            <ul>
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="get-quote-btn" onClick={()=>Navigate("/QuoteForm")}>GET QUOTE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;