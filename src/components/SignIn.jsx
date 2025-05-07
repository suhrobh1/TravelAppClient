import React, { useContext, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router';
// import Context from '../context/Context';
import { UserContext } from '../utils/context';

const SignIn = () => {
  // const context = useContext(Context);
  const context = useContext(UserContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://travelappserver-production.up.railway.app/api/auth/login", { form });

      // Save token and user to localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data)); // persist user info

      context.setUser(res.data);
      context.setLoggedIn(true);

      alert("Login successful");
      console.log("res from login: ", res);
      navigate("/profile");
    } catch (err) {
      alert("Signin failed!");
      console.log("Error: ", err);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center', padding: "5px" }}>
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
