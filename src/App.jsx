import React, { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [forecastData, setForecastData] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResponseMessage('');
    setForecastData('');
    setError('');

    try {
      const response = await fetch('http://localhost:3001/api/get-forecast', { // Use the server's URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorMessage}`);
      }

      const data = await response.json();
      setResponseMessage(data.message);
      setForecastData(data.forecast);
    } catch (err) {
      console.error('Error sending city to backend:', err);
      setError('Failed to send city to the server.');
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
            onChange={handleInputChange}
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