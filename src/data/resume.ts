export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  skills: string[];
  featured?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Fintech & Banking" | "Enterprise & Cloud" | "Real-Time Systems" | "DevOps & Tooling";
  description: string;
  longDescription: string;
  techStack: string[];
  metrics: string[];
  status: "Completed" | "Production" | "In Development" | "Architecture Proof";
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level: number; highlight?: string }[];
}

export const PERSONAL_DATA = {
  name: "Md. Elias Kanchon",
  displayTitle: "Elias Hridoy",
  role: "Senior Software Engineer & System Architect",
  tagline: "Enterprise Reliability Meets Cutting-Edge Precision",
  summary:
    "Passionate Senior Software Engineer with over 6+ years of experience building high-scale distributed systems, enterprise ERPs, SWIFT banking integrations, and real-time event platforms. Specialist in .NET Core, Angular, Microservices, SignalR, and Azure DevOps.",
  email: "eliashridoy.cse@gmail.com",
  linkedin: "https://www.linkedin.com/in/meeliashridoy",
  github: "https://github.com/meeliashridoy", // user customizable GitHub Pages destination
  location: "Dhaka / Chattogram, Bangladesh",
  yearsExperience: "6+",
  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Enterprise Apps Built", value: "15+" },
    { label: "Deployment Speedup", value: "40%" },
    { label: "Transactions/Day Handled", value: "1,000+" },
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    id: "selise",
    role: "Senior Software Engineer",
    company: "SELISE Group",
    period: "Oct 2025 - Present",
    location: "Dhaka, Bangladesh",
    featured: true,
    highlights: [
      "Architecting enterprise-grade microservices and multi-tenant web applications.",
      "Leading technical decisions for high-volume transactions and system resiliency.",
      "Collaborating with cross-functional global teams on scalable cloud architecture."
    ],
    skills: [".NET Core", "Angular", "Azure DevOps", "Microservices", "Docker", "SQL Server"]
  },
  {
    id: "patricius-sr",
    role: "Senior Software Engineer",
    company: "Patricius IT Ltd.",
    period: "May 2024 - Sep 2025",
    location: "Chattogram, Bangladesh",
    featured: true,
    highlights: [
      "Designed and deployed automated CI/CD pipelines in Azure DevOps, reducing deployment time for .NET and Angular apps by 40% and eliminating manual release errors.",
      "Integrated SignalR to enable real-time notifications, improving message delivery speed by 35% and enhancing user engagement.",
      "Implemented a monitoring framework with OpenTelemetry, Prometheus, and Grafana, enabling 24/7 system observability and reducing MTTR by 25%.",
      "Analyzed and translated 8+ business requirement documents (BRDs) into detailed Agile user stories."
    ],
    skills: ["Azure DevOps", "SignalR", "OpenTelemetry", "Grafana", "Prometheus", "2FA", "Role Management"]
  },
  {
    id: "patricius-se",
    role: "Software Engineer",
    company: "Patricius IT Ltd.",
    period: "Feb 2023 - Apr 2024",
    location: "Chattogram, Bangladesh",
    highlights: [
      "Integrated Global Distribution System (GDS) and MFS APIs, enabling real-time booking for 1,000+ daily travel searches and secure payments for 75+ monthly transactions.",
      "Built two-factor authentication (2FA) and role management systems, strengthening security protocols and reducing unauthorized access attempts by 30%.",
      "Configured Azure Blob Storage integration with .NET apps, optimizing static file delivery and improving load performance by 35%."
    ],
    skills: ["GDS Integration", "MFS APIs", "Azure Blob Storage", ".NET Core", "REST & SOAP APIs"]
  },
  {
    id: "leads",
    role: "Software Engineer",
    company: "LEADS Corporation Limited",
    period: "Jan 2022 - Feb 2023",
    location: "Dhaka, Bangladesh",
    featured: true,
    highlights: [
      "Led SWIFT message format migration from MT to MX (ISO20022) for core banking platforms, ensuring 100% compliance with international standards.",
      "Integrated automated message generation processes, improving processing accuracy for 400+ daily financial transactions.",
      "Developed a Selenium-Python testing framework, reducing manual QA time by 40% while increasing coverage.",
      "Conducted client training sessions for 50+ users, driving smooth adoption of upgraded features."
    ],
    skills: ["SWIFT (ISO20022)", "Core Banking", "Selenium", "Python", "MSSQL", "Automated QA"]
  },
  {
    id: "databiz",
    role: "Software Engineer",
    company: "Databiz Software Limited",
    period: "Apr 2021 - Jan 2022",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Refactored tax processing algorithms in ERP software for HSCode-specific VAT scenarios, boosting calculation accuracy.",
      "Developed custom reports for POS, Sales, and Invoicing modules using Crystal Reports to enhance business intelligence.",
      "Designed prototype features for Transportation Module under Agile methodology.",
      "Optimized ERP database performance via indexing and query tuning, reducing report generation time by 40%."
    ],
    skills: ["ERP Systems", "Database Indexing", "Query Tuning", "Crystal Reports", "HSCode VAT"]
  },
  {
    id: "brotechit",
    role: "Junior Software Engineer",
    company: "BroTechIt",
    period: "Apr 2019 - Mar 2021",
    location: "Chittagong, Bangladesh",
    highlights: [
      "Integrated SSLCommerz payment gateway, enabling secure online payments for 200+ monthly transactions.",
      "Improved database query efficiency, reducing API response times by up to 25% for high-traffic e-commerce operations.",
      "Engineered secure authentication workflows with token-based access in .NET and MSSQL."
    ],
    skills: ["SSLCommerz", "Payment Gateway", "JWT Auth", "MSSQL", "C#", "ASP.NET"]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: "B.Sc in Computer Science and Engineering",
    institution: "International Islamic University Chittagong (IIUC)",
    period: "2016 - 2020",
    details: "Specialized in Software Engineering, Database Systems, and Algorithms."
  },
  {
    degree: "Higher Secondary Certificate (HSC) - Science",
    institution: "Chittagong Model School and College",
    period: "2013 - 2015"
  },
  {
    degree: "Secondary School Certificate (SSC) - Science",
    institution: "Chittagong Police Institution",
    period: "2010 - 2013"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Backend & Core",
    iconName: "Server",
    skills: [
      { name: "C# / .NET Core", level: 95, highlight: "Primary Stack" },
      { name: "REST & SOAP APIs", level: 92, highlight: "Enterprise Specs" },
      { name: "SignalR (Real-Time)", level: 88, highlight: "High Concurrency" },
      { name: "Microservices Architecture", level: 85, highlight: "Scalable Systems" },
    ]
  },
  {
    category: "Frontend & UI Engineering",
    iconName: "Layout",
    skills: [
      { name: "Angular", level: 90, highlight: "RxJS, NgRx, Enterprise Forms" },
      { name: "TypeScript / JavaScript", level: 92, highlight: "Type-Safe Modern Web" },
      { name: "Tailwind CSS / HTML5", level: 88, highlight: "Responsive & Modern Aesthetics" },
      { name: "Next.js / React Basics", level: 82, highlight: "SSR & Static Exports" }
    ]
  },
  {
    category: "Databases & Data Management",
    iconName: "Database",
    skills: [
      { name: "Microsoft SQL Server (MSSQL)", level: 92, highlight: "Indexing & Query Tuning" },
      { name: "Oracle Database", level: 85, highlight: "PL/SQL Procedures" },
      { name: "Database Optimization", level: 90, highlight: "40% Query Speedup" }
    ]
  },
  {
    category: "DevOps, Cloud & Monitoring",
    iconName: "Cloud",
    skills: [
      { name: "Azure DevOps & CI/CD", level: 90, highlight: "Automated Release Pipelines" },
      { name: "Docker & Containerization", level: 85, highlight: "Isolated Deployments" },
      { name: "OpenTelemetry / Grafana / Prometheus", level: 88, highlight: "24/7 Observability & Low MTTR" },
      { name: "Azure Blob Storage", level: 86, highlight: "Cloud Asset CDN" }
    ]
  },
  {
    category: "Domain Expertise & Protocols",
    iconName: "ShieldCheck",
    skills: [
      { name: "SWIFT ISO20022 Migration (MT to MX)", level: 95, highlight: "Core Banking Standards" },
      { name: "Fintech & Payment Gateways (SSLCommerz, MFS)", level: 90, highlight: "Secure Transactions" },
      { name: "Global Distribution Systems (GDS)", level: 88, highlight: "Travel Tech Engine" },
      { name: "Security (2FA, OAuth, Token Auth, Role Approval)", level: 92, highlight: "Zero-Trust Principles" }
    ]
  }
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "swift-iso20022-engine",
    title: "Enterprise Core Banking SWIFT ISO20022 Gateway",
    category: "Fintech & Banking",
    description: "Mission-critical financial message translation & compliance platform for SWIFT MT to MX format migration.",
    longDescription: "Architected a compliant message processing engine during my tenure at LEADS Corp. Managed over 400+ daily high-value transactions with 100% adherence to international financial standards and zero packet loss.",
    techStack: [".NET Core", "MSSQL", "XML/MX Schema", "ISO20022", "Automated Validation"],
    metrics: ["100% Standard Compliance", "400+ Daily Financial Messages", "40% Reduced QA Overhead"],
    status: "Production",
    featured: true,
    githubUrl: "https://github.com/meeliashridoy",
    demoUrl: "#"
  },
  {
    id: "azure-telemetry-observability",
    title: "Real-time Telemetry & Microservices Observability Dashboard",
    category: "DevOps & Tooling",
    description: "End-to-end distributed system monitoring stack using OpenTelemetry, Grafana, and Prometheus.",
    longDescription: "Built a centralized telemetry pipeline at Patricius IT to aggregate metrics, traces, and system health across multi-region services. Decreased Mean Time To Resolution (MTTR) by 25%.",
    techStack: ["OpenTelemetry", "Prometheus", "Grafana", "Azure DevOps", "Docker"],
    metrics: ["25% MTTR Reduction", "24/7 Live Alerting", "40% Faster CI/CD Pipeline"],
    status: "Production",
    featured: true,
    githubUrl: "https://github.com/meeliashridoy",
    demoUrl: "#"
  },
  {
    id: "signalr-live-dispatch",
    title: "High-Throughput SignalR Real-Time Notification Matrix",
    category: "Real-Time Systems",
    description: "Low-latency WebSocket notification broker handling high-concurrency event broadcasts and status updates.",
    longDescription: "Engineered real-time notification subsystem delivering immediate push alerts to concurrent users. Improved message delivery speed by 35% and enhanced active user retention.",
    techStack: ["C#", ".NET Core", "SignalR", "Angular", "WebSockets"],
    metrics: ["35% Delivery Speedup", "Sub-50ms Latency", "High Concurrency"],
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/meeliashridoy",
    demoUrl: "#"
  },
  {
    id: "gds-travel-aggregator",
    title: "Global Distribution System (GDS) & MFS Travel Engine",
    category: "Enterprise & Cloud",
    description: "Unified travel search aggregator integrating international GDS APIs and Mobile Financial Services.",
    longDescription: "Constructed multi-provider flight search engine handling 1,000+ daily searches and automated instant booking workflows with two-factor authentication and Azure Blob caching.",
    techStack: ["Angular", ".NET Core", "GDS REST APIs", "Azure Blob Storage", "2FA Auth"],
    metrics: ["1,000+ Daily Searches", "35% Faster Asset Delivery", "30% Fewer Unauthorized Attempts"],
    status: "Production",
    featured: true,
    githubUrl: "https://github.com/meeliashridoy",
    demoUrl: "#"
  },
  {
    id: "erp-tax-engine",
    title: "ERP Tax & HSCode VAT Calculation Subsystem",
    category: "Enterprise & Cloud",
    description: "High-precision tax engine supporting complex multi-tier HSCode VAT scenarios and custom financial reporting.",
    longDescription: "Refactored legacy calculation module in core ERP platform, introducing dynamic formula parsers, indexed database execution, and custom Crystal Reports integration.",
    techStack: ["C#", "SQL Indexing", "Query Optimization", "Crystal Reports"],
    metrics: ["40% Faster Report Generation", "100% Tax Accuracy", "Multi-Tenant Ready"],
    status: "Completed",
    featured: false,
    githubUrl: "https://github.com/meeliashridoy",
    demoUrl: "#"
  }
];
