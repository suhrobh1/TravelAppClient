import React, { useState } from "react";

function TravelForm({ onDataFetch }) {
  const [city, setCity] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [forecastData, setForecastData] = useState("");
  const [error, setError] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    if (!fromDate) {
      setError('Please select a "from" date.');
      return;
    }

    if (!toDate) {
      setError('Please select a "to" date.');
      return;
    }

    try {
      const response = await fetch(
        `https://travelappserver-production.up.railway.app/api/get-trip`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ city, fromDate, toDate }),
        },
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorMessage}`,
        );
      }

      const data = await response.json();
      console.log("in TravelForm: data", data);
      onDataFetch(data);
      // setResponseMessage(data.message);
    } catch (err) {
      console.error("Error sending data to backend:", err);
      setError("Failed to send data to the server.");
    }
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Get plans for the trip. </h2>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '15px',
            justifyContent: 'space-between',
            marginBottom: '20px'
          }}
        >
          <div style={{ flex: '1' }}>
            <label htmlFor="city" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              City Name:
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={handleCityChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div style={{ flex: '1' }}>
            <label htmlFor="fromDate" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              From Date:
            </label>
            <input
              type="date"
              id="fromDate"
              value={fromDate}
              onChange={handleFromDateChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div style={{ flex: '1' }}>
            <label htmlFor="toDate" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              To Date:
            </label>
            <input
              type="date"
              id="toDate"
              value={toDate}
              onChange={handleToDateChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Get Trip Info
          </button>
        </div>
      </form>
    </div>


  );
}

export default TravelForm;
