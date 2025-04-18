import React, { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";

function Weather({ data }) {
  // const { temperature, description, icon } = data;
  const { forecastData } = data;
  console.log("in Weather: data", data);
  console.log("in Weather: forecastData", forecastData);
  // const [responseMessage, setResponseMessage] = useState("");

  return (
    <div>
      <h1>Weather Forecast</h1>
      {forecastData && <p>Forecast: {forecastData}</p>}
    </div>
  );
}

export default Weather;
