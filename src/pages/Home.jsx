// import React, { useState } from 'react';

// function Home() {
//   const [city, setCity] = useState('');
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [responseMessage, setResponseMessage] = useState('');
//   const [forecastData, setForecastData] = useState('');
//   const [error, setError] = useState('');

//   const handleCityChange = (event) => {
//     setCity(event.target.value);
//   };

//   const handleFromDateChange = (event) => {
//     setFromDate(event.target.value);
//   };

//   const handleToDateChange = (event) => {
//     setToDate(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setResponseMessage('');
//     setForecastData('');
//     setError('');

//     if (!city) {
//       setError('Please enter a city name.');
//       return;
//     }

//     if (!fromDate) {
//       setError('Please select a "from" date.');
//       return;
//     }

//     if (!toDate) {
//       setError('Please select a "to" date.');
//       return;
//     }

//     try {
//       const response = await fetch(`https://travelappserver-production.up.railway.app/api/get-forecast`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ city, fromDate, toDate }),
//       });

//       if (!response.ok) {
//         const errorMessage = await response.text();
//         throw new Error(`HTTP error! status: ${response.status}, message: ${errorMessage}`);
//       }

//       const data = await response.json();
//       setResponseMessage(data.message);
//       setForecastData(data.forecast);
//     } catch (err) {
//       console.error('Error sending data to backend:', err);
//       setError('Failed to send data to the server.');
//     }
//   };

//   return (
//     <div>
//       <h1>Get Forecast</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="city">City Name:</label>
//           <input
//             type="text"
//             id="city"
//             value={city}
//             onChange={handleCityChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="fromDate">From Date:</label>
//           <input
//             type="date"
//             id="fromDate"
//             value={fromDate}
//             onChange={handleFromDateChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="toDate">To Date:</label>
//           <input
//             type="date"
//             id="toDate"
//             value={toDate}
//             onChange={handleToDateChange}
//           />
//         </div>
//         <button type="submit">Get Forecast</button>
//       </form>

//       {responseMessage && <p>Server Response: {responseMessage}</p>}
//       {forecastData && <p>Forecast: {forecastData}</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
//     </div>
//   );
// }

// export default Home;

import React, { useState } from "react";
import TravelForm from "../components/TravelForm";
import Weather from "../components/Weather";

function Home() {
  const [combinedData, setCombinedData] = useState(null);

  const handleDataFetch = (data) => {
    setCombinedData(data);
    console.log("in Home: data", data);
  };

  return (
    <div>
      <h1>Trip Planner</h1>
      <div>
        <TravelForm onDataFetch={handleDataFetch} />
        {combinedData && (
          <div>
            <Weather data={combinedData} />
            {/* <Currency data={combinedData.currency} />
          <Hotels data={combinedData.hotels} />
          <Places data={combinedData.places} /> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
