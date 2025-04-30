import React, { useState } from "react";

function Weather({ data }) {
  const { microserviceData, city } = data;
  const weatherForecastData = microserviceData.forecast;
  const [moreInfo, setMoreInfo] = useState(false);

  const skyStatus = (amount) => {
    if (amount > 70) {
      return "Sunshine";
    } else if (amount < 30) {
      return "Cloudy";
    } else {
      return "Fair";
    }
  };

  return (
    <div>
      <h3 style={{ fontFamily: 'Arial, sans-serif' }}>Weather Forecast for {city}</h3>
      <table style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
        <thead>
          <tr>
            {weatherForecastData.forecast.slice(0, 7).map((day, index) => (
              <th key={index} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>
                {day.time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {weatherForecastData.forecast.slice(0, 7).map((day, index) => (
              <td key={index} style={{ border: '1px solid #ddd', padding: '8px' }}>
                <div><strong>Temp:</strong> {day.minTemperature}°F - {day.maxTemperature}°F</div>
                {moreInfo && (
                  <div>
                    <div><strong>Precip:</strong> {day.precipitationProbability}{day.precipitationProbabilityUnit}</div>
                    <div><strong>Sky:</strong> {skyStatus(day.cloudCover)}</div>
                  </div>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      {/* Button below the table, aligned to the right */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
        <button 
          onClick={() => setMoreInfo(!moreInfo)} 
          style={{ 
            padding: '8px 16px', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          {moreInfo ? 'Hide More Info' : 'Show More Info'}
        </button>
      </div>
    </div>
  );
}

export default Weather;
