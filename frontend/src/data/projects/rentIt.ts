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

export const rentIt: ProjectChatData = {
  id: 'rentit',
  title: 'RentIt — Rental Listing Platform',

  shortDescription:
    'A modern, responsive rental listing platform built with React, allowing users to browse, search, and manage rental properties or items.',

  introMessage: `
**RentIt** is a modern rental listing platform built as a responsive React single-page application.

Users can browse rental listings, search and filter by category or price, and manage their own products through authentication-based CRUD functionality.

Ask me about:
• search and filtering logic  
• product CRUD system  
• authentication flow  
• frontend architecture  
• scalability improvements
`,

  followUpSuggestions: [
    'How does the search and filtering work?',
    'How is authentication handled?',
    'How does product CRUD work?',
    'How is the frontend structured?',
    'What would you improve in v2?',
    'View GitHub repository',
    'Open live demo',
  ],

  responses: {
    summary: `
🏠 RentIt — Project Details

RentIt is a responsive rental listing platform that allows users to explore properties or items available for rent and manage their own listings.

The application focuses on clean UI design, intuitive navigation, and structured product management workflows.

🔹 What problem does it solve?

Many small rental platforms lack clean UI and simple listing management.
RentIt demonstrates how to build a user-friendly rental marketplace with authentication and CRUD capabilities.

🔹 Key Features

🏠 Browse rental listings  
🔍 Search and filter by category, location, and price  
📄 Detailed product pages  
🔐 User login & signup  
➕ Add, edit, and delete listings  
📱 Fully responsive React SPA  

🔹 Tech Stack

Frontend: React.js  
Styling: CSS / Tailwind CSS  
Deployment: Render  

This project demonstrates structured frontend development and user-centric design.
`,

    fullDetails: `
# 🏠 RentIt — Rental Platform Website

A modern, responsive rental marketplace built with React.

🔗 Live Demo: https://rent-it-app.onrender.com/
📦 GitHub: https://github.com/amansharma/rentit

---

## 🎯 About

RentIt allows users to:
- Browse available rental items or properties
- View detailed listing pages
- Search and filter listings
- Create and manage their own rental listings

The project is designed as a clean, single-page React application.

---

## ✨ Features

### 🔍 Search & Filtering
- Filter by category
- Filter by price range
- Filter by location

### 🔐 Authentication
- User login & signup
- Auth-based listing management

### 📄 Product Management
- Add new listings
- Edit existing listings
- Delete listings

### 📱 Responsive UI
- Mobile-friendly layout
- Clean navigation structure

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5
- CSS / Tailwind CSS

### Deployment
- Render
- GitHub

---

## 🚀 Architecture Notes

- Built as a React SPA
- Component-based structure
- Centralized state handling for filters
- Structured routing with React Router

This project demonstrates frontend-focused product architecture.
`,

    search: `
Search and filtering are implemented on the frontend using state-based filtering.

**How it works:**
- Listings are stored in state
- Filter criteria (category, price, location) update dynamically
- Filtered results are computed based on user input

This ensures responsive and smooth filtering without page reloads.
`,

    auth: `
Authentication allows users to manage listings securely.

**Flow:**
- User signs up or logs in
- Auth state is stored locally (token/session)
- Only authenticated users can add, edit, or delete products

This ensures controlled content management.
`,

    crud: `
Product management follows standard CRUD operations.

**Users can:**
- Create new listings
- View detailed product pages
- Edit their own listings
- Delete listings they own

Proper UI feedback ensures clear user actions.
`,

    architecture: `
The frontend follows a component-based architecture.

**Structure includes:**
- Reusable listing components
- Dedicated pages for product details
- Router-based navigation
- Modular styling approach

This keeps the codebase clean and scalable.
`,

    improvements: `
Planned improvements for v2 include:

- Backend API integration (currently frontend-heavy)
- Image upload support
- Payment gateway integration
- Advanced filtering and sorting
- User dashboard analytics

These upgrades would transform it into a production-grade rental marketplace.
`,

    github: `
You can explore the complete source code on GitHub:

👉 https://github.com/amansharma/rentit
`,

    demo: `
The live demo is available here:

👉 https://rent-it-app.onrender.com/
`,
  },

  links: {
    github: 'https://github.com/amansharma/rentit',
    liveDemo: 'https://rent-it-app.onrender.com/',
  },
}

export const rentItContext: PortfolioContext = {
  id: rentIt.id,
  title: 'RentIt',
  type: 'project',
  introMessage: rentIt.introMessage,
  responses: rentIt.responses,
  intentKeywords: {
    summary: [
      'summary',
      'project summary',
      'get project summary',
      'overview',
      'describe project',
      'what is rentit',
      'what is this project',
      'rental platform',
    ],
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
    search: [
      'search',
      'filter',
      'category',
      'price',
      'how does the search and filtering work',
      'search and filtering',
      'filtering work',
      'search work',
      'filter work',
    ],
    auth: [
      'auth',
      'authentication',
      'login',
      'signup',
      'how is authentication handled',
      'authentication handled',
      'auth handled',
      'security',
    ],
    crud: [
      'crud',
      'add',
      'edit',
      'delete',
      'product',
      'how does product crud work',
      'product crud work',
      'crud work',
      'manage listings',
      'create listing',
    ],
    architecture: [
      'architecture',
      'frontend structure',
      'components',
      'how is the frontend structured',
      'frontend structured',
      'structure',
      'component structure',
    ],
    improvements: [
      'improve',
      'v2',
      'future',
      'roadmap',
      'what would you improve in v2',
      'improve in v2',
      'improvements',
      'enhancement',
    ],
    github: [
      'github',
      'repo',
      'repository',
      'source code',
      'code',
      'view github',
      'view github repository',
      'github repository',
    ],
    demo: [
      'demo',
      'live',
      'live demo',
      'preview',
      'live site',
      'deployed',
      'open live demo',
      'view demo',
    ],
  },
  fallbackResponse:
    'Ask about search logic, authentication, CRUD system, frontend architecture, improvements, GitHub repository, or live demo.',
}
