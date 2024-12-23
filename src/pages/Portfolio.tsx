import './Pages.css';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-container">
      <div className="container d-flex align-items-center justify-content-center min-vh-100">
        <div className="dev-notice">
          <p>
            🚧 Portfolio section coming soon! 🚧
            <br />
            Meanwhile, check out my experience and skills in the{' '}
            <Link to="/about" className="dev-notice-link">About</Link>
            {' '}section.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
