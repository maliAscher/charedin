// src/components/UserProfile.jsx
import React from 'react';
import './UserProfile.css';
import profileImage from './icon-HomePage.jpg'

export default function UserProfile() {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1 className="profile-name">
         יעל יצחקי <span className="verified"></span>
        </h1>
        <button className="subscribe-button">  + הוסיפי כחברה</button>
      </div>
      <div className="profile-nav">
        <a href="#points"> מה הקשר</a>
        <a href="#about">המלצות</a>
        <a href="#trophies"> אודות</a>
        {/* <a href="#posts">💬 Posts</a> */}
      </div>
    </div>
  );
}
