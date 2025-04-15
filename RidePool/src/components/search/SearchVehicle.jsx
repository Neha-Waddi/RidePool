import React, { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import "./SearchVehicle.css";

const SearchVehicle = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [dateOption, setDateOption] = useState("All");
  const [customDate, setCustomDate] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const selectedDate =
      dateOption === "Today"
        ? getTodayDate()
        : dateOption === "Tomorrow"
        ? getTomorrowDate()
        : dateOption === "Custom"
        ? customDate
        : "All";

    if (!fromLocation || !toLocation || (dateOption === "Custom" && !customDate)) {
      alert("Please fill in all fields!");
      return;
    }

  };

  const getTodayDate = () => new Date().toISOString().split("T")[0];

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
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
          <select
            value={dateOption}
            onChange={(e) => setDateOption(e.target.value)}
            className="date-selector "
          >
            <option value="All">All</option>
            <option value="Today">Today</option>
            <option value="Tomorrow">Tomorrow</option>
            <option value="Custom">Custom</option>
          </select>

          {dateOption === "Custom" && (
            <input
              type="date"
              value={customDate}
              onChange={(e) => setCustomDate(e.target.value)}
            />
          )}
        </div>

        <button className="search-button" onClick={handleSearch}>
          SEARCH
        </button>
      </div>

    </div>
  );
};

export default SearchVehicle;
