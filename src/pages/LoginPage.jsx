import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import { Link } from 'react-router'; 
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const LoginPage = () => {
  const context = useContext(Context);
  const [activeTab, setActiveTab] = useState('signIn'); // 'signIn' or 'signUp'


  // useEffect(() => {
  //   context.setUser(userData);
  //   context.setLoggedIn(true);
  // }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <div  style={{  display: "flex" }}>
        <div
          onClick={() => setActiveTab('signIn')}
          style={{
            padding: '10px 0px 10px 0px',
            backgroundColor: activeTab === 'signIn' ? '#007BFF' : '#ccc',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            width: '50%'
          }}
        >
          Sign In
        </div>
        <div
          onClick={() => setActiveTab('signUp')}
          style={{
            padding: '10px 0px 10px 0px',
            backgroundColor: activeTab === 'signUp' ? '#007BFF' : '#ccc',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            width: '50%'
          }}
        >
          Sign Up
        </div>
      </div>

      {activeTab === 'signIn' ? <SignIn /> : <SignUp />}
    </div>
  );
};

export default LoginPage;
