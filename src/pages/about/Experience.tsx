import "../../css/Pages.css";
import { experiences } from "../../consts/Experience";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container px-4">
        <h2 className="experience-title fs-2 mb-4">Experience</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card mb-4">
                <div className="experience-card-body p-3 p-md-4">
                  <div className="text-center mb-3">
                    <h3 className="experience-role fs-4 mb-2">{exp.title}</h3>
                    <h4 className="experience-company fs-5 mb-2">{exp.company}</h4>
                    <div className="d-flex flex-column align-items-center gap-1">
                      <p className="experience-location small mb-0">{exp.location}</p>
                      <p className="experience-duration small mb-0">{exp.duration}</p>
                    </div>
                  </div>
                  <ul className="experience-description mb-3">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="experience-description-item small mb-2">
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="experience-tech-container justify-content-center">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="experience-tech-tag small">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
