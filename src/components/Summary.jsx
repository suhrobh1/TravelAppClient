import React, { useState } from "react";
import { Routes, Route } from "react-router";

function Summary({ data }) {
  const { message, microserviceData  } = data;

  console.log("In Summary, ln 7", data);

  const summaryData = microserviceData.summary;




  return (
    <div>
       <h3>Few words about {data.city ? <>{data.city}</> : <span>Location</span>}</h3> 
        
       <div>
        <ul style={{ listStylePosition: 'inside', paddingLeft: 0 }}>
          {summaryData?.summary
            ?.split(/(?=[A-Z][a-z\s/]+: )/)
            .filter(item => item.trim() !== '')
            .map((item, index) => {
              const [title, ...rest] = item.split(': ');
              return (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  <div>
                    <p>{title}:</p> <span style={{ marginLeft: '0.5rem' }}>{rest.join(': ')}</span>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
  </div>
  );
}

export default Summary;
