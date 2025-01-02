interface EducationItem {
  degree: string;
  school: string;
  location: string;
  duration: string;
  description: string[];
  relevantCourses: string[];
}

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Computer Science",
    school: "Carleton University",
    location: "Ottawa, ON",
    duration: "2014 - 2019",
    description: [
      "Graduated with a strong foundation in computer science fundamentals and software development practices",
      "Completed multiple team-based software development projects using agile methodologies",
      "Developed expertise in various programming languages including Java, Python, and JavaScript",
      "Participated in coding competitions and hackathons, enhancing problem-solving skills",
    ],
    relevantCourses: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Management Systems",
      "Web Development",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming",
      "System Architecture",
    ]
  }
]; 