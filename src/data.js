import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaJava, FaDocker, FaAws } from 'react-icons/fa';
import { SiRedis, SiCplusplus, SiPostgresql, SiKubernetes } from 'react-icons/si';

export const personalInfo = {
  name: "Mihnea Negru",
  title: "Backend Engineer | AI Infrastructure & Agent Orchestration",
  email: "mihnea.vladut.negru@gmail.com",
  summary: "Software Engineer specializing in Serverless Architectures and AI-Agent Infrastructure. Expert in building high-concurrency backend services using Python (FastAPI), AWS Lambda, and SQS. Proven track record in orchestrating complex, event-driven AI workflows and optimizing production systems with NoSQL/DynamoDB and robust observability.",
  bio: "Software Engineer specializing in Serverless Architectures and AI-Agent Infrastructure. Expert in building high-concurrency backend services using Python (FastAPI), AWS Lambda, and SQS.",
  phone: "+40 741 774 273",
  location: "Iași, Romania",
  github: "https://github.com/MihneaVNegru",
  linkedin: "https://linkedin.com/in/yourprofile",
};

export const skills = [
  { name: "Python / FastAPI", icon: <FaPython className="text-blue-500" /> },
  { name: "AWS Lambda & SQS", icon: <FaAws className="text-orange-500" /> },
  { name: "Node.js / TypeScript", icon: <FaNodeJs className="text-green-500" /> },
  { name: "DynamoDB / NoSQL", icon: <SiRedis className="text-red-600" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "Redis / BullMQ", icon: <SiRedis className="text-red-500" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "C/C++", icon: <SiCplusplus className="text-blue-700" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
];

export const projects = [
  {
    id: 1,
    title: "Storingo – IoT Shopping & Inventory Platform",
    description: "Fullstack system for automated item retrieval integrating hardware-level motor control with a real-time Node.js backend via QR code triggers.",
    tags: ["React.js", "Node.js", "IoT", "Hardware Integration"],
    repoLink: "https://github.com/MihneaVNegru",
  },
  {
    id: 2,
    title: "GDPR-Aware Data Pipeline",
    description: "Python crawler with a compliance engine to detect PII and implement automated data-masking to ensure GDPR-compliant storage.",
    tags: ["Python", "Data Engineering", "GDPR", "Automation"],
    repoLink: "https://github.com/MihneaVNegru",
  },
  {
    id: 3,
    title: "WPF Multi-Agent Maze Solver",
    description: "Cooperative multi-agent system simulation in C#/.NET. Agents communicate to escape randomly generated mazes using distributed decision-making.",
    tags: ["C#", ".NET", "WPF", "AI"],
    repoLink: "https://github.com/MihneaVNegru",
  },
];

export const experience = [
  {
    year: "Apr 2025 – Present",
    role: "Software Engineer (Cloud & AI)",
    company: "Amplified Software",
    bullets: [
      "AI Agent Orchestration: Architected an event-driven execution runtime using AWS Lambda and SQS to decouple LLM tasks; implemented custom retry logic and error handling to ensure 99.9% reliability of agent workflows.",
      "High-Throughput APIs (FastAPI): Engineered a high-performance perception engine using Python/FastAPI and Pydantic; utilized DynamoDB for optimized storage of transient session state and metadata.",
      "Workflow Automation: Orchestrated stateful workflows on AWS ECS using Node.js/TypeScript and Redis/BullMQ, managing distributed task processing for complex enterprise requirements.",
      "Observability & Governance: Developed a centralized LLM gateway with real-time CloudWatch monitoring and automated alerting, reducing MTTR for production API failures by over 40%."
    ]
  },
  {
    year: "Feb 2025 – Apr 2025",
    role: "Software Engineer",
    company: "Binary Tint",
    bullets: [
      "Engineered Python/Flask automation services for large-scale data processing; designed RESTful APIs for AI-driven classification tools handling high-volume communication records.",
      "Optimized data ingestion pipelines using DynamoDB for persistence, ensuring schema validation and strict data integrity during rapid scaling phases."
    ]
  },
  {
    year: "Sep 2023 – Feb 2025",
    role: "Software Engineer",
    company: "Goya-Systec",
    bullets: [
      "Leveraged Python for rapid prototyping of IoT modules and developed C-based firmware for hardware-to-cloud communication.",
      "Modernized legacy components into a Dockerized microservices model, building fullstack dashboards with React.js and Node.js."
    ]
  },
  {
    year: "Jun 2022 – Oct 2022",
    role: "Junior Programmer (Java)",
    company: "camLine",
    bullets: [
      "Developed Java Enterprise components for Manufacturing Execution Systems (MES), focusing on OOD and backend persistence.",
      "Optimized SQL database performance and integrated Jenkins CI/CD to accelerate release cycles."
    ]
  }
];

export const education = [
  {
    period: "2023 – 2025",
    degree: "Master in Engineering - Distributed Systems and Web Technologies",
    school: "Technical University Gheorghe Asachi Iași",
    note: "Thesis in Progress: High-Performance Distributed Computing",
    location: "Iași, Romania"
  },
  {
    period: "2019 – 2023",
    degree: "Bachelor in Engineering - Computer Engineering",
    school: "Technical University Gheorghe Asachi Iași",
    location: "Iași, Romania"
  }
];
