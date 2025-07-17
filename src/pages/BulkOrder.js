// BulkOrder.jsx
import React from 'react';
import './BulkOrder.css';
import { FiShoppingBag } from 'react-icons/fi';
import Footer from '../components/Footer';

const BulkOrder = () => {
  return (
    <>
    <div className="bulk-wrapper">
      <div className="bulk-card">
        <div className="bulk-header">
          <FiShoppingBag className="bulk-icon" />
          <h2>Bulk Order Enquiry</h2>
          <p>Please provide your information below and our team will get in touch with you to assist with your bulk order.</p>
        </div>
        <form className="bulk-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your email" required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Your contact number" required />
          </div>
          <div className="form-group">
            <label>Product / Requirement</label>
            <input type="text" placeholder="Type of product / category" required />
          </div>
          <div className="form-group">
            <label>Message / Details</label>
            <textarea placeholder="Quantity, timeline, customization details etc." rows="4" required></textarea>
          </div>
          <button type="submit" className="bulk-btn">Submit Enquiry</button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BulkOrder;
