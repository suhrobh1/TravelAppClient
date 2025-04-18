import React, { useState } from "react";
import { Routes, Route } from "react-router";

function Weather({ data }) {
  const { message, forecast, city } = data;

  console.log("in Weather: data", data);
  // console.log("in Weather: forecastData", forecastData);
  // const [responseMessage, setResponseMessage] = useState("");

  return (
    <div>
      <h1>Weather Forecast for {city}</h1>
      {forecastData && <p>Forecast: {forecastData}</p>}
    </div>
  );
}

export default Weather;
