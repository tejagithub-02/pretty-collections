// src/userpages/AccountSettings.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserSidebar from './UserSidebar';
import './AccountSettings.css';

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [firstName, setFirstName] = useState('Teja');
  const [lastName, setLastName] = useState('Thamba');
  const [email, setEmail] = useState('tmaruthiteja2013@gmail.com');
  const [newEmail, setNewEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  const navigate = useNavigate();

  const handleSaveName = () => {
    setIsEditingName(false);
  };

  const handleSaveEmail = () => {
    if (newEmail === confirmEmail && newEmail.trim()) {
      setEmail(newEmail);
      setNewEmail('');
      setConfirmEmail('');
      setIsEditingEmail(false);
    } else {
      alert("Emails don't match.");
    }
  };

  return (
    <div className="user-layout">
    <div className="desktop-sidebar">
        <UserSidebar />
      </div>
      <div className="account-settings">
        <h2 className="page-title">Account Settings</h2>

        <div className="tab-header">
          <button className={activeTab === 'personal' ? 'active' : ''} onClick={() => setActiveTab('personal')}>
            Personal Info
          </button>
          <button className={activeTab === 'security' ? 'active' : ''} onClick={() => setActiveTab('security')}>
            Security
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'personal' && (
            <div className="tab-panel">
              <div className="field">
                <label>Name</label>
                {!isEditingName ? (
                  <>
                    <p className="field-value">{`${firstName} ${lastName}`}</p>
                    <span className="edit-link" onClick={() => setIsEditingName(true)}>Edit</span>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="First name*"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Last name*"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <div className="edit-actions">
                      <button onClick={handleSaveName} className="save-btn">Save</button>
                      <button onClick={() => setIsEditingName(false)} className="cancel-btn">Cancel</button>
                    </div>
                  </>
                )}
              </div>

              <hr />

              <div className="field">
                <label>Email</label>
                {!isEditingEmail ? (
                  <>
                    <p className="field-value">{email}</p>
                    <span className="edit-link" onClick={() => setIsEditingEmail(true)}>Edit</span>
                  </>
                ) : (
                  <>
                    <input
                      type="email"
                      placeholder="New email*"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                    />
                    <input
                      type="email"
                      placeholder="Confirm your new email*"
                      value={confirmEmail}
                      onChange={(e) => setConfirmEmail(e.target.value)}
                    />
                    <div className="edit-actions">
                      <button onClick={handleSaveEmail} className="save-btn">Save</button>
                      <button onClick={() => setIsEditingEmail(false)} className="cancel-btn">Cancel</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="tab-panel">
              <div className="field">
                <label>Password</label>
                <span className="edit-link" onClick={() => navigate('/password')}>Change</span>
              </div>
              <div className="field">
                <label>Delete account</label>
                <span className="edit-link danger" onClick={() => navigate('/delete')}>Start process</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
