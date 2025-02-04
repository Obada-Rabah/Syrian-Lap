import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="welcome-text">
          <h1>مرحباً بك في</h1><h1>Syrian Lap</h1>
          <p>احصل على أفضل الصفقات</p>
        </div>
        <div className="header-image">
          <img src="/images/laptop-header.png" alt="Used Laptops" />
        </div>
      </div>
    </header>
  );
};

export default Header;