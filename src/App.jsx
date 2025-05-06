import React, { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import SignUpPage from "./pages/LoginPage";
import Context from "./context/Context";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";


function App() {

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    avatarURL:"",
  });
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <>
    <Context.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element ={<LandingPage />} />
        <Route path ="/profile" element ={<Profile/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/edit-profile" element={<EditProfile/>}/>
        
      </Routes>
    </Context.Provider> 
    </>
  );
}

export default App;
