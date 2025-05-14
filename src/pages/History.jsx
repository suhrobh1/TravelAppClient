import React, { useEffect, useState } from 'react';

const History = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function fetchPlans() {
      try {
      
        const res = await fetch(`https://travelappserver-production.up.railway.app/api/travel-plans`);
       // const res = await fetch("http://localhost:3001/api/travel-plans");
        const data = await res.json();
        setPlans(data);
      } catch (err) {
        console.error("Failed to fetch plans:", err);
      }
    }

    fetchPlans();
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Travel Plan History</h2>
      {plans.length === 0 ? (
        <p>No travel plans found.</p>
      ) : (
        plans.map((plan, i) => (
          <div key={i} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
            <h3>Trip #{i + 1}</h3>

            <h4>Forecast:</h4>
            {plan.weatherForecast?.length > 0 ? (
              <ul>
                {plan.weatherForecast.map((entry, j) => (
                  <li key={j}>
                    <strong>{new Date(entry.time).toLocaleDateString()}</strong> - 
                    Max: {entry.maxTemperature}°C, 
                    Min: {entry.minTemperature}°C, 
                    Precip: {entry.precipitationProbability}%, 
                    Cloud: {entry.cloudCover}%
                  </li>
                ))}
              </ul>
            ) : (
              <p>No forecast data</p>
            )}

            <h4>Places of Interest:</h4>
            <ul>
              {plan.placesOfInterest?.map((place, j) => (
                <li key={j}>{place.name} - {place.address}</li>
              ))}
            </ul>

            <h4>Hotels:</h4>
            <ul>
              {plan.hotels?.map((hotel, j) => (
                <li key={j}>{hotel.name} - {hotel.address} ({hotel.distance} km)</li>
              ))}
            </ul>

            <h4>Summary:</h4>
            {plan.summary?.map((s, j) => (
              <p key={j}>{s.summary}</p>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default History;
