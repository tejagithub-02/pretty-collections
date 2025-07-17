import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any user session or token here
    alert('You have been logged out.');
    navigate('/signin'); // Redirect to sign-in
  }, [navigate]);

  return null;
};

export default Logout;
