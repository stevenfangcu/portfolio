import "../../css/Pages.css";
import { skills } from "../../consts/Skills";
import dockerImg from "../../assets/docker.png";
import reactImg from "../../assets/react.png";
import expressImg from "../../assets/express.jpg";
import mysqlImg from "../../assets/mysql.png";
import typescriptImg from "../../assets/typescript.png";
import azureImg from "../../assets/azure.png";

const imageMap: { [key: string]: string } = {
  "docker.png": dockerImg,
  "react.png": reactImg,
"express.jpg": expressImg,
  "mysql.png": mysqlImg,
  "typescript.png": typescriptImg,
  "azure.png": azureImg,
};

export default function Skills() {
  const getImageClass = (title: string) => {
    if (title === "Express.js") {
      return "tiny-badge express-badge mr-5";
    }
    return "tiny-badge mr-5";
  };

  return (
    <section id="skills">
      <div>
        <div>
          <h2>
            Skills &amp; Technologies
          </h2>
          <p className="skills-description">
            A showcase of my technical expertise and experience with various technologies.
            Hover over each skill to learn more about my proficiency and projects.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.title} className="skill-item">
              <div className="skill-content">
                <img 
                  src={imageMap[skill.img]} 
                  alt={skill.title}
                  className={getImageClass(skill.title)}
                />
                <span>
                  {skill.title}
                </span>
                <div className="hover-text">
                  <p>{skill.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 