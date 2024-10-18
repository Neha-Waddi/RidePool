import React, { useState } from 'react';
import {  FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import './SearchVehicle.css';

const SearchVehicle = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    if (!fromLocation || !toLocation || !date) {
      alert('Please fill in all fields!');
      return;
    }

    // Replace this placeholder data with your actual search logic
    setSearchResults([
      { id: 1, vehicle: 'Car', time: '14:00', date: '2024-10-17' },
      { id: 2, vehicle: 'Bus', time: '15:00', date: '2024-10-17' },
    ]);
  };

  return (
    <div className="search-vehicle-container">
      <h1>BOOK YOUR RIDE</h1>
      <h3>COMFORT IN OUR HANDS</h3>
      <div className="tripdetails-bar">
        <div className="components">
          <FaMapMarkerAlt className="icon" />
          <p className="icon-name">FROM</p>
          <input
            type="text"
            placeholder="From Location"
            value={fromLocation}
            onChange={(e) => setFromLocation(e.target.value)}
          />
        </div>

        <div className="components">
          <FaMapMarkerAlt className="icon" />
          <p className="icon-name">TO</p>
          <input
            type="text"
            placeholder="To Location"
            value={toLocation}
            onChange={(e) => setToLocation(e.target.value)}
          />
        </div>

        <div className="components">
          <FaCalendarAlt className="icon" />
          <p className="icon-name">Departure Date</p>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <button  className="search-button" onClick={handleSearch}>
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchVehicle;