// src/components/UserProfile.jsx
import React from 'react';
import './UserProfile.css';
import profileImage from './icon-HomePage.jpg'

export default function UserProfile() {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src="path-to-header-image.jpg" alt="Header" className="header-image" /> {/* תמונת הרקע */}
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1 className="profile-name">
          Areal Alien <span className="verified">✔</span>
        </h1>
        <p className="profile-stats">
          857 Followers  |  137 Following
        </p>
        <button className="subscribe-button">+ Subscribe</button>
      </div>
      <div className="profile-nav">
        <a href="#trophies"> אודות</a>
        <a href="#points"> מה הקשר</a>
        <a href="#about">המלצות</a>
        {/* <a href="#posts">💬 Posts</a> */}
      </div>
    </div>
  );
}
