import {
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaAws, FaDatabase, FaServer, FaCode,
  FaLock, FaShieldAlt, FaNetworkWired, FaProjectDiagram, FaCodeBranch, FaCheckCircle,
} from 'react-icons/fa';
import {
  SiRedis, SiCplusplus, SiPostgresql, SiKubernetes, SiFastapi, SiFlask, SiAmazondynamodb,
  SiTypescript, SiGo, SiNestjs, SiNextdotjs, SiSqlite, SiLinux,
} from 'react-icons/si';

export const personalInfo = {
  name: "Mihnea Negru",
  title: "Software Engineer — Distributed Systems, Cloud & Backend",
  email: "mihnea.vladut.negru@gmail.com",
  summary: "Software Engineer specializing in distributed backend systems, cloud-native architecture, and event-driven applications. Experienced with TypeScript/Node.js, Python/FastAPI, AWS, Docker, Kubernetes, PostgreSQL, DynamoDB, and Redis. Professional experience spans AI, healthcare, warehouse automation, IoT, and manufacturing, with work across backend services, web applications, asynchronous workflows, industrial integrations, authentication, and observability.",
  bio: "I build distributed backend systems, cloud-native architectures and event-driven applications, from AI products and healthcare platforms to warehouse automation and manufacturing software.",
  location: "Iași, Romania",
  github: "https://github.com/MihneaVNegru",
  // Add your real LinkedIn URL here (e.g. "https://www.linkedin.com/in/<handle>").
  // While empty, the LinkedIn icon is hidden in the footer.
  linkedin: "",
};

export const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      { name: "JavaScript, SQL", icon: <FaCode className="text-yellow-400" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "Go", icon: <SiGo className="text-cyan-400" /> },
      { name: "C/C++", icon: <SiCplusplus className="text-blue-700" /> },
    ]
  },
  {
    category: "Backend & Architecture",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "NestJS, Express", icon: <SiNestjs className="text-red-500" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-emerald-500" /> },
      { name: "Flask", icon: <SiFlask className="text-gray-400" /> },
      { name: "REST APIs, Microservices", icon: <FaServer className="text-gray-400" /> },
      { name: "Distributed Systems, Event-Driven Architecture", icon: <FaProjectDiagram className="text-purple-400" /> },
      { name: "RPC, Asynchronous Workflows", icon: <FaNetworkWired className="text-blue-400" /> },
    ]
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      { name: "AWS (ECS, Lambda, S3, IAM, CloudWatch)", icon: <FaAws className="text-orange-500" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
      { name: "Linux", icon: <SiLinux className="text-yellow-400" /> },
      { name: "CI/CD", icon: <FaCodeBranch className="text-gray-400" /> },
    ]
  },
  {
    category: "Data",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "DynamoDB", icon: <SiAmazondynamodb className="text-blue-600" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      { name: "SQLite", icon: <SiSqlite className="text-sky-400" /> },
    ]
  },
  {
    category: "Messaging & Integration",
    skills: [
      { name: "BullMQ", icon: <FaDatabase className="text-red-400" /> },
      { name: "NATS", icon: <FaNetworkWired className="text-green-400" /> },
      { name: "AMQP, MQTT", icon: <FaNetworkWired className="text-orange-400" /> },
      { name: "IoT / Industrial Integration", icon: <FaServer className="text-gray-400" /> },
    ]
  },
  {
    category: "Frontend, Security & Testing",
    skills: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" /> },
      { name: "OAuth2, Keycloak, JWT", icon: <FaLock className="text-yellow-500" /> },
      { name: "mTLS, HMAC", icon: <FaShieldAlt className="text-emerald-500" /> },
      { name: "pytest, Unit/Integration Testing", icon: <FaCheckCircle className="text-green-500" /> },
    ]
  }
];

// repoLink is optional: the source link is hidden when it is missing.
export const projects = [
  {
    id: 1,
    title: "nexus-rpc",
    description: "A polyglot binary RPC protocol for microservices and AI workloads, using multiplexed streams over a fixed 44-byte frame. Capability-based authentication with HMAC tickets, payloads encrypted with ChaCha20-Poly1305/AES-GCM, and mTLS without a service-mesh sidecar. A schema compiler generates service stubs for Python, Go, and TypeScript, with W3C trace IDs and raw float32 embedding transport.",
    tags: ["Python", "Go", "TypeScript", "RPC", "mTLS"],
    featured: true
  },
  {
    id: 2,
    title: "data-collector",
    description: "A domain crawler and data-collection service with configurable crawl depth, obfuscated-address handling, and JavaScript rendering through Playwright. A FastAPI job backend and web interface persist results in SQLite and support CSV export, while respecting robots.txt.",
    tags: ["Python", "FastAPI", "Beautiful Soup", "Playwright"],
  },
  {
    id: 3,
    title: "python-skeleton-backend",
    description: "A production-oriented FastAPI backend template featuring JWT authentication, SQLAlchemy, Alembic migrations, and a layered router/service/model/schema architecture. Includes pytest, uv-based dependency management, and Docker Compose for reproducible local and containerized development.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "Docker"],
    repoLink: "https://github.com/MihneaVNegru/python-skeleton-backend",
  },
];

export const experience = [
  {
    year: "Apr 2025 – Present",
    role: "Software Engineer (Cloud & AI)",
    company: "Amplified Software",
    bullets: [
      "Developed backend infrastructure for an AI-powered personal assistant that generates personalized morning briefings from news, emails, Slack messages, and other user information.",
      "Designed event-driven workflows for RSS ingestion, article clustering, story generation, and personalization based on individual user preferences.",
      "Developed asynchronous, stateful services using Node.js/TypeScript, NestJS, Redis/BullMQ, and AWS ECS, coordinating multi-stage processing with retry and failure handling.",
      "Integrated ElevenLabs text-to-speech and implemented processing required to synchronize generated narration with the corresponding briefing text.",
      "Developed backend functionality for a production healthcare platform, including a health-product recommendation engine, end-to-end checkout and payment flows using Stripe, appointment and user workflows, and push notifications.",
      "Designed and maintained APIs supporting the mobile application, working closely with the iOS/mobile team to integrate backend services and deliver end-to-end user workflows.",
      "Implemented IAM, Keycloak/OAuth2, and CloudWatch-based security and observability, contributing to a 40% reduction in mean time to recovery for production failures."
    ]
  },
  {
    year: "Feb 2025 – Apr 2025",
    role: "Software Engineer",
    company: "Binary Tint",
    bullets: [
      "Developed Python and Node.js backend microservices for processing communication records and exposing REST APIs for downstream services.",
      "Designed data ingestion and persistence workflows using PostgreSQL and DynamoDB, implementing schema validation, data integrity controls, and query optimization."
    ]
  },
  {
    year: "Sep 2023 – Feb 2025",
    role: "Software Engineer",
    company: "Goya-Systec",
    bullets: [
      "Developed the web shop and order-management functionality for Storingo, an automation platform that transmitted customer orders to a robotic warehouse environment for fulfillment.",
      "Developed and maintained two frontend applications using React and Next.js, integrating user-facing workflows with backend services and warehouse automation processes.",
      "Developed backend services connecting order workflows to industrial automation systems, including software supporting Dematic Multishuttle warehouse logistics.",
      "Developed machine and hardware communication components using event-driven protocols including MQTT and AMQP, with additional C development for embedded/industrial environments."
    ]
  },
  {
    year: "Jun 2022 – Oct 2022",
    role: "Junior Programmer (Java Development)",
    company: "camLine",
    bullets: [
      "Developed Java backend components for camLine LineWorks, enterprise manufacturing software used to monitor and manage production processes.",
      "Worked on functionality related to equipment monitoring, production data, manufacturing workflows, and traceability in industrial production environments.",
      "Implemented backend functionality involving object-oriented design, multithreading, PostgreSQL, and SQL persistence, including database query profiling and optimization.",
      "Contributed to CI/CD pipelines for automated testing and deployment of enterprise manufacturing software."
    ]
  }
];

export const education = [
  {
    period: "2023 – 2025",
    degree: "Master in Engineering - Distributed Systems and Web Technologies",
    school: "Technical University Gheorghe Asachi Iași",
    note: "Coursework completed; thesis and final presentation pending.",
    location: "Iași, Romania"
  },
  {
    period: "2019 – 2023",
    degree: "Bachelor in Engineering - Computer Engineering",
    school: "Technical University Gheorghe Asachi Iași",
    location: "Iași, Romania"
  }
];
