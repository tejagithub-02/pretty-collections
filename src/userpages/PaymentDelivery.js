import React from 'react';
import UserSidebar from './UserSidebar';
import './PaymentDelivery.css';

const PaymentDelivery = () => {
  return (
    <div className="user-layout">
    <div className="desktop-sidebar">
        <UserSidebar />
      </div>

      <div className="payment-content">
        <h2 className="page-title">Payment & Delivery</h2>
        <p className="page-description">Manage your saved payment and delivery info.</p>

        <div className="info-box">
          <h4>Saved Payment Method</h4>
          <p>Visa **** **** 1234</p>
          <button className="update-btn">Update</button>
        </div>

        <div className="info-box">
          <h4>Delivery Address</h4>
          <p>1234 Street Name, City, ZIP</p>
          <button className="update-btn">Update</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDelivery;
