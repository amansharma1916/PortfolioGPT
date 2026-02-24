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

export const ghostMedia: ProjectChatData = {
  id: 'ghostmedia',
  title: 'GhostMedia — Anonymous Social Media Platform',

  shortDescription:
    'A full-stack social media platform featuring anonymous "Ghost Mode" posting, temporary posts, friend systems, real-time updates, and modern UI/UX.',

  introMessage: `
**GhostMedia** is a full-stack social media platform that allows users to share posts publicly or anonymously using a unique **Ghost Mode** feature.

The system combines **secure authentication**, **friend management**, **post lifecycle control**, and **real-time updates** into a modern, responsive social experience.

Ask me about:
• Ghost Mode & anonymous posting  
• post lifecycle & temporary posts  
• friend system design  
• real-time updates with Socket.IO  
• system architecture & scalability
`,

  followUpSuggestions: [
    'How does Ghost Mode work?',
    'How are temporary posts handled?',
    'How does the friend system work?',
    'How are real-time updates implemented?',
    'How is authentication handled?',
    'How would this scale?',
    'View GitHub repository',
    'Open live demo',
  ],

  responses: {
    summary: `
👻 GhostMedia — Project Details

GhostMedia is a full-stack social media platform designed to give users control over **identity, privacy, and expression**.

Its standout feature, **Ghost Mode**, allows users to post anonymously while still participating in a connected social network with friends, profiles, and real-time interactions.

🔹 What problem does it solve?

Many social platforms force permanent identity exposure.
GhostMedia enables **anonymous expression**, **temporary content**, and **controlled visibility**, while still maintaining trust through authenticated users.

🔹 Key Features

👤 Secure user authentication (JWT + bcrypt)  
👻 Anonymous posting via Ghost Mode  
⏳ Temporary posts with automatic expiry  
🤝 Friend request & friendship management  
📝 Post creation, editing, and deletion  
🎨 Dark / Light theme support  
⚡ Real-time updates using Socket.IO  

🔹 Tech Stack

Frontend: React 19, Vite, React Router, Framer Motion, Lucide React  
Backend: Node.js, Express, MongoDB, JWT  
Realtime: Socket.IO  

This project demonstrates advanced full-stack social platform design.
`,

    fullDetails: `
# 👻 GhostMedia — Full-Stack Social Media Platform

A privacy-first social media application with anonymous posting and real-time updates.

---

## 🎯 About

GhostMedia allows users to:
- Share posts normally or anonymously
- Create temporary posts that auto-delete
- Connect with friends
- Receive real-time notifications

The platform balances **anonymity and accountability** using authenticated identities with optional ghost visibility.

---

## ✨ Features

### 👻 Ghost Mode
- Create posts anonymously
- Hide identity while maintaining authenticated ownership

### ⏳ Temporary Posts
- Posts can auto-expire after a defined time
- Backend handles lifecycle and cleanup

### 🤝 Friend System
- Send, accept, decline friend requests
- View friends and friendship status
- Remove friends when needed

### 📝 Post Management
- Create, edit, delete posts
- View global feed or user-specific posts

### ⚡ Real-Time Updates
- Live post updates
- Instant friend request notifications
- WebSocket-powered events

---

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- React Router DOM
- Socket.IO Client
- Framer Motion
- Lucide React

### Backend
- Node.js
- Express
- MongoDB + Mongoose
- JWT Authentication
- bcrypt
- Socket.IO

---

## 🌐 Architecture Notes

- JWT-secured REST APIs
- Socket.IO for real-time events
- Context-based state management
- Clean separation of frontend and backend

This architecture supports scalability and feature expansion.
`,

    ghostmode: `
Ghost Mode allows users to post content anonymously.

**How it works:**
- User is authenticated normally
- Post is stored with a ghost flag
- Identity is hidden on the frontend
- Backend retains ownership internally

This balances anonymity with platform moderation and control.
`,

    temporary: `
Temporary posts are posts that auto-expire.

**Implementation:**
- Posts store expiry timestamps
- Backend filters or removes expired posts
- Ensures feed stays fresh and relevant

This encourages spontaneous, low-pressure content sharing.
`,

    friends: `
The friend system enables controlled social connections.

**Features include:**
- Send and receive friend requests
- Accept or decline requests
- Track friendship status
- Remove friends

APIs ensure users can only interact within valid relationships.
`,

    realtime: `
Real-time updates are handled using Socket.IO.

**Events include:**
- New post creation
- Post updates and deletions
- Friend request notifications
- Friendship status changes

This keeps the user experience dynamic and responsive.
`,

    auth: `
Authentication is implemented using JWT and bcrypt.

**Flow:**
1. User registers with hashed password
2. Logs in to receive JWT
3. Protected routes validate token
4. User context persists session state

This ensures secure, stateless authentication.
`,

    scale: `
GhostMedia is designed to scale.

**Scalability considerations:**
- Stateless JWT authentication
- MongoDB indexing for feeds and users
- Socket.IO horizontal scaling (Redis adapter)
- Modular backend structure

The platform can evolve into a high-traffic social system.
`,

    github: `
You can explore the complete source code on GitHub:

👉 https://github.com/amansharma1916/GhostMedia
`,

    demo: `
The live demo is available here:

👉 https://ghostmedia.vercel.app/
`,
  },

  links: {
    github: 'https://github.com/amansharma1916/GhostMedia',
    liveDemo: 'https://ghostmedia.vercel.app/',
  },
}

export const ghostMediaContext: PortfolioContext = {
  id: ghostMedia.id,
  title: 'GhostMedia',
  type: 'project',
  introMessage: ghostMedia.introMessage,
  responses: ghostMedia.responses,
  intentKeywords: {
    summary: [
      'summary',
      'project summary',
      'get project summary',
      'overview',
      'describe project',
      'what is ghostmedia',
      'what is this project',
      'social media',
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
    ghostmode: [
      'ghost',
      'ghost mode',
      'anonymous',
      'anonymity',
      'how does ghost mode work',
      'ghost mode work',
      'anonymous posting',
      'ghost posting',
    ],
    temporary: [
      'temporary',
      'expire',
      'auto delete',
      'how are temporary posts handled',
      'temporary posts',
      'posts handled',
      'post expiry',
      'expiry',
    ],
    friends: [
      'friend',
      'friend system',
      'request',
      'connection',
      'how does the friend system work',
      'friend system work',
      'friendship',
      'friend request',
    ],
    realtime: [
      'realtime',
      'socket',
      'socket.io',
      'live',
      'how are real-time updates implemented',
      'real-time updates',
      'realtime updates',
      'updates implemented',
      'websocket',
    ],
    auth: [
      'auth',
      'authentication',
      'jwt',
      'login',
      'signup',
      'how is authentication handled',
      'authentication handled',
      'security',
      'bcrypt',
    ],
    scale: [
      'scale',
      'scalability',
      'performance',
      'how would this scale',
      'scale this',
      'scaling',
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
    'Ask about Ghost Mode, temporary posts, friend system, real-time updates, authentication, scalability, GitHub repository, or live demo.',
}
