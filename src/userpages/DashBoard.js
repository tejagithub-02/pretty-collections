import React from 'react';
import UserSidebar from './UserSidebar';
import './Dashboard.css';

const DashBoard = () => {
  return (
    <div className="user-layout">
     <div className="desktop-sidebar">
        <UserSidebar />
      </div>

      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1 className="page-title">Welcome to Your Account <span className="welcome-emoji">👋</span></h1>
          <p className="page-description">Here's a quick overview of your activity and settings.</p>
        </header>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-icon">🛒</div>
            <h3>My Orders</h3>
            <p>Check your recent and past orders.</p>
            <button className="card-action">View Orders</button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📁</div>
            <h3>My Projects</h3>
            <p>View and manage saved projects.</p>
            <button className="card-action">Manage Projects</button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">❤️</div>
            <h3>My Favorites</h3>
            <p>Review the products you've liked.</p>
            <button className="card-action">View Favorites</button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">⚙️</div>
            <h3>Account Settings</h3>
            <p>Update your profile and preferences.</p>
            <button className="card-action">Edit Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;