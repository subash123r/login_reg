import React from 'react';
import './App.css'; // Import your CSS file
import AnttImage from './assets/Antt.png'
import { useNavigate } from 'react-router-dom';
const App = () => {
  const Navigate = useNavigate()
  return (
    <div className="containers">
      <div className="contentes">
        <h1>Cleaning and Organizing</h1>
        <h2>For You</h2>
        <p>
        You deserve to surround yourself with clarity and cleanliness. Where there is order, there is Tranquility.
        </p>
        <button className="quote-button"  onClick={()=>Navigate("/QuoteForm")}>Get Quote</button>
        <br />
        <button className="quote-button"  onClick={()=>Navigate("/homes")}>Cleaning Products</button>
      </div>
      <div className="image">
        <img src={AnttImage} />
      </div>
    </div>
  );
};

export default App;
