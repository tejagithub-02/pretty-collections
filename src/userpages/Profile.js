import React, { useState } from 'react';
import UserSidebar from './UserSidebar';
import './Profile.css';

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <div className="user-layout">
     <div className="desktop-sidebar">
        <UserSidebar />
      </div>

      <div className="profile-content">
        <h2 className="page-title">Account Profile</h2>
        <p className="page-description">Update your personal details here.</p>

        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9876543210"
              required
            />
          </div>

          <button type="submit" className="submit-btn">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
