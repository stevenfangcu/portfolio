interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "LawyerDoneDeal Corporation",
    location: "Toronto, ON",
    duration: "April 2022 - March 2025",
    description: [
      "Designed and maintained web applications using JavaScript, React.js, TypeScript, and CSS, serving users across platforms.",
      "Designed and implemented RESTful APIs to enhance frontend functionality, generate business data, and facilitate third-party integrations, resulting in a 20% reduction in manual processing time.",
      "Leveraged Express.js and Node.js to develop middleware for session and cookie validation, supporting a wide range of API requests.",
      "Managed SQL databases, optimizing schemas to improve query performance by 30% and ensuring data integrity for critical business processes.",
      "Launched iOS and Android applications using React Native and Express. Enhanced onboarding process by integrating Microblink for secure identity verification, increasing user retention by 25%.",
      "Implemented Docker containerization, streamlining deployment pipelines and reducing environment setup time by 50%.",
      "Led cross-functional teams, driving successful feature delivery through code reviews, mentoring junior developers, and fostering collaboration.",
      "Cut costs and improved scalability by migrating services to Microsoft Azure, achieving a 25% reduction in infrastructure costs.",
      "Enhanced software scalability to support onboarding users across multiple states by implementing state-specific features and compliance checks."
    ],
    technologies: [
      "React",
      "TypeScript",
      "Express.js",
      "MySQL",
      "Azure",
      "Docker",
      "React Native",
      "Node.js",
      "RESTful APIs",
      "Microblink"
    ]
  },
  {
    title: "Software Developer",
    company: "Tata Consultancy Services",
    location: "Toronto, ON",
    duration: "February 2021 - April 2022",
    description: [
      "Led quality assurance for key RBC application projects, improving performance, stability, and security.",
      "Facilitated seamless collaboration between onshore and offshore teams, boosting productivity and team morale.",
      "Automated pre-release testing processes with robust scripts, streamlining onboarding and enhancing feature quality."
    ],
    technologies: [
      "Java",
      "Selenium",
      "TestNG",
      "Jenkins",
      "Git",
      "JIRA",
      "Agile",
      "Test Automation"
    ]
  },
  {
    title: "Data Analyst",
    company: "Department of National Defence",
    location: "Ottawa, ON",
    duration: "April 2019 - September 2019",
    description: [
      "Developed Python scripts to classify, reorganize, and clean datasets, enhancing accuracy and usability.",
      "Implemented supervised and unsupervised machine learning algorithms for predictive analysis and clustering, improving decision-making accuracy.",
      "Performed feature extraction and text-based data manipulation to optimize data for analysis."
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Data Visualization",
      "SQL"
    ]
  }
];
