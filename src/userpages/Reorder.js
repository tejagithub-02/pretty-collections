import React from 'react';
import UserSidebar from './UserSidebar';
import './Reorder.css';

const reorderItems = [];

const Reorder = () => {
  return (
    <div className="user-layout">
      <div className="desktop-sidebar">
        <UserSidebar />
      </div>

      <div className="reorder-content">
        <h2 className="page-title">Reorder</h2>
        <p className="page-description">Quickly reorder your favorite purchases.</p>

        {reorderItems.length === 0 ? (
          <div className="empty-state">
            <p>No previous items available for reorder.</p>
          </div>
        ) : (
          <ul className="reorder-list">
            {reorderItems.map((item, index) => (
              <li key={index} className="reorder-item">
                <span>{item.name}</span>
                <button className="reorder-btn">Reorder</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Reorder;
