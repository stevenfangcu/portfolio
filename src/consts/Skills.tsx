
interface SkillItem {
  title: string;
  summary: string;
  img: string;
  imgSize?: {
    width: number;
    height: number;
  };
}

export const skills: SkillItem[] = [
  {
    title: "Docker",
    summary: "Experience with containerization and deployment using Docker. Created and managed multi-container applications with Docker Compose.",
    img: "docker.png",
    imgSize: { width: 24, height: 24 }
  },
  {
    title: "React",
    summary: "Built multiple web applications using React, including this portfolio",
    img: "react.png",
    imgSize: { width: 24, height: 24 }
  },
  {
    title: "Express.js",
    summary: "Created RESTful APIs and server-side applications",
    img: "express.jpg",
    imgSize: { width: 48, height: 24 }
  },
  {
    title: "MySQL",
    summary: "Proficient in database design, complex SQL queries, and implementing efficient relational database models for scalable applications.",
    img: "mysql.png",
    imgSize: { width: 24, height: 24 }
  },
  {
    title: "TypeScript",
    summary: "Extensive experience with TypeScript in frontend and backend development",
    img: "typescript.png",
    imgSize: { width: 24, height: 24 }
  },
  {
    title: "Azure",
    summary: "Experience with Azure cloud services including App Service, Azure Functions, and deployment of scalable applications on cloud infrastructure.",
    img: "azure.png",
    imgSize: { width: 24, height: 24 }
  },
  {
    title: "Node.js",
    summary: "Built scalable backend services using Node.js runtime. Experience with async programming, event-driven architecture, and npm ecosystem.",
    img: "nodejs.png",
    imgSize: { width: 24, height: 24 }
  },
  {
    title: "Git",
    summary: "Proficient in version control using Git, including branching strategies, code review workflows, and collaborative development practices.",
    img: "git.png",
    imgSize: { width: 24, height: 24 }
  },
  {
    title: "Jest/Testing",
    summary: "Experience with unit testing, integration testing, and test-driven development using Jest and React Testing Library.",
    img: "jest.png",
    imgSize: { width: 24, height: 24 }
  },
  {
    title: "Bootstrap",
    summary: "Expertise in building responsive and modern UIs using Bootstrap, including custom theming, components, and responsive grid system.",
    img: "bootstrap.png",
    imgSize: { width: 24, height: 24 }
  }
];
  