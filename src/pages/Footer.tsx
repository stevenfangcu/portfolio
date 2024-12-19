import React from 'react';
import '../css/Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        {/* GitHub */}
        <a
          href="https://github.com/stevenfangcu"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/steven-fang"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        {/* Email */}
        <a href="mailto:stevenfangcu@icloud.com">
          Email
        </a>

        {/* Portfolio */}
        <a
          href="https://yourportfolio.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </div>
      <p>© 2024 Steven Fang. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
