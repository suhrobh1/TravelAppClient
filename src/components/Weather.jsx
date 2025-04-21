import React, { useState } from "react";
import { Routes, Route } from "react-router";

function Weather({ data }) {
  const { message, microserviceData, city } = data;

  console.log("in Weather, ln 7: data", data);
  console.log("in Weather, ln 8: microserviceData", microserviceData);
  // const [responseMessage, setResponseMessage] = useState("");

  const skyStatus = (amount) =>{
    if (amount > 70){
      return "Sunshine";
    }else if(amount < 30){
      return "Cloudy"
    }else {
      return "Fair"
    }
  }


  return (
    <div>
    <h3 style={{ fontFamily: 'Arial, sans-serif' }}>Weather Forecast for {city}</h3>
    <table style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'Arial, sans-serif' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Date</th>
          <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Temperature (Min - Max)</th>
          <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Precipitation %</th>
          <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Cloud Cover</th>
        </tr>
      </thead>
      <tbody>
        {microserviceData.forecast.map((day, index) => (
          <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{day.time}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              {day.minTemperature}°F - {day.maxTemperature}°F
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              {day.precipitationProbability}{day.precipitationProbabilityUnit}
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              {skyStatus(day.cloudCover)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default Weather;
