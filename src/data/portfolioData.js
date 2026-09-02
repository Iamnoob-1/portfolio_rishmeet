export const personalInfo = {
  name: "Rishmeet Singh",
  title: "Software Development Engineer & AI/ML Systems Developer",
  tagline: "Building High-Performance Distributed Systems, Custom RAG Engines & Machine Learning Analytics",
  location: "VIT Chennai, India",
  email: "rishmeetsingh2005@gmail.com",
  phone: "+91 8800595805",
  github: "https://github.com/rishmeetsingh2005", 
  linkedin: "https://linkedin.com/in/rishmeet-singh",
  leetcode: "https://leetcode.com/u/Iamnoob-1/",
  degree: "B.Tech in Computer Science & Engineering",
  institution: "Vellore Institute of Technology (VIT), Chennai",
  cgpa: "8.65 / 10.0",
  gradYear: "2023 – 2027",
  leetcodeProblems: 450,
  summary: `Final-year B.Tech Computer Science and Engineering student at VIT Chennai (CGPA 8.65) with a strong foundation in data structures, algorithms, and applied machine learning. Proficient in Python and the modern data/ML stack (NumPy, pandas, scikit-learn, SQL), with hands-on experience building and deploying ML classification models and Generative AI-integrated applications, including a custom RAG pipeline built without third-party frameworks. Solved 450+ DSA problems on LeetCode, reflecting strong analytical and problem-solving ability. Seeking SDE & Risk/Innovation Analytics roles to build scalable, production-grade software.`
};

export const metrics = [
  { label: "LeetCode DSA Solved", value: "450+", sub: "Arrays, Trees, Graphs, DP", color: "from-cyan-400 to-blue-500" },
  { label: "Academic CGPA", value: "8.65", sub: "VIT Chennai (B.Tech CSE)", color: "from-purple-400 to-pink-500" },
  { label: "Crypto-IDS Accuracy", value: "95%+", sub: "scikit-learn RandomForest", color: "from-emerald-400 to-teal-500" },
  { label: "WebSocket Latency", value: "~100ms", sub: "15-20 Concurrent Users", color: "from-amber-400 to-orange-500" },
];

export const projects = [
  {
    id: "crypto-ids",
    title: "Crypto-IDS: AI Intrusion & Anomaly Detection System",
    category: "AI / ML & Cyber Security",
    featured: true,
    tech: ["Python", "FastAPI", "scikit-learn", "Google Gemini AI", "WebSockets", "AES-256-GCM", "React"],
    year: "2026",
    summary: "Real-time AI network anomaly detection engine with 95%+ flow classification confidence, WebSocket streaming, and LLM-powered incident countermeasure generation.",
    metrics: [
      { key: "Classification Confidence", val: "95%+" },
      { key: "Flow Features Analyzed", val: "19 Features" },
      { key: "Aggregation Window", val: "5 Seconds" },
      { key: "Encryption Standard", val: "AES-256-GCM" }
    ],
    bulletPoints: [
      "Flagged high-risk network events with 95%+ classification confidence by training and deploying a scikit-learn RandomForest pipeline (StandardScaler + RandomForest) on 19 engineered flow features for real-time risk analysis.",
      "Cut manual analyst review effort on flagged events by integrating Google Gemini (Generative AI) to auto-generate technical risk summaries and countermeasure recommendations in real time.",
      "Built a continuous risk-monitoring data pipeline by engineering an async FastAPI backend with WebSocket streaming, aggregating raw flow data into 5-second windows for ongoing classification and alerting.",
      "Secured sensitive alert data end-to-end with AES-256-GCM encrypted SQL-based storage, and validated model behavior via a 5-scenario simulation framework covering common attack patterns."
    ],
    github: "https://github.com/rishmeet-singh/crypto-ids",
    liveUrl: "https://crypto-ids-demo.vercel.app", // Recruiter live link
    linkType: "github"
  },
  {
    id: "lexiguard",
    title: "LexiGuard: AI-Powered Legal Document Analyzer",
    category: "Generative AI & Vector Search",
    featured: true,
    tech: ["TypeScript", "Python", "Pinecone Vector DB", "Grok LLM", "Custom RAG Engine", "React"],
    year: "2026",
    summary: "Built a framework-less RAG pipeline from scratch for multi-page legal documents with clause-level chunking, Pinecone vector embeddings, and zero-hallucination Grok LLM synthesis.",
    metrics: [
      { key: "Framework Overhead", val: "0% (Built from scratch)" },
      { key: "Document Capacity", val: "30–50 Pages" },
      { key: "Chunking Strategy", val: "Clause-Level Semantic" },
      { key: "Vector Storage", val: "Pinecone DB" }
    ],
    bulletPoints: [
      "Enabled accurate semantic search over legal documents by engineering a custom Retrieval-Augmented Generation (RAG) pipeline from scratch (no LangChain) chunking, embedding generation, and retrieval via Pinecone.",
      "Improved retrieval relevance for legal-domain text by designing a clause-level chunking strategy (vs. fixed-size chunks), validated by spot-checking 10+ queries against expected source clauses.",
      "Scaled to documents up to 30–50 pages within Pinecone's free tier by building legal risk detection, selected-text summarization, and chatbot-based querying."
    ],
    github: "https://github.com/rishmeet-singh/lexiguard",
    liveUrl: "https://lexiguard-ai.vercel.app",
    linkType: "live"
  },
  {
    id: "realtime-chat",
    title: "High-Concurrency Real-Time Chat System",
    category: "Full-Stack & Distributed WebSockets",
    featured: true,
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Tailwind CSS"],
    year: "2026",
    summary: "Low-latency bidirectional chat application supporting multi-room messaging with ~100ms message delivery speed, persistent indexed MongoDB storage, and session auth.",
    metrics: [
      { key: "Average Message Latency", val: "~100ms" },
      { key: "History Retrieval Speed", val: "<150ms / 500+ msgs" },
      { key: "Tested Concurrency", val: "15–20 Users / Room" },
      { key: "Active Rooms", val: "3 Concurrent Rooms" }
    ],
    bulletPoints: [
      "Architected a real-time messaging system using WebSockets (Socket.io) for bidirectional communication, supporting 15–20 concurrent users in testing with ~100ms average message delivery latency.",
      "Designed a MongoDB schema for persistent chat storage and user authentication, indexing message history to keep retrieval under 150ms for 500+ messages per room.",
      "Supported 3 concurrent chat rooms with live typing indicators and session-based auth, tested locally end-to-end."
    ],
    github: "https://github.com/rishmeet-singh/realtime-chat",
    liveUrl: "https://realtime-chat-app-live.vercel.app",
    linkType: "live"
  },
  {
    id: "inshortly",
    title: "Inshortly: AI News Summarizer Platform",
    category: "AI Web Application",
    featured: false,
    tech: ["Python", "Flask", "React", "Gemini Pro API", "Render", "GitHub Pages"],
    year: "2025",
    summary: "Full-stack AI summarization tool compressing lengthy news articles into crisp technical digests with ~70-75% length reduction.",
    metrics: [
      { key: "Compression Ratio", val: "70–75% Length Reduction" },
      { key: "API Latency SLA", val: "2–4 Seconds" },
      { key: "Deployment", val: "Render + GitHub Pages" }
    ],
    bulletPoints: [
      "Built a full-stack application with a Flask REST API backend and React frontend, integrating the Gemini Pro API to generate article summaries with ~70–75% length reduction while preserving key information.",
      "Designed API request handling to manage external LLM latency, averaging 2–4 second response times per summarization request.",
      "Deployed backend on Render and frontend on GitHub Pages, manually validating output quality against 20–30 sample articles for factual consistency."
    ],
    github: "https://github.com/rishmeet-singh/inshortly",
    liveUrl: "https://rishmeet-singh.github.io/inshortly/",
    linkType: "live"
  }
];

export const skillCategories = [
  {
    name: "Languages & Core",
    icon: "Code2",
    skills: [
      { name: "Python", level: 92, tag: "Primary / ML / Backend" },
      { name: "C / C++", level: 88, tag: "DSA / Systems" },
      { name: "Java", level: 82, tag: "OOP / Enterprise" },
      { name: "JavaScript / TypeScript", level: 86, tag: "Full-Stack Web" },
      { name: "HTML5 / CSS3", level: 90, tag: "Responsive UI" },
      { name: "SQL", level: 85, tag: "Relational Queries" }
    ]
  },
  {
    name: "AI / ML & Vector Databases",
    icon: "Brain",
    skills: [
      { name: "Scikit-Learn", level: 90, tag: "Classification & Pipeline" },
      { name: "Custom RAG Frameworks", level: 95, tag: "No-LangChain Pipelines" },
      { name: "Pinecone Vector DB", level: 88, tag: "Semantic Embeddings" },
      { name: "Gemini Pro API / Grok LLM", level: 92, tag: "Generative AI" },
      { name: "Pandas & NumPy", level: 86, tag: "Data Analysis" },
      { name: "LangChain / LangGraph", level: 80, tag: "Agentic Workflows" }
    ]
  },
  {
    name: "Web & Backend Systems",
    icon: "Server",
    skills: [
      { name: "React.js", level: 90, tag: "Frontend UI Architecture" },
      { name: "Node.js & Express", level: 85, tag: "Async Backend APIs" },
      { name: "FastAPI & Flask", level: 88, tag: "Python Microservices" },
      { name: "Socket.io / WebSockets", level: 86, tag: "Real-time Low Latency" },
      { name: "RESTful APIs", level: 92, tag: "Clean API Contract Design" },
      { name: "MongoDB & MySQL", level: 85, tag: "Database Indexing & Auth" }
    ]
  },
  {
    name: "DevOps & Cloud Tools",
    icon: "Cloud",
    skills: [
      { name: "Git & GitHub", level: 90, tag: "PR Workflows & Versioning" },
      { name: "Docker", level: 80, tag: "Containerization" },
      { name: "AWS (EC2, S3)", level: 78, tag: "Cloud Infrastructure" },
      { name: "Firebase & Render", level: 85, tag: "Serverless & Hosting" },
      { name: "Postman & VS Code", level: 92, tag: "API Testing & Tooling" }
    ]
  }
];

export const dsaStats = {
  totalSolved: 450,
  platform: "LeetCode",
  topics: [
    { name: "Arrays & Strings", count: 120, pct: 95 },
    { name: "Trees & Graphs", count: 105, pct: 90 },
    { name: "Dynamic Programming", count: 85, pct: 85 },
    { name: "Hash Maps & Two Pointers", count: 80, pct: 92 },
    { name: "Linked Lists & Stack/Queue", count: 60, pct: 88 }
  ]
};

export const certifications = [
  {
    title: "IBM Generative AI Professional Certificate",
    issuer: "IBM",
    date: "July 2025",
    badge: "IBM Certified",
    desc: "Completed IBM's professional certification covering core concepts of Generative AI, including GANs and Large Language Models (LLMs)."
  },
  {
    title: "Oracle Generative AI Certification",
    issuer: "Oracle",
    date: "August 2025",
    badge: "Oracle Certified",
    desc: "Demonstrated understanding of Generative AI concepts, Large Language Models, and Oracle's GenAI ecosystem."
  }
];

export const cliCommands = {
  help: "Available commands: bio, skills, projects, dsa, experience, contact, clear, matrix, RAG",
  bio: "Rishmeet Singh | Final-Year B.Tech CSE @ VIT Chennai (CGPA 8.65) | SDE & AI/ML Engineer",
  skills: "Python, C/C++, Java, JS/TS, React, Node.js, FastAPI, scikit-learn, Pinecone, RAG, WebSockets, MongoDB, Docker",
  projects: "1. Crypto-IDS (FastAPI + scikit-learn + Gemini AI) | 2. LexiGuard (Custom RAG + Pinecone + Grok LLM) | 3. Real-Time Chat (Socket.io + MongoDB)",
  dsa: "450+ Problems Solved on LeetCode spanning Arrays, Trees, Graphs, DP, Hash Tables.",
  contact: "Email: rishmeetsingh2005@gmail.com | Phone: +91 8800595805 | VIT Chennai",
  matrix: "Entering 3D Matrix Visual Mode..."
};
