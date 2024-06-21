import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling
import auntyImage from './assets/aunty.png'
import { useNavigate } from 'react-router-dom';
function Services() {
  const Navigate = useNavigate()
  return (
    <div className="services-section">
      <div className="header">
        <h3>SERVICES</h3>
        <h1>What we do for you?</h1>
        <p>Improving your quality of life!</p>
      </div>
      <div className="tabs">
        
        <button className="tab">Cleaning</button>
        
      </div>
      <div className="content">
        <div className="image">
          <img src={auntyImage}/>
        </div>
        <div className="text">
          <h2>Prime Organizing Services:</h2>
          <ul>
            <li>School & Learning Spaces</li>
            <li>Basement & Garages</li>
            <li>Moving & Relocation</li>
            <li>Party Preparation</li>
            <li>Residential Homes</li>
            <li>Corporate Offices</li>
            <li>Home Office</li>
          </ul>
          <button className="quote-button" onClick={()=>Navigate("/QuoteForm")}>GET QUOTE</button>
        </div>
      </div>
    </div>
  );
}

export default Services;