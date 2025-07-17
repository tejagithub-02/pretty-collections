// SignIn.jsx
import React from 'react';
import './SignIn.css';
import { FiUser } from 'react-icons/fi';

const SignIn = () => {
  return (
    <div className="signin-wrapper">
      <div className="signin-card">
        <div className="signin-header">
          <FiUser className="signin-icon" />
          <h2>Welcome Back</h2>
          <p>Sign in to continue to your account</p>
        </div>
        <form className="signin-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="signin-btn">Sign In</button>
          <p className="signin-footer">
            Don't have an account? <a href="register">Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
