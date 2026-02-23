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

export const tshare: ProjectChatData = {
  id: 'tshare',
  title: 'TShare — Code-Based Sharing & Realtime Chat',

  shortDescription:
    'A full-stack sharing platform that allows users to share text, images, and PDFs using short 4-digit codes, with an admin panel and a public realtime chat room.',

  introMessage: `
**TShare** is a full-stack sharing application designed for **fast, frictionless content transfer**.

Users can share **text, images, and PDFs** using simple **4-digit codes**, while also joining a **public realtime chat room** powered by Socket.IO.

The project combines **REST APIs**, **file uploads**, **Cloudinary storage**, **admin controls**, and **realtime communication** into a single scalable system.

Ask me about:
• code-based sharing logic  
• file upload & Cloudinary integration  
• admin panel & security  
• public room realtime chat  
• system design & scalability
`,

  followUpSuggestions: [
    'How does code-based sharing work?',
    'How are images and PDFs handled?',
    'How does the admin panel work?',
    'How does the public realtime chat work?',
    'How is Socket.IO integrated?',
    'How would this scale?',
    'View GitHub repository',
    'Open live demo',
  ],

  responses: {
    summary: `
🔗 TShare — Project Details

TShare is a full-stack content sharing platform that enables users to quickly share **text, images, and PDFs** using short **4-digit access codes**.

It also includes a **public realtime chat room**, allowing users to communicate instantly without authentication, while admins retain full control over rooms and shared content.

🔹 What problem does it solve?

Sharing content across devices or with others often requires logins, links, or third-party apps.
TShare simplifies this by enabling **instant, code-based sharing** with optional realtime interaction.

🔹 Key Features

🔢 Share and retrieve content using 4-digit codes  
📝 Text sharing with instant retrieval  
🖼️ Image upload, preview, and download  
📄 PDF upload, inline preview, and download  
🧑‍💼 Admin login and management panel  
💬 Public realtime chat rooms using Socket.IO  
☁️ Cloudinary-based file storage  

🔹 Tech Stack

Frontend: React 19, Vite, React Router, Socket.IO Client  
Backend: Node.js, Express, MongoDB, Socket.IO  
File Storage: Cloudinary + Multer  

This project demonstrates practical full-stack engineering with realtime features.
`,

    fullDetails: `
# 🔗 TShare — Full-Stack Sharing Platform

A code-based sharing application with realtime chat and admin controls.

---

## 🎯 About

TShare allows users to quickly share content using short numeric codes instead of links or accounts.

The system supports:
- Text sharing
- Image sharing
- PDF sharing
- Public realtime chat rooms

Admins can manage all shared content and control public rooms from a dedicated panel.

---

## ✨ Features

### 🔢 Code-Based Sharing
- Share text, images, or PDFs using a 4-digit code
- Retrieve content instantly using the code

### 🖼️ Image & PDF Handling
- Image upload and download
- PDF upload with inline preview
- Files stored securely on Cloudinary

### 🧑‍💼 Admin Panel
- Admin login with password management
- View, update, delete shared content
- Regenerate access codes
- Manage public chat rooms

### 💬 Public Realtime Chat
- Join public rooms using room codes
- Realtime messaging using Socket.IO
- Room validation and active/inactive controls

---

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- React Router
- Socket.IO Client

### Backend
- Node.js
- Express
- MongoDB + Mongoose
- Socket.IO
- Cloudinary
- Multer

---

## 🚀 Architecture Notes

- REST APIs handle content creation and retrieval
- Socket.IO powers realtime chat rooms
- Cloudinary manages image and PDF storage
- Admin APIs provide full moderation control

This architecture balances simplicity, scalability, and realtime interaction.
`,

    codes: `
Code-based sharing is the core design of TShare.

**How it works:**
1. User submits text or uploads a file.
2. Backend generates a unique 4-digit code.
3. Content is stored in MongoDB (metadata) and Cloudinary (files).
4. Anyone with the code can retrieve the content.

This approach enables fast sharing without authentication.
`,

    files: `
Images and PDFs are handled via Cloudinary.

**Flow:**
- Files are uploaded using Multer (in-memory).
- Uploaded to Cloudinary folders:
  • images → \`tshare\`
  • pdfs → \`tshare-pdf\`
- Backend stores file metadata and access codes in MongoDB.
- APIs support preview and download.

Max file size is limited to 5MB for safety and performance.
`,

    admin: `
The admin panel provides full control over the system.

**Admin capabilities:**
- Secure admin login
- View all shared text, images, and PDFs
- Delete or update shared content
- Regenerate access codes
- Create, enable, disable, or delete public chat rooms

A default admin password is initialized on first run and must be changed.
`,

    chat: `
Public realtime chat is implemented using Socket.IO.

**How it works:**
- Users join a room using a room code.
- Backend validates room status.
- Messages are broadcast to all room members.
- Join/leave events are tracked.

Core events:
- join-room
- send-message
- chat-message
- user-joined
- user-left
`,

    socketio: `
Socket.IO integration powers the realtime chat functionality.

**Implementation:**
- Socket.IO server runs alongside Express.
- Clients connect and join room-specific channels.
- Room validation happens before joining.
- Events handle messaging, user join/leave notifications.

**Events:**
- \`join-room\` → validate and join
- \`send-message\` → broadcast to room
- \`chat-message\` → receive message
- \`user-joined\`, \`user-left\` → presence tracking

This ensures reliable realtime communication with room isolation.
`,

    scale: `
TShare is designed to scale with minimal changes.

**Scalability considerations:**
- Stateless REST APIs
- Cloudinary offloads file storage
- MongoDB indexes for code lookups
- Socket.IO can be scaled using Redis adapter
- Admin moderation prevents misuse

The system can support high-volume short-term sharing use cases.
`,

    github: `
You can explore the complete source code on GitHub:

👉 https://github.com/amansharma1916/TShare
`,

    demo: `
The live demo is available here:

👉 https://tshare.vercel.app
`,
  },

  links: {
    github: 'https://github.com/amansharma1916/TShare',
    liveDemo: 'https://tshare.vercel.app',
  },
}

export const tshareContext: PortfolioContext = {
  id: tshare.id,
  title: 'TShare',
  type: 'project',
  introMessage: tshare.introMessage,
  responses: tshare.responses,
  intentKeywords: {
    summary: [
      'summary',
      'project summary',
      'get project summary',
      'overview',
      'describe project',
      'what is tshare',
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
    codes: [
      'code',
      '4 digit',
      'sharing',
      'access code',
      'how does code-based sharing work',
      'code-based sharing',
      'code based',
      'share code',
      'sharing work',
    ],
    files: [
      'image',
      'pdf',
      'upload',
      'cloudinary',
      'file',
      'how are images and pdfs handled',
      'images handled',
      'pdfs handled',
      'file handling',
      'image upload',
      'pdf upload',
    ],
    admin: [
      'admin',
      'panel',
      'management',
      'moderation',
      'how does the admin panel work',
      'admin panel work',
      'admin work',
      'admin controls',
      'manage',
    ],
    chat: [
      'chat',
      'realtime',
      'public room',
      'how does the public realtime chat work',
      'public chat',
      'realtime chat work',
      'chat work',
      'room',
    ],
    socketio: [
      'socket',
      'socket.io',
      'how is socket.io integrated',
      'socket io integrated',
      'socket integration',
      'websocket',
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
    'Ask about code-based sharing, file uploads, admin panel, realtime chat, Socket.IO integration, scalability, GitHub repository, or live demo.',
}
