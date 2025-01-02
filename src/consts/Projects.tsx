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
    githubUrl: "https://github.com/stevenfang7/stock-market-dashboard",
    // imageUrl: "/images/stock-dashboard.png"  // Add when you have a screenshot
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and TypeScript, featuring responsive design and modern UI components.",
    technologies: ["React", "TypeScript", "Bootstrap", "CSS"],
    githubUrl: "https://github.com/stevenfang7/portfolio",
    liveUrl: "https://stevenfang.com"
  }
]; 