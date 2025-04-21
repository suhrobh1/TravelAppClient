import React, { useState } from "react";
import { Routes, Route } from "react-router";

function PointsInterest({ data }) {
  const { message, microserviceData, city } = data;

  const poiData = microserviceData.places;


  console.log("in PointsInterest: data", data);
  console.log("in PointsInterest: microserviceData", microserviceData);
  console.log("in PointsInterest: poiData", poiData);
  console.log("in PointsInterest: poiData.places", poiData.places);



  return (
    <div>
    <h3 style={{ fontFamily: 'Arial, sans-serif' }}>Points Interest near {city}</h3>
    <table style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'Arial, sans-serif' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Name</th>
          <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Catergory</th>
          <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Address</th>
        </tr>
      </thead>
      <tbody>
      {poiData.places.map((day, index) => (
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

export default PointsInterest;
