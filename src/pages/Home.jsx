import React, { useContext, useState } from "react";
import TravelForm from "../components/TravelForm";
import Weather from "../components/Weather";
import PointsInterest from "../components/PointsInterest";
import Summary from "../components/Summary";
import Hotels from "../components/Hotels";
import Context from "../context/Context";

function Home() {
  const [combinedData, setCombinedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const context = useContext(Context);

  console.log("Context data: ", context)

  const handleDataFetch = (data) => {
    setCombinedData(data);
    console.log("in Home: data", data);
    setSubmitted(false);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', minHeight: '50vh', padding: '30px', width: "1000px"}}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Trip Planner</h1>

      <div style={{ maxWidth: '1200px', margin: '0 auto', width:'1000px' }}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <TravelForm onDataFetch={handleDataFetch} submitted={submitted} setSubmitted={setSubmitted} />
        </div>

        {submitted && !combinedData ? (
          <h2 style={{ textAlign: 'center', color: '#666' }}>Loading...</h2>
        ) : combinedData && (
          <div>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <Weather data={combinedData} />
            </div>

            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <PointsInterest data={combinedData} />
            </div>

            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <Summary data={combinedData} />
            </div>

            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <Hotels data={combinedData} />
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
