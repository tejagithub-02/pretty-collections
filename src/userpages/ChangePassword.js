import React from 'react';
import './SecurityPages.css';

const ChangePassword = () => {
  return (
    <div className="security-page">
      <h2>Change Password</h2>
      <form className="security-form">
        <div className="form-group">
          <label>Current Password</label>
          <input type="password" placeholder="Enter current password" />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input type="password" placeholder="Enter new password" />
        </div>
        <div className="form-group">
          <label>Confirm New Password</label>
          <input type="password" placeholder="Confirm new password" />
        </div>
        <button type="submit" className="btn-primary">Update Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
