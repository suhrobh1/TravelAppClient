import React, { useState } from "react";

function PointsInterest({ data }) {
  const { message, microserviceData, city } = data;
  const poiData = microserviceData.places;
  const [moreInfo, setMoreInfo] = useState(true);

  return (
    <div>
      <h3 style={{ fontFamily: 'Arial, sans-serif' }}>Points of Interest near {city}</h3>
      
      <table style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'Arial, sans-serif' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Name</th>
            {moreInfo && (
              <>
                <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Category</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Address</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {poiData.places.slice(0, 7).map((place, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{place.name}</td>
              {moreInfo && (
                <>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {place.categories[0]}
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {place.address}
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button below the table, aligned to the right */}
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

export default PointsInterest;
