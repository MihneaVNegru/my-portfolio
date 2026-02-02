import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaJava, FaDocker, FaAws } from 'react-icons/fa';
import { SiRedis, SiCplusplus, SiPostgresql, SiKubernetes } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

export const personalInfo = {
  name: "Mihnea Negru",
  title: "Software Engineer",
  email: "mihnea.vladut.negru@gmail.com",
  summary: "Software Engineer specialized in fullstack development and cloud-native solutions. Experienced in designing and implementing complex web and mobile applications, integrating frontend, backend, and IoT components. Skilled in Node.js, React, Kotlin, Python, and Docker-based deployments, with proven ability to optimize performance, improve reliability, and deliver end-to-end solutions that meet user and business requirements.",
  bio: "Software Engineer specialized in fullstack development and cloud-native solutions. Experienced in designing and implementing complex web and mobile applications, integrating frontend, backend, and IoT components.",
  phone: "+40 741 774 273",
  github: "https://github.com/MihneaVNegru",
  linkedin: "https://linkedin.com/in/yourprofile", // User didn't provide specific link, keeping placeholder or could remove
};

export const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Python", icon: <FaPython className="text-blue-500" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "C/C++", icon: <SiCplusplus className="text-blue-700" /> },
  { name: "C#", icon: <TbBrandCSharp className="text-purple-600" /> },
  { name: "SQL (Postgres/MySQL)", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "NoSQL (DynamoDB/Redis)", icon: <SiRedis className="text-red-600" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
  { name: "AWS", icon: <FaAws className="text-orange-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
];

export const projects = [
  {
    id: 1,
    title: "Storingo - Shopping & IoT",
    description: "Fullstack inventory management and shopping system with IoT integration. Supports 50+ concurrent users and real-time motor control for item retrieval. Reduced manual order processing by 25%.",
    tags: ["React", "Node.js", "IoT", "QR Code"],
    demoLink: "#",
    repoLink: "https://github.com/MihneaVNegru",
    image: "https://via.placeholder.com/400x250?text=Storingo",
  },
  {
    id: 2,
    title: "Data Collector",
    description: "Web scraper built in Racket/Python with Beautiful Soup. Extracts 300-500 emails/hour and automates categorization. Processed 20,000+ emails in initial tests.",
    tags: ["Python", "Racket", "Web Scraping", "Automation"],
    demoLink: "#",
    repoLink: "https://github.com/MihneaVNegru",
    image: "https://via.placeholder.com/400x250?text=Data+Collector",
  },
  {
    id: 3,
    title: "WPF Multi-Agent Maze Solver",
    description: "Cooperative multi-agent system simulation in C#/.NET. Agents communicate to escape randomly generated mazes using distributed decision-making.",
    tags: ["C#", ".NET", "WPF", "AI"],
    demoLink: "#",
    repoLink: "https://github.com/MihneaVNegru",
    image: "https://via.placeholder.com/400x250?text=Maze+Solver",
  },
];

export const experience = [
  {
    year: "Apr 2025 – Present",
    role: "Software Engineer (Fullstack)",
    company: "Amplified Software",
    description: "Implemented client-facing app features for 100 DAU. Engineered Redis/BullMQ microservices (1k tasks/day) and managed AWS ECS deployments."
  },
  {
    year: "Feb 2025 – Apr 2025",
    role: "Software Engineer",
    company: "Binary Tint",
    description: "Created Python/Flask AI services processing 200 daily interactions. Managed DynamoDB/PostgreSQL records with 99% uptime."
  },
  {
    year: "Sep 2023 – Feb 2025",
    role: "Software Engineer",
    company: "Goya-Systec",
    description: "Engineered Vue/React/Node web apps (15% efficiency boost). Crafted C-based firmware and managed Docker/Git workflows."
  },
  {
    year: "Jun 2022 – Oct 2022",
    role: "Junior Programmer",
    company: "camLine",
    description: "Java Backend development with MySQL. Automated Jenkins/Git CI/CD pipelines improving reliability by 20%."
  }
];

export const education = [
  {
    period: "2023 – 2025",
    degree: "Master in Engineering - Distributed Systems and Web Technologies",
    school: "Technical University Gheorghe Asachi Iasi",
    location: "Iasi, Romania"
  },
  {
    period: "2019 – 2023",
    degree: "Bachelor in Engineering - Computer Engineering",
    school: "Technical University Gheorghe Asachi Iasi",
    location: "Iasi, Romania"
  }
];
