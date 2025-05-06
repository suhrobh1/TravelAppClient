import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router'
import Context from '../context/Context';

function Navbar() {

  console.log("token", localStorage.getItem("token");


  

  const context = useContext(Context);
  let firstName = "";
  console.log("In Navbar", context)
  // console.log("In Navbar, firstName ", context.user.user.firstName)
  
  if (context.user.user){
   firstName =  context.user.user.firstName;
  }


  const Logout = () =>{
    context.setUser();
    context.setLoggedIn(false);
    localStorage.removeItem("token"); // Remove the token
    window.location.href = "/login";  // Redirect to login page
  }

    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "60px",
          backgroundColor: "#ffffff",
          zIndex: 1000,
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <h2 style={{ margin: 0 }}>Travel Planner</h2>
        <nav>
          <Link to={"/"} style={{ margin: "0 10px", padding:"5px 5px 5px 5px" }}>Home</Link>
          {firstName ? <Link to={"/profile"} style={{ margin: "0 10px", padding:"5px 5px 5px 5px" }}>Profile</Link> : <span></span>}
          <Link to={"/home"} style={{ margin: "0 10px", padding:"5px 5px 5px 5px" }}>Travel Planner</Link>
          {firstName ? <Link onClick={Logout} style={{ margin: "0 10px", padding:"5px 5px 5px 5px", color: "red", fontWeight:"bold" }} > Logout</Link> : <Link to={"/login"} style={{ margin: "0 10px", padding:"5px 30px 5px 5px" }}> Login</Link>  }
          {firstName ? <span style={{ margin: "0 10px", padding:"5px 30px 5px 5px" }}>Hello {firstName}</span> : <span></span>}
        </nav>
      </div>
    );
  }
  

export default Navbar
