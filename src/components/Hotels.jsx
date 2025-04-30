import React, { useState } from "react";

function Hotels({ data }) {
  const { message, microserviceData, city } = data;
  const hotelData = microserviceData.hotels;
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <div>
      <h3 style={{ fontFamily: 'Arial, sans-serif' }}>Hotels near {city}</h3>
      
      <table style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'Arial, sans-serif' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Name</th>
            {moreInfo && (
              <>
                <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Distance (ft.)</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Address</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {hotelData.places.slice(0, 7).map((hotel, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{hotel.name}</td>
              {moreInfo && (
                <>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {hotel.distance}
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {hotel.address}
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
        <button
          onClick={() => setMoreInfo(!moreInfo)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          {moreInfo ? 'Hide More Info' : 'Show More Info'}
        </button>
      </div>
    </div>
  );
}

export default Hotels;
