import Skills from "./about/Skills";
import Experience from "./about/Experience";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const [showLegend, setShowLegend] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsAtTop(isTop);
      if (isTop) {
        setShowLegend(true);
      } else {
        setShowLegend(false);
      }
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (e.key === 'End') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleMouseEnter = () => {
    if (!isAtTop) {
      setShowLegend(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isAtTop) {
      setShowLegend(false);
    }
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Download logic
    } finally {
      setIsDownloading(false);
    }
  };

  const sections = [
    { id: "skills", title: "Skills & Technologies" },
    { id: "experience", title: "Experience" },
    { id: "education", title: "Education" }
  ];

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
              <a 
                onClick={handleDownload}
                className={`nav-link btn btn-outline-success ${isDownloading ? 'disabled' : ''}`}
              >
                {isDownloading ? 'Downloading...' : 'Download Resume'}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="content-wrapper">
        <div ref={skillsRef} className="skills-section">
          <Skills />
        </div>
        <div ref={experienceRef} className="experience-section">
          <Experience />
        </div>
      </div>
    </div>
  );
}
