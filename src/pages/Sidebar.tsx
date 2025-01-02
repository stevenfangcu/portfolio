import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar-wrapper ${isOpen ? 'expanded' : 'collapsed'}`}>
        <button 
          className="toggle-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <nav className="sidebar">
          <div className="sidebar-content">
            <h1 className="sidebar-title">
              {isOpen ? 'Steven Fang' : 'SF'}
            </h1>
            <div className="nav-links">
              <Link to="/portfolio" className="nav-link" title="Portfolio">
                <i className="fas fa-folder"></i>
                {isOpen && <span>Portfolio</span>}
              </Link>
              <Link to="/about" className="nav-link" title="About">
                <i className="fas fa-user"></i>
                {isOpen && <span>About</span>}
              </Link>
              <Link to="/projects" className="nav-link" title="Projects">
                <i className="fas fa-code"></i>
                {isOpen && <span>Projects</span>}
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {isOpen && <div className="sidebar-backdrop" onClick={toggleMenu}></div>}
    </>
  );
};

export default Sidebar;
