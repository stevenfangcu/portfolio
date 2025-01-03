interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Stock Market Dashboard",
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
  }
]; 