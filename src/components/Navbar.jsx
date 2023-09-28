import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav className="Navbar">
      <div className="container"></div>
      <ul>
        <Link to="/"> Home </Link>
        <Link to="/CountryDetails"> CountryDetails </Link>
      </ul>
    </nav>
  );
}
export default Navbar;
