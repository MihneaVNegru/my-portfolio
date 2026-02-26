import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaJava, FaDocker, FaAws, FaJenkins } from 'react-icons/fa';
import { SiRedis, SiCplusplus, SiPostgresql, SiKubernetes, SiFastapi, SiFlask, SiAmazonaws, SiAmazondynamodb } from 'react-icons/si';

export const personalInfo = {
  name: "Mihnea Negru",
  title: "Fullstack Software Engineer | Cloud-Native Backend & AI Infrastructure",
  email: "mihnea.vladut.negru@gmail.com",
  summary: "Performance-driven Software Engineer and Distributed Systems Master's candidate. I architect complex, fullstack solutions by bridging high-throughput AI perception engines with scalable AWS serverless infrastructure. Specialist in Python (FastAPI), Node.js, and Event-Driven Orchestration.",
  bio: "Performance-driven Software Engineer and Distributed Systems Master's candidate. I architect complex, fullstack solutions by bridging high-throughput AI perception engines with scalable AWS serverless infrastructure. Specialist in Python (FastAPI), Node.js, and Event-Driven Orchestration.",
  phone: "+40 741 774 273",
  location: "Iași, Romania",
  github: "https://github.com/MihneaVNegru",
  linkedin: "https://linkedin.com/in/yourprofile",
};

export const skillGroups = [
  {
    category: "Cloud & Infrastructure",
    skills: [
      { name: "AWS (Lambda, SQS, ECS, DynamoDB)", icon: <FaAws className="text-orange-500" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
      { name: "Jenkins CI/CD", icon: <FaJenkins className="text-red-500" /> },
    ]
  },
  {
    category: "Backend & AI",
    skills: [
      { name: "Python (Expert)", icon: <FaPython className="text-blue-500" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-emerald-500" /> },
      { name: "Flask", icon: <SiFlask className="text-gray-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "C/C++", icon: <SiCplusplus className="text-blue-700" /> },
    ]
  },
  {
    category: "Fullstack & Data",
    skills: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      { name: "NoSQL Modeling", icon: <SiAmazondynamodb className="text-blue-600" /> },
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Production-Ready Python Backend Skeleton",
    description: "A robust, scalable backend foundation using Python and FastAPI. Designed for enterprise-grade performance with integrated modularity, ready for containerized deployment in AWS ECS or Kubernetes.",
    tags: ["Python", "FastAPI", "AWS ECS", "Docker", "Architecture"],
    repoLink: "https://github.com/MihneaVNegru/python-skeleton-backend",
    featured: true
  },
  {
    id: 2,
    title: "AI Task Orchestrator",
    description: "Architected an event-driven system using AWS Lambda and SQS to decouple AI tasks from the API, ensuring horizontal scaling.",
    tags: ["AWS Lambda", "SQS", "Event-Driven", "AI Orchestration"],
    repoLink: "https://github.com/MihneaVNegru",
  },
  {
    id: 3,
    title: "High-Throughput AI Engine (Amie)",
    description: "Engineered a perception engine in Python with DynamoDB optimization for session metadata and transient state.",
    tags: ["Python", "DynamoDB", "AI Engine", "Performance"],
    repoLink: "https://github.com/MihneaVNegru",
  },
  {
    id: 4,
    title: "GDPR Data Pipeline",
    description: "Developed a Python-based compliance engine to detect PII and implement automated data-masking.",
    tags: ["Python", "Data Pipeline", "GDPR", "Privacy"],
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

