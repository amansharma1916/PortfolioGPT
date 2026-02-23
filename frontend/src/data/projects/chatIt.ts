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

export const chatIt: ProjectChatData = {
  id: 'chat-it',
  title: 'ChatIt — User-to-User Chat Application',

  shortDescription:
    'A full-stack MERN messaging application focused on secure authentication, REST-based user-to-user messaging, and clean API design.',

  introMessage: `
**ChatIt** is a full-stack user-to-user messaging application built using the **MERN stack**.

The project focuses on **secure authentication**, **clean REST API design**, and **persistent message storage**, intentionally avoiding real-time sockets in its first version to establish a strong backend foundation.

Ask me about:
• authentication flow  
• message handling  
• API design  
• system design tradeoffs  
• future real-time plans
`,

  followUpSuggestions: [
    'How does authentication work?',
    'How are messages stored and retrieved?',
    'Why is this not real-time?',
    'How is the REST API designed?',
    'How would you add Socket.IO?',
    'View GitHub repository',
    'Open live demo',
  ],

  responses: {
    summary: `
💬 ChatIt — Project Details

ChatIt is a full-stack messaging application that enables authenticated users to exchange messages securely using RESTful APIs.

The application emphasizes **clean separation of concerns**, **secure user authentication**, and **scalable backend design**, making it a strong foundation for adding real-time communication in future iterations.

🔹 What problem does it solve?

ChatIt demonstrates how to build a secure messaging system with proper authentication, message persistence, and API-driven communication without relying on real-time sockets.

🔹 Key Features

🔐 JWT-based authentication with bcrypt password hashing  
🗂️ User-to-user messaging with MongoDB persistence  
🌐 RESTful APIs built with Express.js  
📱 Fully responsive React-based UI  
🧼 Simple, clean interface focused on usability  
⚠️ No real-time sockets (by design, v1)

🔹 Tech Stack

Frontend: React.js  
Backend: Node.js, Express.js  
Database: MongoDB  
Authentication: JWT + bcrypt

🔹 Why it's technically interesting

Clear API boundaries, secure auth flow, and a design that cleanly separates REST-based messaging from future real-time upgrades.
`,

    fullDetails: `
# 💬 ChatIt — User-to-User Chat Application

A full-stack MERN messaging application focused on secure authentication and REST-driven communication.

🔗 Live Demo: https://chat-it-app.vercel.app/

---

## 🎯 About

ChatIt allows users to register, authenticate, and exchange messages securely.

The project intentionally avoids real-time technologies in its first version to focus on **backend correctness**, **security**, and **API clarity**.

---

## ✨ Features

- Secure authentication using JWT and bcrypt
- User-to-user messaging
- MongoDB-based message storage
- RESTful API design with Express.js
- Responsive React UI
- Clean and minimal interface

---

## 🛠️ Tech Stack

### Frontend
- React.js

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- JWT
- bcrypt

---

## 🚀 Future Enhancements

- Real-time messaging using Socket.IO
- Message timestamps
- User online/offline presence
- Read receipts and typing indicators

---

This project demonstrates strong backend fundamentals and is designed to evolve into a real-time chat system.
`,

    auth: `
Authentication is implemented using JWT and bcrypt.

**Flow:**
1. User registers with email and password.
2. Passwords are hashed using bcrypt before storage.
3. On login, a JWT is issued.
4. Protected routes require a valid JWT.

This ensures secure access control and stateless authentication.
`,

    messaging: `
Messages are handled through RESTful APIs.

**Implementation details:**
- Messages are stored in MongoDB with sender and receiver references.
- APIs support fetching conversation history between users.
- Backend validates user permissions for message access.

This design keeps message persistence reliable and scalable.
`,

    api: `
The backend follows a clean REST architecture.

**Characteristics:**
- Resource-based endpoints
- Clear separation of auth and messaging routes
- Stateless request handling
- Predictable request/response patterns

This makes the system easy to extend and maintain.
`,

    realtime: `
Real-time messaging is intentionally excluded in v1.

**Reasoning:**
- Establish strong backend and data models first
- Avoid complexity before correctness
- Ensure REST APIs are production-ready

**Planned upgrade:**
- Integrate Socket.IO
- Add typing indicators and presence
- Synchronize real-time events with MongoDB persistence
`,

    github: `
You can explore the complete source code on GitHub:

👉 https://github.com/amansharma1916/chat-it
`,

    demo: `
The live demo is available here:

👉 https://chat-it-app.vercel.app/
`,
  },

  links: {
    github: 'https://github.com/amansharma1916/chat-it',
    liveDemo: 'https://chat-it-app.vercel.app/',
  },
}

export const chatItContext: PortfolioContext = {
  id: chatIt.id,
  title: 'ChatIt',
  type: 'project',
  introMessage: chatIt.introMessage,
  responses: chatIt.responses,
  intentKeywords: {
    summary: [
      'summary',
      'project summary',
      'get project summary',
      'overview',
      'describe project',
      'what is chatit',
      'chat app',
      'what is this project',
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
    auth: [
      'auth',
      'authentication',
      'jwt',
      'login',
      'signup',
      'security',
      'bcrypt',
      'how does authentication work',
      'authentication work',
      'authentication flow',
      'how to login',
      'register',
    ],
    messaging: [
      'message',
      'messaging',
      'chat flow',
      'storage',
      'conversation',
      'how are messages stored',
      'messages stored',
      'messages retrieved',
      'message handling',
      'store messages',
    ],
    api: [
      'api',
      'rest',
      'backend',
      'endpoints',
      'rest api',
      'how is the rest api designed',
      'api designed',
      'api design',
      'rest architecture',
    ],
    realtime: [
      'realtime',
      'socket',
      'socket.io',
      'live chat',
      'real time',
      'websocket',
      'why is this not real-time',
      'not real-time',
      'not realtime',
      'how would you add socket.io',
      'add socket.io',
      'socket io',
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
    'Ask about authentication, messaging flow, API design, real-time plans, GitHub repository, or live demo.',
}
