import "../../css/Pages.css";
import { experiences } from "../../consts/Experience";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-card-body">
                  <h3 className="experience-role">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                  <p className="experience-location">{exp.location}</p>
                  <p className="experience-duration">{exp.duration}</p>
                  <ul className="experience-description">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="experience-description-item">
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="experience-tech-container">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="experience-tech-tag">
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
