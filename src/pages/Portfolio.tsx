import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../css/Pages.css';

const Portfolio = () => {
  const navigate = useNavigate();
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/stock');
  };

  return (
    <div className="portfolio-container py-5">
      <div className="container px-4">
        {/* Hero Section */}
        <motion.section 
          className="text-center mb-5"
          {...fadeIn}
        >
          <h1 className="display-4 fw-bold text-black mb-4">
            Full Stack Developer
          </h1>
          <p className="lead text-secondary mb-4">
            Crafting scalable solutions with modern technologies
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a 
              href="https://github.com/stevenfangcu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              <i className="fab fa-github me-2"></i>
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/steven-fang/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              <i className="fab fa-linkedin me-2"></i>
              LinkedIn
            </a>
          </div>
        </motion.section>

        {/* Introduction Section */}
        <motion.section
          className="mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card bg-dark border-secondary">
                <div className="card-body p-4">
                  <h2 className="text-white mb-4">Hello, I'm Steven! 👋</h2>
                  <div className="text-secondary">
                    <p className="mb-3">
                      I'm a Full Stack Developer based in Toronto with a passion for building 
                      innovative web applications. With a strong foundation in computer science 
                      and hands-on experience in modern web technologies, I specialize in 
                      creating efficient, scalable, and user-friendly solutions.
                    </p>
                    <p className="mb-3">
                      Currently working at LawyerDoneDeal Corporation, I've had the opportunity 
                      to work on various projects involving React, TypeScript, Node.js, and cloud 
                      technologies. I enjoy tackling complex problems and continuously learning 
                      new technologies to stay at the forefront of web development.
                    </p>
                    <p>
                      When I'm not coding, you can find me exploring new technologies, 
                      contributing to open-source projects, or working on personal projects 
                      to expand my skill set.
                    </p>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-white h5 mb-3">Quick Facts:</h3>
                    <ul className="list-unstyled text-secondary">
                      <li>🎓 Computer Science graduate from Carleton University</li>
                      <li>💼 Full Stack Developer with 3+ years of experience</li>
                      <li>🚀 Passionate about clean code and best practices</li>
                      <li>🌱 Always learning and exploring new technologies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section 
          className="mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-white mb-4">Featured Projects</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card bg-dark border-secondary h-100">
                <div className="card-body">
                  <h3 className="card-title text-white">Stock Market Dashboard</h3>
                  <p className="card-text text-secondary">
                    Real-time financial data visualization platform with interactive charts
                    and multiple stock comparison capabilities.
                  </p>
                  <div className="tech-stack mb-3">
                    <span className="badge bg-success me-2">React</span>
                    <span className="badge bg-info me-2">TypeScript</span>
                    <span className="badge bg-warning me-2">Chart.js</span>
                    <span className="badge bg-danger">API Integration</span>
                  </div>
                  <button 
                    onClick={handleDemoClick}
                    className="btn btn-outline-success"
                  >
                    View Demo
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-dark border-secondary h-100">
                <div className="card-body">
                  <h3 className="card-title text-white">Genshin Impact Character Database</h3>
                  <p className="card-text text-secondary">
                    Modern, responsive portfolio website built with Ruby, JavaScript, and HTML.
                    Featuring smooth animations and clean design.
                  </p>
                  <div className="tech-stack mb-3">
                    <span className="badge bg-success me-2">Ruby</span>
                    <span className="badge bg-info me-2">JavaScript</span>
                    <span className="badge bg-primary me-2">HTML</span>
                    <span className="badge bg-secondary">SQLite3</span>
                  </div>
                  <a href="https://github.com/stevenfangcu/GeshinImpactApp" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                    <i className="fab fa-github me-2"></i>Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-white mb-4">Technical Skills</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card bg-dark border-secondary h-100">
                <div className="card-body">
                  <h3 className="card-title text-white h5">Frontend</h3>
                  <ul className="list-unstyled text-secondary">
                    <li>• React.js / TypeScript</li>
                    <li>• HTML5 / CSS3</li>
                    <li>• Bootstrap / Responsive Design</li>
                    <li>• State Management (Redux)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-dark border-secondary h-100">
                <div className="card-body">
                  <h3 className="card-title text-white h5">Backend</h3>
                  <ul className="list-unstyled text-secondary">
                    <li>• Node.js / Express.js</li>
                    <li>• RESTful APIs</li>
                    <li>• MySQL / MongoDB</li>
                    <li>• Authentication & Security</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-dark border-secondary h-100">
                <div className="card-body">
                  <h3 className="card-title text-white h5">Tools & DevOps</h3>
                  <ul className="list-unstyled text-secondary">
                    <li>• Git / GitHub</li>
                    <li>• Docker</li>
                    <li>• Azure Cloud Services</li>
                    <li>• CI/CD Pipelines</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Portfolio;
