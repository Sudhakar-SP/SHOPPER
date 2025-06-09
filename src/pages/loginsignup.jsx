import React, { useState } from 'react';
import './CSS/loginsignup.css';
import { Link } from 'react-router-dom';

const Loginsignup = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleMode = () => {
    setIsLogin(prev => !prev);
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>

        <div className="loginsignup-fields">
          {!isLogin && <input type="text" placeholder='Your Name' />}
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>

        <button>{isLogin ? 'Login' : 'Continue'}</button>

        <p className='loginsignup-login'>
          {isLogin ? (
            <>
              Don't have an account? <span onClick={toggleMode}>Sign up here</span>
            </>
          ) : (
            <>
              Already have an account? <span onClick={toggleMode}>Login here</span>
            </>
          )}
        </p>

        {!isLogin && (
          <div className="loginsignup-agree">
            <input type="checkbox" />
            <p>By continuing, I agree to the terms of Use & Privacy Policy.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loginsignup;
