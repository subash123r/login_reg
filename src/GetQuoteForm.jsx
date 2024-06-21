// src/GetQuoteForm.js
import React, { Fragment, useState } from 'react';
import './GetQuoteForm.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";


const handlesubmit =(e) =>{
    e.preventDefault()
    axios.post('http://localhost:8000/form',{Name, Email,  })
    .then(result =>{console.log(result)
    
    })
    
    .catch(err => console.log(err))
     

    return (
        <form onSubmit={handlesubmit}>
            <Fragment>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="service">Select Service</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="cleaning">Cleaning</option>
                    <option value="gardening">Gardening</option>
                    {/* Add more options as needed */}
                </select>
            </div>
            <div>
                <label htmlFor="time">Time</label>
                <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
            </div>
            <button type="submit">Get Quote</button>
            </Fragment>: 
        </form>
      
    );
};

export default GetQuoteForm;
