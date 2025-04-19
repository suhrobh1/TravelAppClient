import React, { useState } from "react";
import { Routes, Route } from "react-router";

function Weather({ data }) {
  const { message, microserviceData, city } = data;

  console.log("in Weather: data", data);
  // console.log("in Weather: forecastData", forecastData);
  // const [responseMessage, setResponseMessage] = useState("");

  return (
    <div>
      <h3>Weather Forecast for {city}</h3>
      {microserviceData.forecast && <p>Forecast: {microserviceData.forecast}</p>}
    </div>
  );
}

export default Weather;
