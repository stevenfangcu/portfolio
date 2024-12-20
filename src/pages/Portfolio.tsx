import './Pages.css';

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-container">
      {/* Development Notice */}
      <div className="dev-notice">
        <p>🚧 This site is currently under development. More exciting projects coming soon! 🚧</p>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <p className="hero-text">
            Explore my projects and accomplishments below.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="portfolio-content">
          <h2 className="portfolio-title">My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3 className="project-title">Project 1</h3>
              <p>Project 1</p>
            </div>
            <div className="project-card">
              <h3 className="project-title">Project 2</h3>
              <p>Project 2</p>
            </div>
            <div className="project-card">
              <h3 className="project-title">Project 3</h3>
              <p>Project 3</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
