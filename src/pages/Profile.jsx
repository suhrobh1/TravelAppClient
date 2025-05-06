import React, { useContext, useState } from 'react';
import { Link } from 'react-router'; // Replace with 'react-router-dom' if using in browser
import Context from '../context/Context';

const Profile = () => {
  const context = useContext(Context);
   const [showTooltip, setShowTooltip] = useState(false);
  const containerStyle = {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif'
  };

  const headingStyle = {
    marginBottom: '15px',
    color: '#333'
  };

  const sectionTitleStyle = {
    textAlign: 'center',
    marginBottom: '25px',
    color: '#222'
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block'
  };

  return (
    <div style={containerStyle}>
         <div
        style={{
          position: "absolute",
          top: "1px",
          right: "10px",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "#007BFF",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontStyle: "italic",
          fontWeight: "bold",
          cursor: "pointer",
          zIndex: 2,
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        i
      </div>
       {showTooltip && (
        <div
          style={{
            position: "absolute",
            bottom: "150px",
            right: "4px",
            backgroundColor: "green",
            color: "black",
            padding: "10px",
            borderRadius: "10px",
            maxWidth: "220px",
            fontSize: "13px",
            zIndex: 1,
            textAlign: "center",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
            whiteSpace: "normal",
          }}
        >
          Click "Edit" button in order to change your name, last name, or email.
          <div
            style={{
              content: '""',
              position: "absolute",
              top: "-10px",
              right: "10px",
              width: 0,
              height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderBottom: "10px solid green",
            }}
          />
        </div>
      )}
      <h2 style={sectionTitleStyle}>My Info</h2>

      <h3 style={headingStyle}>
        <span style={{ fontWeight: 'bold' }}>First Name:</span> {context.user.user.firstName}
      </h3>
      <h3 style={headingStyle}>
        <span style={{ fontWeight: 'bold' }}>Last Name:</span> {context.user.user.lastName}
      </h3>
      <h3 style={headingStyle}>
        <span style={{ fontWeight: 'bold' }}>Email:</span> {context.user.user.email}
      </h3>

      <Link to="/edit-profile" style={buttonStyle}>Edit</Link>
    </div>
  );
};

export default Profile;

