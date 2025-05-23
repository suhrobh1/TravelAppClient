import React from 'react';
import { useNavigate } from 'react-router';


const LandingPage = () => {

  const navigate = useNavigate();

  const onClickHandler = (route) =>{
  if (route == "login"){
    console.log("in login route",route);
    navigate ("/login");
  }else{
    console.log("in else route");
    navigate("/home");
  }
  }
  
  const pageStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover', // Show full image
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '130vh',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
  };

    const buttonStyle = {
   margin: '30px 10px'
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    
  };
  const subtitleStyle1 = {
    marginTop:"100px",
    fontSize: '1.2rem',
    fontStyle: 'italic',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    color:"gold"
  };

  const banner ={
     background: 'rgba(0, 0, 0, 0.5)',
     width:"134vh"
  }

  return (
    <div style={pageStyle}>
      <div style={banner}>
      <h1 style={titleStyle}>Welcome to TravelPlanner</h1>
      <p style={subtitleStyle}>
        Get places of interest, hotels, forecast and more for your trips!
      </p>
      <div>
        <button onClick={() => onClickHandler("start")} style={buttonStyle}> Travel Planner </button>
        <button onClick={() => onClickHandler("login")} style={buttonStyle}>Create Account</button>
      
      </div>
      <p style={subtitleStyle1}>
        Creating an account allows you to save your trip information.
      </p>
      </div>
    </div>
  );
};

export default LandingPage;
