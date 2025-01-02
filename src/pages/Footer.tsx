import React from 'react';
import '../css/Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container px-4">
        <div className="text-center">
          <p className="small text-secondary mb-0">
            © 2024 Steven Fang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
