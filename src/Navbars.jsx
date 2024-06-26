

import React, { useState } from "react";
import './Navbar.css';
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav >
    <Link to="/home" className="title">
    CelanEse

    </Link>
    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/QuoteForm">Get Quote</NavLink>
      </li>
      <li>
        <NavLink to="/Homes">Cleaning Product </NavLink>
      </li>
      <li>
        <NavLink to="/login">Log Out</NavLink>
      </li>
    </ul>
  </nav>
  );
}

export default Navbar;


 