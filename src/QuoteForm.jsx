import React, { useState } from 'react';
import './QuoteForm.css';
import { useNavigate } from 'react-router-dom';
import  { Fragment,  } from 'react';
import './GetQuoteForm.css'

import { Link } from "react-router-dom";
import axios, { Axios } from "axios";



const QuoteForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [select, setSelect] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();



  const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !email || !phone) {
        setError("All fields are required");
        return;
      }
      axios
        .post("http://localhost:8000/form", { name, email, phone})
        .then((result) => {
          console.log(result);
          navigate("/home");
        })
        .catch((err) => {
          console.error(err);
          setError("Failed to register. Please try again.");
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Fragment>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name"onChange={(e) => setName(e.target.value)}
                 value={name} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}
                 value={email}  />
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" onChange={(e) => setPhone(e.target.value)}
                 value={phone} />
            </div>
            <div>
                  <label htmlFor="service">Select Service</label>
                  <select id="service" name="service"onChange={(e) => setSelect(e.target.value)}
                   value={select}>
                      <option value="">Select</option>
                      <option value="cleaning">Cleaning</option>
                      <option value="gardening">Gardening</option>
                      {/* Add more options as needed */}
                  </select>
              </div>
              <div>
                  <label htmlFor="time">Time</label>
                  <input type="time" id="time" name="time"onChange={(e) => setTime(e.target.value)}
                   value={time} />
              </div>
              <div>
                  <label htmlFor="date">Date</label>
                  <input type="date" id="date" name="date"onChange={(e) => setDime(e.target.value)}
                   value={time} />
              </div>
            <button type="submit">Get Quote</button>
            <Link to="/home" className='links'>Back To Home </Link>
            </Fragment>: 
        </form>
      
    );
}


export default QuoteForm;