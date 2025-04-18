import React, { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";

function Weather(}{data}) {

  // const { temperature, description, icon } = data;
  const { responseMessage, forecastData, } = data;

  // const [responseMessage, setResponseMessage] = useState("");

  return (
    <div>
      <h1>Weather Forecast</h1>
      {responseMessage && <p>Server Response: {responseMessage}</p>}
      {forecastData && <p>Forecast: {forecastData}</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}

export default Weather;
