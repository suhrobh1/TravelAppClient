import React, { useContext, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router';
import Context from '../context/Context';




const SignIn = () => {

  const context = useContext(Context);
  const navigate = useNavigate();

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

    
    try {
      const res = await axios.post("https://travelappserver-production.up.railway.app/api/auth/login", { form });
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      context.setUser(res.data);
      context.setLoggedIn(true);

      console.log("res from login: ", res);
      navigate("/profile")

    } catch (err) {
        alert("Signin failed !");
        console.log("Error: ", err)
    }
    



  };

  const handleGoogleSignin = () => {
    console.log("Google sign-in clicked");
    // Add Google OAuth logic
  };

  const handleGithubSignin = () => {
    console.log("GitHub sign-in clicked");
    // Add GitHub OAuth logic
  };

  return (
    <div style={{backgroundColor: "",  maxWidth: '400px', margin: '0 auto', textAlign: 'center' , padding: "5px" }}>
      {/* <button
        onClick={handleGoogleSignin}
        style={{ width: '75%', padding: '10px', marginBottom: '10px', backgroundColor: '#DB4437', color: '#fff', border: 'none', borderRadius: '4px' }}
      >
        Sign in with Google
      </button>

      <button
        onClick={handleGithubSignin}
        style={{ width: '75%', padding: '10px', marginBottom: '20px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px' }}
      >
        Sign in with GitHub
      </button> */}

      <form onSubmit={handleSubmit}>
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

        <button
          type="submit"
          style={{ width: '75%', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px' }}
        >
          Sign in with Email
        </button>
      </form>
    </div>
  );
};

export default SignIn;
