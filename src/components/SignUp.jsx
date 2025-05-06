import React, { useState } from 'react';
import axios from "axios";

const SignUp = () => {

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    
    try {
        await axios.post("https://travelappserver-production.up.railway.app/api/auth/signup", { form });
        alert("Signup successful! You can now log in.");

    } catch (err) {
        alert("Signup failed !");
        console.log("Error: ", err)
    }
    



    console.log("Signing up with email:", form.email);
  };

  const handleGoogleSignup = () => {
    console.log("Google sign-up clicked");
    // Add Google OAuth logic
  };

  const handleGithubSignup = () => {
    console.log("GitHub sign-up clicked");
    // Add GitHub OAuth logic
  };

  return (
    <div style={{backgroundColor: "",  maxWidth: '400px', margin: '0 auto', textAlign: 'center' , padding: "5px" }}>
      {/* <button
        onClick={handleGoogleSignup}
        style={{ width: '75%', padding: '10px', marginBottom: '10px', backgroundColor: '#DB4437', color: '#fff', border: 'none', borderRadius: '4px' }}
      >
        Sign up with Google
      </button>

      <button
        onClick={handleGithubSignup}
        style={{ width: '75%', padding: '10px', marginBottom: '20px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px' }}
      >
        Sign up with GitHub
      </button> */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          required
          style={{ width: '75%', padding: '8px', marginBottom: '10px', borderRadius: '4px' }}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          required
          style={{ width: '75%', padding: '8px', marginBottom: '10px', borderRadius: '4px' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ width: '75%', padding: '8px', marginBottom: '10px', borderRadius: '4px' }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={{ width: '75%', padding: '8px', marginBottom: '10px', borderRadius: '4px' }}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          style={{ width: '75%', padding: '8px', marginBottom: '20px', borderRadius: '4px' }}
        />

        <button
          type="submit"
          style={{ width: '75%', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px' }}
        >
          Sign Up with Email
        </button>
      </form>
    </div>
  );
};

export default SignUp;
