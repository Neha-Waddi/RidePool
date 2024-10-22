import React from 'react';
import './Navbar.css'; 
import car_logo from '../../assets/car_logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="car-logo">
        <img
          src={car_logo}
          alt="logo"
        />
      </div>
      <div className="textbox">
        <form action="#">
          <button type="button" title="Click to search destination">
            <i className="fa-solid fa-magnifying-glass" style={{color:'blue'}}></i>
          </button>
          <input type="text" placeholder="Search Destination" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="rideprofile">
        <ul>
          <li>
            <i className="fa-solid fa-circle-plus"></i>
            <b>Publish Ride</b>
          </li>
          <li>
            <i className="fa-solid fa-user"></i>
            <b>MY ACCOUNT</b>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;