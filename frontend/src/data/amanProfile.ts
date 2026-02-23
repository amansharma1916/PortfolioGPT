import type { PortfolioContext } from '../types/chat'

export const amanProfile: PortfolioContext = {
  id: 'aman-profile',
  title: 'Aman Profile',
  type: 'section',
  introMessage:
    'You can ask about Aman’s summary, skills, education, work experience, projects, AI/ML exposure, or contact details.',
  responses: {
    summary: `## Aman Sharma — Summary

Full-stack MERN developer and B.Tech Computer Science student with hands-on experience building **production-ready web applications** using **React, Node.js, Express, and MongoDB**.

Experienced in **REST API design**, **secure JWT-based authentication**, **geospatial workflows**, and **scalable frontend–backend integration**. Alongside full-stack development, I have a solid foundation in **AI/ML concepts** including regression, classification, and neural networks, with practical experience training models in Python and integrating data-driven intelligence into web applications.

A strong problem-solver with good understanding of **system design, databases, and modern JavaScript frameworks**, seeking opportunities to build **impactful and intelligent software products**.`,

    skills: `## Skills

### Programming & Scripting
- Python, JavaScript (ES6+), C, C++, Java, HTML5, CSS3

### Web & Backend
- React.js, Node.js, Express.js
- RESTful API design, MVC architecture
- Full-stack web development, Redis
- Secure authentication (JWT), protected routes

### Databases & Data
- MongoDB, MySQL
- Schema design, CRUD operations, query optimization

### AI / ML
- Regression, classification, neural networks
- ML model training & evaluation (Python)
- ML API integration and deployment

### Tools & Engineering
- Git, GitHub, VS Code
- Debugging, code reviews, deployment workflows
- Data structures & algorithms, performance optimization`,

    education: `## Education

**Bachelor of Technology (B.Tech) in Computer Science Engineering**  
Amity University Jharkhand  
**Expected Graduation:** August 2028`,

    experience: `## Work Experience

### Full Stack Developer Intern — Indux Technology  
**August 2025 – September 2025**
- Contributed to multiple client-facing full-stack applications with focus on **scalable architecture** and **backend optimization** using Node.js and TypeScript
- Designed and implemented robust backend services supporting both web and mobile clients
- Built secure REST APIs with MongoDB and JWT-based authentication
- Developed responsive frontend interfaces ensuring cross-device compatibility

### Web Developer Intern — Ta’seer, Dubai  
**September 2025 – November 2025**
- Developed a business-focused full-stack web application with fully responsive and animated UI
- Implemented API-based form submission workflows for secure client communication
- Built RESTful backend services for data processing and platform integrations
- Contributed to a browser extension for extracting and managing content creator data
- Collaborated closely with stakeholders to deliver production-ready solutions

### Software Development Intern — Bluestock Fintech Pvt. Ltd.  
**June 2025 – July 2025**
- Built a responsive IPO tracking web application using React.js with real-time updates
- Developed backend services using Node.js and Express for IPO filtering and subscription tracking
- Designed secure, scalable REST APIs using MongoDB and JWT authentication
- Contributed to ML-based stock fundamental analysis workflows and dashboard integrations (P/E ratio, ROI, etc.)`,

    projects: `## Projects

### goTogether — Student Ride-Sharing Platform
- Full-stack MERN + TypeScript platform with map-based ride discovery and booking
- Implemented geospatial search using MongoDB GeoJSON & 2dsphere indexes
- Integrated MapLibre GL, OpenStreetMap, and OpenRouteService for routing and distance calculation
- Designed complete booking lifecycle (pending → confirmed → completed → cancelled)
Link: https://gotogetherv1.vercel.app/

### GreenAtlas (FRA Atlas DSS)
- MERN-based Decision Support System for Forest Rights Act (FRA) implementation
- Role-based access for Super Admin, State Admin, District Admin, and Public Users
- Integrated WebGIS mapping using Leaflet for spatial analysis and visualization
- Built analytics dashboards and OCR-assisted document processing
Link: https://fraatlas.vercel.app/

### More Projects
- ChatIt — Real-time chat application
- GhostMedia — Modern social media platform
- TShare — Instant text & link sharing platform
- Rent-It — Rental management application

Ask for details on any project and I’ll break it down.`,

    aiml: `## AI / ML Background

- Strong foundation in regression, classification, and neural networks
- Hands-on experience training and evaluating ML models using Python
- Worked on ML-assisted financial analysis and stock fundamental evaluation
- Integrated ML outputs into web dashboards and backend workflows`,

    contact: `## Contact

- **Name:** Aman Sharma
- **Location:** Ranchi, Jharkhand – 835222
- **Phone:** +91 8541029898
- **Email:** amansharmayt19@gmail.com
- **GitHub:** https://github.com/amansharma1916
- **Portfolio:** https://amansharma.tech`,

    resume: `## Resume

You can view or download my resume here:

👉 **[View Resume](/resume.pdf)**

The resume includes:
- Full professional summary
- Technical skills and expertise
- Work experience and internships
- Education background
- Project portfolio
- Certifications and achievements`,
  },

  intentKeywords: {
    summary: [
      'summary',
      'about aman',
      'about you',
      'about',
      'profile',
      'introduction',
      'who are you',
      'who is aman',
      'who',
    ],
    resume: [
      'resume',
      'view resume',
      'show resume',
      'get resume',
      'your resume',
      'cv',
      'download resume',
      'resume link',
    ],
    skills: [
      'skill',
      'skills',
      'tech stack',
      'technology',
      'tools',
      'view skills',
      'show skills',
      'what skills',
      'your skills',
      'technologies',
      'programming',
      'languages',
    ],
    education: [
      'education',
      'college',
      'university',
      'b.tech',
      'degree',
      'study',
      'studying',
      'academic',
      'qualification',
      'school',
    ],
    experience: [
      'experience',
      'internship',
      'work',
      'indux',
      'taseer',
      'bluestock',
      'job',
      'intern',
      'work experience',
      'professional',
    ],
    projects: [
      'project',
      'projects',
      'portfolio',
      'greenatlas',
      'gotogether',
      'chatit',
      'view projects',
      'show projects',
      'your projects',
      'list projects',
      'what projects',
    ],
    aiml: [
      'ai',
      'ml',
      'machine learning',
      'regression',
      'classification',
      'neural network',
      'artificial intelligence',
    ],
    contact: ['contact', 'email', 'phone', 'reach', 'location', 'how to contact', 'get in touch'],
  },

  fallbackResponse:
    'You can ask about summary, skills, education, work experience, projects, AI/ML background, or contact details.',
}