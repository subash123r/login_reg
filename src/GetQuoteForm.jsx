// src/GetQuoteForm.js
import React, { Fragment, useState } from 'react';
import './GetQuoteForm.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";


function  GetQuoteForm(){


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone) {
          setError("All fields are required");
          return;
        }
        axios
          .post("mongodb+srv://log_reg:<password>@cluster0.rgdn8rh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { name, email, phone})
          .then((result) => {
            console.log(result);
            navigate("/");
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
              
              <button type="submit">Get Quote</button>
              </Fragment>: 
          </form>
        
      );
}
 
  



export default GetQuoteForm;
