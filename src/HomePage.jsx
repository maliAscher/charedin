import React from 'react';
import './HomePage.css'
import profileImage from './component/icon-HomePage.jpg'; // וודא שהתמונה במיקום הנכון בפרויקט שלך

function HomePage() {
  return (
    <div className="container">
      <div className="text">
        <h1>Welcome to my Web Development Portfolio!</h1>
        <p>
          I'm Lily Smith, a passionate web developer based in USA. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality.
        </p>
        <a href="/terms">Read my Terms and Conditions</a>
      </div>
      <div className="image">
        <img src={profileImage} alt="Lily Smith" />
      </div>
    </div>
  );
}

export default HomePage;
