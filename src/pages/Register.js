// Register.jsx
import React from 'react';
import './Auth.css';
import { FiUserPlus } from 'react-icons/fi';

const Register = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-header">
          <FiUserPlus className="auth-icon" />
          <h2>Create Account</h2>
          <p>Join us and get started</p>
        </div>
        <form className="auth-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
          </div>
          <button type="submit" className="auth-btn">Register</button>
          <p className="auth-footer">
            Already have an account? <a href="/signin">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
