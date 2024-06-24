import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login(){

    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    const navigate =useNavigate()


    const handlesubmit =(e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/login',{ email, password, })
        .then(result =>{
            console.log(result)
            if(result.data === "success"){
                navigate('/home')
            }
       
        })
        .catch(err => console.log(err))
         }



return(
   
    <div className="d-flex justify-content-center align-items-center vh-100">
    <form onSubmit={handlesubmit} className="p-4 border rounded shadow-sm">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">
         
        </label>
      </div>
     <Link to='/Home' type="submit" className="btn btn-primary">
        LOGIN
      
      </Link>
    </form>
  </div>
       
 
)
}


export default Login