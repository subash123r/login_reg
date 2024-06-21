import React, { useState } from 'react';
import './QuoteForm.css';
import { useNavigate } from 'react-router-dom';


const QuoteForm = () => {
  const Navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    time: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission, e.g., send the data to an API
  };
 

  return (
  
    <div className="form-container">
      <form onSubmit={handleSubmit} className="quote-form">

        <h2>Please fill the form below for your free quote!

</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="service">Select Service</label>
          <select name="service" id="service" value={formData.service} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="cleaning">Cleaning</option>
            <option value="gardening">Gardening</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input type="time" name="time" id="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button"onClick={()=>Navigate("/home")} >Get Quote</button>
      </form>
    </div>
  );
};

export default QuoteForm;