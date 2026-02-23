import type { PortfolioContext } from '../../types/chat'

export type ProjectResponseMap = {
  [key: string]: string
}

export interface ProjectChatData {
  id: string
  title: string
  shortDescription: string
  introMessage: string
  followUpSuggestions: string[]
  responses: ProjectResponseMap
  links: {
    github: string
    liveDemo: string
  }
}

export const fraAtlasDss: ProjectChatData = {
  id: 'fra-atlas-dss',
  title: 'FRA Atlas DSS — WebGIS Decision Support System',

  shortDescription:
    'An AI-assisted, WebGIS-based Decision Support System for Forest Rights Act workflows, covering claims management, public applications, spatial analysis, and scheme recommendations.',

  introMessage: `
**FRA Atlas DSS** is a full-stack, WebGIS-enabled Decision Support System designed to digitize and manage **Forest Rights Act (FRA)** workflows.

The system combines **role-based administration**, **claims lifecycle management**, **map-based visualization**, and **DSS recommendations** to support governance, analytics, and public access.

Ask me about:
• FRA claim lifecycle  
• role-based admin system  
• WebGIS & spatial analysis  
• DSS recommendations  
• PDF-assisted claim entry  
• scalability & governance design
`,

  followUpSuggestions: [
    'Explain the FRA claim lifecycle',
    'How does the role-based admin system work?',
    'How is WebGIS used in this project?',
    'How do DSS recommendations work?',
    'How is PDF-assisted claim entry handled?',
    'How would this scale at state or national level?',
    'View GitHub repository',
    'Open live demo',
  ],

  responses: {
    summary: `
🗺️ FRA Atlas DSS — Project Details

FRA Atlas DSS is a WebGIS-based Decision Support System built to support **Forest Rights Act (FRA)** implementation through structured workflows, spatial visualization, and analytics.

It enables administrators at multiple levels to manage claims, allows citizens to submit and track applications, and provides map-driven insights and scheme recommendations.

🔹 What problem does it solve?

FRA workflows are traditionally paper-heavy, fragmented, and difficult to analyze spatially.
This system centralizes claims, applications, maps, and recommendations into a single digital platform.

🔹 Core Capabilities

🧑‍💼 Hierarchical admin system (superadmin, state, district)  
📄 End-to-end FRA claim lifecycle management  
🧭 WebGIS map visualization with spatial overlays  
📊 DSS analytics and scheme recommendations  
📥 Public application submission & status tracking  
📄 PDF-assisted claim data extraction  

🔹 Tech Stack

Frontend: React 19, Vite, Leaflet, Axios, Nivo/Recharts  
Backend: Node.js, Express, MongoDB, JWT  
Maps & GIS: Leaflet, spatial APIs  
Security: JWT auth, role-based access, middleware validation  

This project demonstrates real-world governance system design.
`,

    fullDetails: `
# 🗺️ FRA Atlas DSS — Forest Rights Act Decision Support System

An AI-assisted, WebGIS-based platform for managing Forest Rights Act workflows.

---

## 🎯 Overview

FRA Atlas DSS consists of two major components:

- **Frontend:** React + Vite web application with public and protected admin modules
- **Backend:** Express + MongoDB API with JWT authentication, role checks, and DSS logic

The system is designed for **multi-level governance**, **data transparency**, and **spatial decision-making**.

---

## ✨ Core Features

### 🧑‍💼 Role-Based Administration
- Superadmin, State Admin, District Admin
- Controlled admin creation and management
- Role-guarded routes and APIs

### 📄 FRA Claim Lifecycle
- Create, update, review, approve/reject claims
- Status tracking and filtering
- Claim deletion and updates

### 🌍 Public Application Flow
- Public submission of FRA applications
- Status check via reference number
- Conversion of public applications into formal claims

### 🧭 WebGIS & Spatial Analysis
- Map-based visualization of claims
- Scheme overlay and coverage analysis
- Spatial statistics and analytics endpoints

### 🧠 DSS Recommendations
- Scheme recommendations for claims and applications
- Recommendation review and updates
- Analytics dashboards for DSS insights

### 📄 PDF-Assisted Claim Entry
- Upload claim PDFs
- Extract text to assist structured data entry

---

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite 7
- React Router
- Leaflet / React Leaflet
- Axios
- Nivo / Recharts

### Backend
- Node.js
- Express 5
- MongoDB + Mongoose
- JWT authentication
- Multer for file uploads
- Security middleware (Helmet, CORS, rate limiting)

---

## 🌐 Deployment & Execution

- Local dev via npm scripts
- Dockerized setup with docker-compose
- Separate frontend (Nginx) and backend services
- Environment-driven configuration

This architecture supports scalable government-grade deployments.
`,

    lifecycle: `
The FRA claim lifecycle is managed through structured backend workflows.

**Lifecycle stages include:**
- Claim creation
- Review and updates
- Status transitions
- Approval / rejection
- Analytics and reporting

Each transition is validated via role-based middleware to ensure administrative integrity.
`,

    roles: `
The system implements a hierarchical admin model:

**Roles:**
- Superadmin
- State Admin
- District Admin

**Capabilities:**
- Superadmin manages schemes and higher-level admins
- State Admin oversees district-level operations
- District Admin manages claims and applications

APIs and routes are strictly protected using JWT and role checks.
`,

    webgis: `
WebGIS functionality is a core part of the system.

**Capabilities include:**
- Spatial visualization of FRA claims
- Scheme overlay and coverage analysis
- Map-based statistics endpoints

Leaflet is used on the frontend, while backend APIs provide spatial data and analytics.
`,

    dss: `
The Decision Support System (DSS) provides scheme recommendations.

**How it works:**
- Claims and applications are evaluated against scheme criteria
- Recommendation endpoints generate and store suggestions
- Admins can review, update, and approve recommendations

This supports data-driven policy and scheme allocation decisions.
`,

    pdf: `
PDF-assisted claim entry simplifies data ingestion.

**Flow:**
1. Admin uploads claim-related PDF
2. Backend extracts text from the document
3. Extracted text assists structured form entry

This reduces manual data entry and improves accuracy.
`,

    scale: `
The system is designed for large-scale deployment.

**Scalability considerations:**
- Stateless JWT-based authentication
- Modular APIs
- Docker-based deployment
- MongoDB scalability for large datasets
- Frontend optimized for data-heavy dashboards

The architecture can support state or national-level FRA operations.
`,

    github: `
View the source code on GitHub:

👉 https://github.com/amansharma1916/FRA-Atlas-DSS
`,

    demo: `
The live demo is available here:

👉 https://fraatlas.vercel.app/
`,
  },

  links: {
    github: 'https://github.com/amansharma1916/FRA-Atlas-DSS',
    liveDemo: 'https://fraatlas.vercel.app/',
  },
}

export const fraAtlasDssContext: PortfolioContext = {
  id: fraAtlasDss.id,
  title: 'FRA Atlas DSS',
  type: 'project',
  introMessage: fraAtlasDss.introMessage,
  responses: fraAtlasDss.responses,
  intentKeywords: {
    summary: ['summary', 'project summary', 'get project summary', 'overview', 'describe project', 'what is fra atlas dss', 'what is this project'],
    fullDetails: [
      'full detail',
      'full details',
      'get details',
      'details',
      'details about project',
      'details about the project',
      'project details',
      'complete details',
      'all details',
      'full information',
      'complete information',
      'documentation',
      'readme',
      'full doc',
      'complete doc',
    ],
    lifecycle: ['lifecycle', 'claim lifecycle', 'fra workflow', 'claim flow', 'workflow', 'claim process'],
    roles: ['roles', 'admin', 'role based', 'rbac', 'role system', 'admin system', 'hierarchy', 'permissions'],
    webgis: ['map', 'webgis', 'leaflet', 'spatial', 'gis', 'mapping', 'geographic', 'spatial analysis'],
    dss: ['dss', 'recommendation', 'scheme', 'decision support', 'recommendations', 'scheme recommendation'],
    pdf: ['pdf', 'upload', 'extract', 'claim pdf', 'pdf extraction', 'document upload', 'file upload'],
    scale: ['scale', 'scalability', 'government', 'large scale', 'deployment', 'state level', 'national level'],
    github: ['github', 'repo', 'repository', 'source code', 'code'],
    demo: ['demo', 'live', 'live demo', 'preview', 'live site', 'deployed'],
  },
  fallbackResponse:
    'Ask about FRA claim lifecycle, admin roles, WebGIS features, DSS recommendations, PDF-assisted entry, scalability, GitHub repository, or live demo.',
}