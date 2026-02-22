import type { PortfolioContext } from '../types/chat'

export const amanProfile: PortfolioContext = {
  id: 'aman-profile',
  title: 'Aman Profile',
  type: 'section',
  introMessage:
    'You can ask about Aman’s summary, skills, education, work experience, projects, AI/ML exposure, or contact details.',
  responses: {
    summary: `## Aman Sharma — Summary

Full-stack MERN developer and B.Tech Computer Science student with hands-on experience building production-ready web applications using React, Node.js, Express, and MongoDB.

### Core strengths
- REST API design and scalable frontend–backend integration
- Secure authentication with JWT and protected route design
- Geospatial workflows and map-driven product features
- Practical AI/ML foundations (regression, classification, neural networks)

A strong problem-solver with solid understanding of system design, databases, and modern JavaScript frameworks.`,
    skills: `## Skills

### Programming & Scripting
- Python, JavaScript (ES6+), C, C++, Java, HTML5, CSS3

### Web & Backend
- React.js, Node.js, Express.js
- RESTful API development, MVC architecture
- Full-stack web development, Redis

### Databases
- MongoDB, MySQL
- Schema design, CRUD operations, query optimization

### AI/ML
- Regression, classification, neural networks
- ML API integration and model deployment

### Tools
- Git, GitHub, VS Code, debugging, code reviews, deployment workflows`,
    education: `## Education

**Bachelor of Technology (B.Tech) in Computer Science Engineering**  
Amity University Jharkhand  
Expected graduation: **August 2028**`,
    experience: `## Work Experience

### Full Stack Developer Intern — Indux Technology
**August 2025 – September 2025**
- Contributed to client-facing full-stack apps with focus on scalable architecture and backend optimization using Node.js + TypeScript
- Built responsive frontend interfaces for smooth cross-device UX
- Designed backend services for both web and mobile support
- Implemented secure REST APIs with MongoDB and JWT authentication

### Web Developer Intern — Ta’seer, Dubai
**September 2025 – November 2025**
- Developed a business-focused full-stack application with responsive and animated UI
- Built API-based form submission workflow for secure inquiry handling
- Implemented RESTful backend integrations for platform data processing
- Contributed to a browser extension for creator data extraction and management

### Software Development Intern — Bluestock Fintech Pvt. Ltd.
**June 2025 – July 2025**
- Built an IPO tracking web app in React with real-time updates
- Developed backend services using Node.js + Express for IPO filtering and subscription tracking
- Implemented secure scalable APIs with MongoDB + JWT
- Contributed to ML-based stock fundamental analysis workflows and dashboard metric integration`,
    projects: `## Project List

### 1) goTogether
Student ride-sharing platform with map-based ride discovery, posting, booking lifecycle, and geospatial search.
Link: https://gotogetherv1.vercel.app/

### 2) GreenAtlas
FRA Decision Support System with role-based access, WebGIS mapping, dashboards, and OCR-assisted document processing.
Link: https://fraatlas.vercel.app/

### 3) More Projects
- ChatIt (Real-time chat app)
- GhostMedia (Social media platform)
- Tshare (Instant text/link sharing)
- Rent-It (Rental management application)

Ask for details on any one project and I’ll break it down.`,
    aiml: `## AI/ML Background

- Practical understanding of regression, classification, and neural networks
- Experience training and evaluating models with Python
- Worked on ML-assisted financial analysis use cases
- Integrated data-driven outputs into web dashboards and workflows`,
    contact: `## Contact

- **Name:** Aman Sharma
- **Location:** Ranchi, Jharkhand - 835222
- **Phone:** +91 8541029898
- **Email:** amansharmayt19@gmail.com
- **Portfolio:** www.amansharmaportfolio.me`
  },
  intentKeywords: {
    summary: ['summary', 'about aman', 'about you', 'profile', 'introduction'],
    skills: ['skill', 'tech stack', 'technology', 'tools', 'languages'],
    education: ['education', 'college', 'university', 'b.tech', 'degree'],
    experience: ['experience', 'internship', 'work', 'indux', 'ta’seer', 'bluestock'],
    projects: ['project', 'portfolio', 'list', 'greenatlas', 'gotogether', 'chatit'],
    aiml: ['ai', 'ml', 'machine learning', 'regression', 'classification', 'neural network'],
    contact: ['contact', 'email', 'phone', 'reach', 'location']
  },
  fallbackResponse:
    'You can ask about summary, skills, education, work experience, projects, AI/ML background, or contact details.'
}
