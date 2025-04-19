import React, { useState } from "react";
import { Routes, Route } from "react-router";

function PointsInterest({ data }) {
  const { message, microserviceData, city } = data;

  console.log("in PointsInterest: data", data);
  // console.log("in PointsInterest: forecastData", forecastData);
  // const [responseMessage, setResponseMessage] = useState("");



  return (
    <div>
    <h3 style={{ fontFamily: 'Arial, sans-serif' }}>PointsInterest near {city}</h3>
    <table style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'Arial, sans-serif' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Place</th>
          <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Type</th>
          <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Rate</th>
        </tr>
      </thead>
      <tbody>
       
      </tbody>
    </table>
  </div>
  );
}

export default PointsInterest;
