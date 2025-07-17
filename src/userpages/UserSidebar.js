import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserSidebar.css';

const UserSidebar = () => {
  return (
    <div className="user-sidebar">
      <h2 className="sidebar-title">My Account</h2>
      <nav>
        <NavLink to="/" className="nav-item">Dashboard</NavLink>
        <NavLink to="/" className="nav-item">Account Profile</NavLink>

        <hr className="sidebar-divider" />

        <NavLink to="/" className="nav-item">My Projects</NavLink>
        <NavLink to="" className="nav-item">My Favorites</NavLink>

        <hr className="sidebar-divider" />

        <NavLink to="/" className="nav-item">Order History</NavLink>
        <NavLink to="/" className="nav-item">Reorder</NavLink>

        <hr className="sidebar-divider" />

        <NavLink to="/" className="nav-item">Account Settings</NavLink>
        <NavLink to="/" className="nav-item">Payment & Delivery</NavLink>

        <hr className="sidebar-divider" />

        <NavLink to="/logout" className="nav-item logout-link">Logout</NavLink>
      </nav>
    </div>
  );
};

export default UserSidebar;
