import React from 'react';
import '../css/NavBar.css'; // Import CSS file for styling

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          MyLogo
        </a>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/resume">resume</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
