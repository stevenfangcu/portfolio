import { useEffect, useState, useRef } from "react";
import Skills from "./about/Skills";
import Experience from "./about/Experience";
import Education from "./about/Education";
import resumePDF from "../assets/Resume_2024.pdf";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const [showLegend, setShowLegend] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    setShowLegend(true);
  };

  const handleMouseLeave = () => {
    setShowLegend(false);
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const link = document.createElement('a');
      link.href = resumePDF; 
      link.download = 'Steven_Fang_Resume.pdf'; 
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const sections = [
    { id: "introduction", title: "About Me" },
    { id: "skills", title: "Skills & Technologies" },
    { id: "experience", title: "Experience" },
    { id: "education", title: "Education" }
  ];

  const Introduction: React.FC = () => {
    return (
      <section id="introduction" className="introduction-section mb-5">
        <div className="container px-4">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="intro-card p-4">
                <div className="text-center">
                  <h1 className="fs-2 mb-3">Hi, I'm Steven Fang</h1>
                  <p className="text-primary mb-3">
                    Full Stack Developer based in Toronto
                  </p>
                </div>
                <div className="intro-content">
                  <p className="text-white mb-3">
                    Specializing in building scalable web applications 
                    with modern technologies.
                  </p>
                  <p className="text-white">
                    I'm passionate about creating efficient, user-friendly solutions and continuously 
                    learning new technologies. With experience in both frontend and backend development, 
                    I enjoy tackling complex problems and delivering high-quality software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="container">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <div 
        className="hover-trigger"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <nav className={`py-3 mb-4 legend-nav ${showLegend ? 'legend-visible' : ''}`}>
          <ul className="nav justify-content-center gap-4">
            {sections.map((section) => (
              <li key={section.id} className="nav-item">
                <a href={`#${section.id}`} className="nav-link text-secondary">
                  {section.title}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <button 
                onClick={handleDownload}
                className={`nav-link btn btn-outline-success ${isDownloading ? 'disabled' : ''}`}
                disabled={isDownloading}
              >
                {isDownloading ? 'Downloading...' : 'Download Resume'}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="content-wrapper">
        <Introduction />
        <div ref={skillsRef} className="skills-section">
          <Skills />
        </div>
        <div ref={experienceRef} className="experience-section">
          <Experience />
        </div>
        <Education />
      </div>
    </div>
  );
}
