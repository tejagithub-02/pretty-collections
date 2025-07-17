// ForgotPassword.jsx
import React from 'react';
import './Auth.css';
import { FiLock } from 'react-icons/fi';

const ForgotPassword = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-header">
          <FiLock className="auth-icon" />
          <h2>Forgot Password</h2>
          <p>Enter your email to reset your password</p>
        </div>
        <form className="auth-form">
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <button type="submit" className="auth-btn">Send Reset Link</button>
          <p className="auth-footer">
            Remember your password? <a href="/signin">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
