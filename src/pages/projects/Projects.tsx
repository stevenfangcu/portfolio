import { projects } from "../../consts/Projects";
import { useNavigate } from "react-router-dom";
import "../../css/Pages.css";

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.navigation) {
      navigate(project.navigation);
    } else {
      window.open(project.githubUrl, '_blank');
    }
  };

  return (
    <section className="projects-section">
      <div className="container px-4 py-5">
        <h2 className="text-center mb-5 text-white">Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div 
                className="project-card h-100" 
                onClick={() => handleProjectClick(project)}
                style={{ cursor: 'pointer' }}
              >
                {project.imageUrl && (
                  <div className="project-image-container">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="project-image"
                    />
                  </div>
                )}
                <div className="project-content p-4">
                  <h3 className="project-title mb-3">{project.title}</h3>
                  <p className="project-description mb-3">
                    {project.description}
                  </p>
                  <div className="project-technologies mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links" onClick={(e) => e.stopPropagation()}>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light me-2"
                      >
                        <i className="fab fa-github me-2"></i>
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-success"
                      >
                        <i className="fas fa-external-link-alt me-2"></i>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 