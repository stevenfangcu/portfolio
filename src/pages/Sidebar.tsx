import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Sidebar.css'

const HamburgerSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleSidebar}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      {/* Sidebar */}
      <div
        className="sidebar"
        style={{
          left: isOpen ? '0' : '-250px', // Toggle the sidebar's position
        }}
      >
        <ul>
          {/* Use NavLink with className function for active link styling */}
          <li>
            <NavLink
              to="/portfolio"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')} // Dynamically apply active class
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerSidebar;
