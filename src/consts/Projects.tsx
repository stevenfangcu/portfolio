interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  navigation: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Stock Market Dashboard",
    navigation: "/stock",
    description: "A real-time stock market dashboard using Alpha Vantage API. Features include stock price tracking, technical indicators, and interactive charts. Implemented caching to optimize API usage and WebSocket for live updates.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "WebSocket",
      "Chart.js",
      "Alpha Vantage API",
      "Redis"
    ],
  },
  {
    title: "LeetCode Solutions",
    navigation: "/leetcode",
    description: "A collection of my solutions to LeetCode problems. Each solution is accompanied by a detailed explanation and a step-by-step breakdown of the code.",
    technologies: [
      "C++",
      "LeetCode"
    ],
  }
]; 