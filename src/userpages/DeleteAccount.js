import React from 'react';
import './SecurityPages.css';

const DeleteAccount = () => {
  return (
    <div className="security-page">
      <h2>Delete Account</h2>
      <p className="warning-text">
        Warning: Deleting your account is permanent and cannot be undone.
      </p>

      <form className="security-form">
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Enter your password to confirm" />
        </div>
        <button type="submit" className="btn-danger">Delete My Account</button>
      </form>
    </div>
  );
};

export default DeleteAccount;
