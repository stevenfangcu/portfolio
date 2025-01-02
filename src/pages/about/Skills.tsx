import { useState } from "react";
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

interface SkillModalProps {
  skill: {
    title: string;
    summary: string;
  } | null;
  onClose: () => void;
}

const SkillModal: React.FC<SkillModalProps> = ({ skill, onClose }) => {
  if (!skill) return null;

  return (
    <div className="skill-modal-backdrop" onClick={onClose}>
      <div className="skill-modal" onClick={e => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h3 className="mb-3">{skill.title}</h3>
        <p>{skill.summary}</p>
      </div>
    </div>
  );
};

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<typeof skills[0] | null>(null);

  const getImageStyle = (skill: typeof skills[0]) => {
    const baseStyle: React.CSSProperties = {
      objectFit: 'contain',
      marginRight: '0.75rem'
    };

    if (skill.imgSize) {
      return {
        ...baseStyle,
        width: skill.imgSize.width,
        height: skill.imgSize.height
      };
    }

    return {
      ...baseStyle,
      width: 24,
      height: 24
    };
  };

  return (
    <section id="skills" className="mb-5">
      <div className="container px-4">
        <div className="text-center mb-4">
          <h2 className="mb-3 fs-2">
            Skills &amp; Technologies
          </h2>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          {skills.map((skill) => (
            <div key={skill.title} className="col">
              <div 
                className="card bg-dark border-secondary h-100 skill-card"
                onClick={() => setSelectedSkill(skill)}
              >
                <div className="card-body d-flex align-items-center p-3">
                  <img 
                    src={imageMap[skill.img]} 
                    alt={skill.title}
                    style={getImageStyle(skill)}
                  />
                  <span className="text-white text-break">
                    {skill.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SkillModal 
        skill={selectedSkill} 
        onClose={() => setSelectedSkill(null)} 
      />
    </section>
  );
} 