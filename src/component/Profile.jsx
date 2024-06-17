
// src/Profile.js

import React from 'react';
import './Profile.css'; // Create a CSS file for styling
import profileImage from './icon-HomePage.jpg'

const Profile = () => {
  return (
    <div className="profile">
      
      <div className="profile-details">
        <img src={profileImage} alt="Profile" className="profile-img" />
        <h1>יעל יצחקי</h1>        
      </div>
      <button className="follow-btn">+ הוסיפי כחברה</button>
    </div>
  );
};

export default Profile;
