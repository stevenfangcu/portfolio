import './Pages.css';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-container">
      <div className="container d-flex align-items-center justify-content-center min-vh-100 px-4">
        <div className="dev-notice">
          <p className="fs-6 px-2">
            🚧 Portfolio section coming soon! 🚧
            <br className="d-block d-sm-none" />
            <span className="d-block d-sm-inline mt-2 mt-sm-0">
              Meanwhile, check out my experience and skills in the{' '}
              <Link to="/about" className="dev-notice-link">About</Link>
              {' '}section.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
