import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router'; // Replace with 'react-router-dom' if using in browser
// import Context from '../context/Context';
import { UserContext } from '../utils/context';

const Profile = () => {
  //const context = useContext(Context);
  const context = useContext(UserContext);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false); // New state

 

  useEffect(() => {
      console.log("Bam")
      const token = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");
  
      if (token && storedUser) {
        try {
          const userData = JSON.parse(storedUser);
          context.setUser(userData);   
          console.log("context", context)
          context.setLoggedIn(true);
          console.log("User loaded from localStorage:", userData);
        } catch (err) {
          console.error("Failed to parse user from localStorage:", err);
        }
      }
    }, []);


    let firstName = "";
    let lastName = "";
    let email = "";
    console.log("in Profile", context)
    // console.log("In Navbar, firstName ", context.user.user.firstName)
    
    if (context.user.user){
      console.log("context in if stem",context)
     firstName =  context.user.user.firstName;
     lastName =  context.user.user.lastName;
     email =  context.user.user.email;

     console.log("first name in if statement", firstName) 
  
    }


  const containerStyle = {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
  };

  const headingStyle = {
    marginBottom: '15px',
    color: '#333',
  };

  const sectionTitleStyle = {
    textAlign: 'center',
    marginBottom: '25px',
    color: '#222',
  };

  const buttonStyle = {
    marginTop: '20px',
    marginRight: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545', // red
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '300px',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
  };

  return (
    <div style={containerStyle}>
      <h2 style={sectionTitleStyle}>My Info</h2>

      <h3 style={headingStyle}>
        <span style={{ fontWeight: 'bold' }}>First Name:</span> {firstName}
      </h3>
      <h3 style={headingStyle}>
        <span style={{ fontWeight: 'bold' }}>Last Name:</span> {lastName}
      </h3>
      <h3 style={headingStyle}>
        <span style={{ fontWeight: 'bold' }}>Email:</span> {email}
      </h3>

      <div
        style={{
          position: 'absolute',
          top: '1px',
          right: '10px',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: '#007BFF',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontStyle: 'italic',
          fontWeight: 'bold',
          cursor: 'pointer',
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
            position: 'absolute',
            bottom: '150px',
            right: '4px',
            backgroundColor: 'green',
            color: 'black',
            padding: '10px',
            borderRadius: '10px',
            maxWidth: '220px',
            fontSize: '13px',
            zIndex: 1,
            textAlign: 'center',
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
            whiteSpace: 'normal',
          }}
        >
          Click "Edit" button in order to change your name, last name, or email.
          <div
            style={{
              content: '""',
              position: 'absolute',
              top: '-10px',
              right: '10px',
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderBottom: '10px solid green',
            }}
          />
        </div>
      )}

      <div>
        <Link to="/edit-profile" style={buttonStyle}>
          Edit
        </Link>
        <button style={deleteButtonStyle} onClick={() => setShowDeleteConfirm(true)}>
          Delete
        </button>
      </div>

      {showDeleteConfirm && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h3 style={{ marginBottom: '20px' }}>Are you sure you want to delete your account?</h3>
            <button
              style={{
                ...buttonStyle,
                marginRight: '10px',
                backgroundColor: '#28a745', // green
              }}
              onClick={() => {
                // Do nothing (as requested)
              }}
            >
              Yes
            </button>
            <button
              style={{
                ...buttonStyle,
                backgroundColor: '#6c757d', // gray
              }}
              onClick={() => setShowDeleteConfirm(false)}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
