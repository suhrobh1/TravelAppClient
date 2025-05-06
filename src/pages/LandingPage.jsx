import React from 'react';

const LandingPage = () => {
  const pageStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover', // Show full image
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
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

  const subtitleStyle = {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Welcome to TravelPlanner</h1>
      <p style={subtitleStyle}>
        Place where you can find places of interest, hotels, and more!
      </p>
    </div>
  );
};

export default LandingPage;
