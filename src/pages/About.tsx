import Skills from "./about/Skills";
import resumePDF from "../assets/Resume_2024.pdf";

export default function About() {
  const sections = [
    { id: "skills", title: "Skills & Technologies" },
    { id: "experience", title: "Experience" },
    { id: "education", title: "Education" }
  ];

  return (
    <>
      <nav className="legend">
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="legend-link">
                {section.title}
              </a>
            </li>
          ))}
          <li>
            <a 
              href={resumePDF}
              download="Resume_2024.pdf"
              className="legend-link resume-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </nav>

      <Skills />
      {/* Add other sections here */}
    </>
  );
}