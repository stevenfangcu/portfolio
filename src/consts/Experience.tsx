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
    duration: "April 2022 - Present",
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
  }
];
