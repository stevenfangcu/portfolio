import "../../css/Pages.css";
import { education } from "../../consts/Education";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container px-4">
        <h2 className="education-title fs-2 mb-4">Education</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            {education.map((edu, index) => (
              <div key={index} className="education-card mb-4">
                <div className="education-card-body p-3 p-md-4">
                  <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
                    <div>
                      <h3 className="education-degree fs-4 mb-1">{edu.degree}</h3>
                      <h4 className="education-school fs-5 mb-1">{edu.school}</h4>
                    </div>
                    <div className="text-md-end">
                      <p className="education-location small mb-1">{edu.location}</p>
                      <p className="education-duration small mb-2">{edu.duration}</p>
                    </div>
                  </div>
                  <ul className="education-description mb-3">
                    {edu.description.map((desc, i) => (
                      <li key={i} className="education-description-item small mb-2">
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <h5 className="fs-6 mb-2 text-secondary">Relevant Coursework</h5>
                    <div className="education-courses-container">
                      {edu.relevantCourses.map((course, i) => (
                        <span key={i} className="education-course-tag small">
                          {course}
                        </span>
                      ))}
                    </div>
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