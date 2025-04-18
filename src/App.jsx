import React, { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [datesInput, setDatesInput] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [forecastData, setForecastData] = useState('');
  const [error, setError] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleDatesChange = (event) => {
    setDatesInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResponseMessage('');
    setForecastData('');
    setError('');

    // Split the dates input by commas or newlines to create an array
    const datesArray = datesInput
      .split(/[\n,]+/)
      .map((date) => date.trim())
      .filter((date) => date !== ''); // Remove empty strings

    if (!city) {
      setError('Please enter a city name.');
      return;
    }

    if (!datesArray.length) {
      setError('Please enter at least one date.');
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/get-forecast`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city, dates: datesArray }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorMessage}`);
      }

      const data = await response.json();
      setResponseMessage(data.message);
      setForecastData(data.forecast);
    } catch (err) {
      console.error('Error sending data to backend:', err);
      setError('Failed to send data to the server.');
    }
  };

  return (
    <div>
      <h1>Get Forecast</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city">City Name:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleCityChange}
          />
        </div>
        <div>
          <label htmlFor="dates">Dates (comma-separated or one per line):</label>
          <textarea
            id="dates"
            value={datesInput}
            onChange={handleDatesChange}
            rows="3" // Adjust as needed
          />
        </div>
        <button type="submit">Get Forecast</button>
      </form>

      {responseMessage && <p>Server Response: {responseMessage}</p>}
      {forecastData && <p>Forecast: {forecastData}</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
}

export default App;