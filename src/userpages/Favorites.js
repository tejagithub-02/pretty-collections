import React from 'react';
import UserSidebar from './UserSidebar';
import './Favorites.css';

const favorites = []; // Placeholder array

const Favorites = () => {
  return (
    <div className="user-layout">
<div className="desktop-sidebar">
        <UserSidebar />
      </div>

      <div className="favorites-content">
        <h2 className="page-title">My Favorites</h2>
        <p className="page-description">Your liked and saved products.</p>

        {favorites.length === 0 ? (
          <div className="empty-state">
            <p>No favorite products yet.</p>
            <button className="browse-btn">Browse Products</button>
          </div>
        ) : (
          <div className="favorites-grid">
            {/* Loop through favorites */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
