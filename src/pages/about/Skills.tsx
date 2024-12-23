import "../../css/Pages.css";
import { skills } from "../../consts/Skills";
import dockerImg from "../../assets/docker.png";
import reactImg from "../../assets/react.png";
import expressImg from "../../assets/express.jpg";
import mysqlImg from "../../assets/mysql.png";
import typescriptImg from "../../assets/typescript.png";
import azureImg from "../../assets/azure.png";
import bootstrapImg from "../../assets/bootstrap.png";
import gitImg from "../../assets/git.png";
import jestImg from "../../assets/jest.png";
import nodeImg from "../../assets/nodejs.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const imageMap: { [key: string]: string } = {
  "docker.png": dockerImg,
  "react.png": reactImg,
"express.jpg": expressImg,
  "mysql.png": mysqlImg,
  "typescript.png": typescriptImg,
  "azure.png": azureImg,
  "bootstrap.png": bootstrapImg,
  "git.png": gitImg,
  "jest.png": jestImg,
  "node.png": nodeImg,
};

export default function Skills() {
  const getImageClass = (title: string) => {
    if (title === "Express.js") {
      return "tiny-badge express-badge me-3";
    }
    return "tiny-badge me-3";
  };

  return (
    <section id="skills" className="mb-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="mb-3">
            Skills &amp; Technologies
          </h2>
          <p className="text-secondary mb-4">
            A showcase of my technical expertise and experience with various technologies.
            Hover over each skill to learn more about my proficiency and projects.
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
          {skills.map((skill) => (
            <div key={skill.title} className="col">
              <div className="card bg-dark border-secondary h-100">
                <div className="card-body d-flex align-items-center justify-content-center position-relative">
                  <img 
                    src={imageMap[skill.img]} 
                    alt={skill.title}
                    className={getImageClass(skill.title)}
                  />
                  <span className="text-white">
                    {skill.title}
                  </span>
                  <div className="skill-hover-text text-center">
                    <p className="mb-0">{skill.summary}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 