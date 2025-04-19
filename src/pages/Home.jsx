
import React, { useState } from "react";
import TravelForm from "../components/TravelForm";
import Weather from "../components/Weather";
import PointsInterest from "../components/PointsInterest";

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
            <PointsInterest data = {combinedData}/>
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
