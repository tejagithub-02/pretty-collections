import React from 'react';
import UserSidebar from './UserSidebar';
import './OrderHistory.css';

const orders = []; // Replace with real orders

const OrderHistory = () => {
  return (
    <div className="user-layout">
    <div className="desktop-sidebar">
        <UserSidebar />
      </div>

      <div className="orders-content">
        <h2 className="page-title">Order History</h2>
        <p className="page-description">Track your previous purchases.</p>

        {orders.length === 0 ? (
          <div className="empty-state">
            <p>You haven’t placed any orders yet.</p>
          </div>
        ) : (
          <table className="order-table">
            <thead>
              <tr>
                <th>Order #</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr key={i}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.status}</td>
                  <td>{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
