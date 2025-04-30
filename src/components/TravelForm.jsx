import React, { useState } from "react";

function TravelForm({ onDataFetch, submitted, setSubmitted }) {
  const [city, setCity] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [forecastData, setForecastData] = useState("");
  const [error, setError] = useState("");
  const [durationError, setDurationError] = useState(false);    
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);



  const handleLatitudeChange = (event) => {
    setCity("")
    setLatitude(event.target.value);
  };

  const handleLongitudeChange = (event) => {
    setCity("")
    setLongitude(event.target.value);
  };

  const handleCityChange = (event) => {
    setLatitude("")
    setLongitude("")
    setCity(event.target.value);
  };

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    console.log ("in TravelForm, from date", fromDate);
    console.log("in TraveForm, to date", event.target.value);

    // Create Date objects from the date strings
    const date2 = new Date(fromDate);
    const date1 = new Date(event.target.value);

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = date1.getTime() - date2.getTime();

    // Convert milliseconds to days
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const differenceInDays = differenceInMilliseconds / millisecondsInDay;
    console.log("in TraveForm, to date difference", differenceInDays);

    if (differenceInDays > 7) {
      setDurationError(true);
      console.log("Error in toDate")
    }else{
      setToDate(event.target.value);
      setDurationError(false);
      
    }
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    onDataFetch("")
    setSubmitted(true);
    setError("");

    // if (!city ) {
    //   setError("Please enter a city name.");
    //   return;
    // }

    if (!fromDate) {
      setError('Please select a "from" date.');
      return;
    }

    if (!toDate) {
      setError('Please select a "to" date.');
      return;
    }



    try {
      const response = await fetch(

        // `http://localhost:3001/api/get-trip`,
        `https://travelappserver-production.up.railway.app/api/get-trip`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ latitude, longitude, fromDate, toDate, city }),
        },
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorMessage}`,
        );
      }

      const data = await response.json();
      console.log("in TravelForm: data", data);
      onDataFetch(data);
      // setResponseMessage(data.message);
    } catch (err) {
      console.error("Error sending data to backend:", err);
      setError("Failed to send data to the server.");
    }
  };

  return (
    <div style={{ 
      maxWidth: '700px', 
      margin: '0 auto', 
      fontFamily: 'Arial, sans-serif', 
      position: 'relative' 
    }}>
    
      <div 
        style={{ 
          position: 'absolute',
          top: '10px',
          right: '10px',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          backgroundColor: '#007BFF',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontStyle: 'italic',
          fontWeight: 'bold',
          cursor: 'pointer',
          zIndex: 2
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        i
      </div>
  
      {showTooltip && (
        <div style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          backgroundColor: '#333',
          color: '#fff',
          padding: '10px',
          borderRadius: '10px',
          maxWidth: '220px',
          fontSize: '13px',
          zIndex: 1,
          textAlign: 'center',
          boxShadow: '0px 2px 6px rgba(0,0,0,0.2)',
          whiteSpace: 'normal',
        }}>
          Please enter city or latitude/longitude for the area. Enter the trip dates. Trip date must be for maximum of 7 days.
         
          <div style={{
            content: '""',
            position: 'absolute',
            top: '-10px',
            right: '10px',
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderBottom: '10px solid #333',
          }} />
        </div>
      )}
  
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Get plans for the trip. </h2>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '15px',
            justifyContent: 'space-between',
            marginBottom: '20px'
          }}
        >
          <div style={{ flex: '1' }}>
            <label htmlFor="city" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              City Name:
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={handleCityChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          <div style={{ flex: '1' }}>
           OR
          </div>


          <div style={{ flex: '1' }}>
            <label htmlFor="latitude" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Latitude:
            </label>
            <input
              type="text"
              id="latitude"
              value={latitude}
              onChange={handleLatitudeChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div style={{ flex: '1' }}>
            <label htmlFor="longitude" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Longitude:
            </label>
            <input
              type="text"
              id="longitude"
              value={longitude}
              onChange={handleLongitudeChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>






          <div style={{ flex: '1' }}>
            <label htmlFor="fromDate" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              From Date:
            </label>
            <input
              type="date"
              id="fromDate"
              value={fromDate}
              onChange={handleFromDateChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div style={{ flex: '1' }}>
            <label htmlFor="toDate" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              To Date:
            </label>
            <input
              type="date"
              id="toDate"
              value={toDate}
              onChange={handleToDateChange}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            {durationError ? <span> "Please select only 7 days" </span> : <span> </span>}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Get Trip Info
          </button>
        </div>
      </form>
    </div>


  );
}

export default TravelForm;
