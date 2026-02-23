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

export const goTogether: ProjectChatData = {
  id: 'gotogether',
  title: 'goTogether — Student Rideshare Platform',

  shortDescription:
    'A full-stack, map-driven ridesharing platform designed for students, featuring geospatial search, booking workflows, and real-time chat.',

  introMessage: `
**goTogether** is a full-stack ridesharing platform built specifically for students to share rides, reduce daily commute costs, and coordinate travel safely.

It combines **map-based ride discovery**, **seat-based booking**, and **booking-specific real-time chat** into a single system.

Ask me about:
• booking logic  
• proximity search  
• system design  
• scalability  
• challenges faced
`,

  followUpSuggestions: [
    'Explain the booking logic',
    'How does proximity-based search work?',
    'How does real-time chat work?',
    'How would this scale to 10,000 users?',
    'What were the biggest challenges?',
    'What would you improve in v2?',
    'View GitHub repository',
    'Open live demo',
  ],

  responses: {
    summary: `
🚗 goTogether — Project Details

goTogether is a full-stack, map-driven ridesharing platform built specifically for students to share rides, reduce daily travel costs, and coordinate commutes safely through structured workflows.

It connects drivers and riders using geospatial discovery, route generation, booking logic, and real-time communication.

🔹 What problem does it solve?

Students often spend ₹100+ daily on transport and lack a trusted way to share rides.
goTogether enables cost-sharing, reduces vehicle usage, and helps students connect along common routes.

🔹 Key Features

🗺️ Map-based ride discovery using MapLibre GL

📍 Proximity search with GeoJSON & MongoDB 2dsphere indexes

🚗 Ride posting with route geometry and metadata

🎟️ Seat-based booking lifecycle (pending → confirmed → completed)

💬 Booking-specific real-time chat with Socket.IO

🔐 JWT-based authentication and protected routes

🔹 Tech Stack

Frontend: React 19, TypeScript, Vite, MapLibre GL
Backend: Node.js, Express, MongoDB, Mongoose
Realtime: Socket.IO
Geospatial: OpenRouteService, Turf.js

🔹 What makes it technically interesting?

Efficient geospatial queries for nearby ride discovery

Controlled booking logic to prevent duplicates and self-booking

Room-based real-time chat tied to booking lifecycle

Clean REST API design with authentication middleware

🔹 Deployment

Frontend hosted on Vercel

Backend deployable on Render / Railway

MongoDB Atlas for production data
`,

    fullDetails: `
# 🚗 goTogether - Student Rideshare Platform

**A modern full-stack rideshare platform built for students**

🔗 Live Demo: https://gotogetherv1.vercel.app
📦 Frontend: React + TypeScript
⚙️ Backend: Node.js + Express
🗄️ Database: MongoDB

---

## 📋 Table of Contents

- About
- Features
- Tech Stack
- Getting Started
- Environment Variables
- Project Structure
- API Overview
- Realtime Chat (Socket.IO)
- Deployment
- Team
- Support

---

## 🎯 About

**goTogether** helps students share rides by connecting drivers and riders through map-based discovery, booking workflows, and live in-app chat.

### Why goTogether?

- 💰 **Save Money** - Share travel costs with fellow students
- 🌍 **Eco-Friendly** - Fewer vehicles and reduced emissions
- 🤝 **Build Community** - Connect students from nearby routes
- 🔒 **Secure Access** - JWT-protected user sessions
- 📱 **Simple UX** - Responsive UI with map-driven interactions

---

## ✨ Features

### 🔐 Authentication & Profile
- Register and login with JWT
- Token verification endpoint for session restore
- Protected frontend routes
- Profile update support

### 🗺️ Mapping & Geospatial
- Interactive maps with **MapLibre GL**
- Nominatim-powered place search/autocomplete
- Route generation through **OpenRouteService**
- GeoJSON storage (\`Point\`, \`LineString\`, \`Polygon\`) in MongoDB
- Proximity ride search via geospatial queries

### 🚗 Ride Management
- Post rides with origin, destination, date/time, seats, and pricing
- Auto-fetch and store route geometry + simplified route + bounding box
- Browse rides with pagination
- Filter by departure date
- "My Rides" view for posted rides

### 📱 Booking System
- Create bookings with seat validation
- Prevent self-booking and duplicate active booking
- Booking lifecycle: **pending → confirmed → completed**
- Cancellation flow with cancellation metadata
- Rider rating/review after completion
- Payment metadata (\`cash\`, \`card\`, \`upi\`, \`wallet\`)

### 💬 Realtime Chat
- Booking-specific chat threads
- Socket room join/leave per booking
- Live message delivery
- Typing indicators
- Read status updates and unread counters

### 🎨 UI/UX
- Dark, modern visual style
- Responsive layouts for mobile and desktop
- Loading states and status-aware UI feedback

---

## 🛠️ Tech Stack

### Frontend
- **React:** 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Routing:** react-router-dom (v7)
- **Maps:** MapLibre GL JS
- **HTTP:** Axios + Fetch
- **Realtime:** socket.io-client

### Backend
- **Runtime:** Node.js
- **Framework:** Express
- **Database:** MongoDB + Mongoose
- **Auth:** JWT + bcryptjs
- **Realtime:** Socket.IO
- **Geospatial Utilities:** Turf (@turf/*)

### Dev Utilities
- **Concurrency:** concurrently (root script)
- **Backend Dev Server:** nodemon

---

## 🚀 Getting Started

### Prerequisites

- Node.js (18+ recommended)
- npm
- MongoDB (local or Atlas)
- OpenRouteService API key

### Installation

1. **Clone repository**
\`\`\`bash
git clone https://github.com/amansharma1916/goTogether.git
cd goTogether
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
npm install --prefix backend
npm install --prefix frontend
\`\`\`

3. **Create environment files**
- \`backend/.env\`
- \`frontend/.env\`

4. **Run app (frontend + backend together)**
\`\`\`bash
npm run app
\`\`\`

### Run separately

\`\`\`bash
# terminal 1
cd backend
npm start

# terminal 2
cd frontend
npm run dev
\`\`\`

### Local URLs

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

---

## 🔧 Environment Variables

### Backend .env

\`\`\`env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gotogether
JWT_SECRET=your_super_secret_jwt_key_here
FRONTEND_URL=http://localhost:5173
ORS_API_KEY=your_openrouteservice_api_key
NODE_ENV=development
\`\`\`

### Frontend .env

\`\`\`env
VITE_API_URL=http://localhost:5000
VITE_ORS_API_KEY=your_openrouteservice_api_key
\`\`\`

---

## 📁 Project Structure

\`\`\`text
goTogether/
├── backend/
│   ├── Auth/Routes/               # auth routes
│   ├── controllers/               # auth/ride/booking/message controllers
│   ├── DB/Schema/                 # Mongoose schemas
│   ├── middleware/                # JWT + socket auth middleware
│   ├── routes/                    # ride/booking/message routes
│   ├── socket/                    # Socket.IO events
│   └── server.js                  # backend entry point
│
├── frontend/
│   ├── src/components/Default/    # public pages
│   ├── src/components/User/       # protected user pages
│   ├── src/context/               # auth/chat/global state
│   ├── src/services/              # API + socket services
│   ├── src/Styles/                # CSS files
│   └── src/App.tsx                # app routes
│
├── screenshots/
├── package.json                   # root script: npm run app
└── README.md
\`\`\`

---

## 📚 API Overview

Base URL: http://localhost:5000/api

### Auth

#### Register
\`\`\`http
POST /api/auth/register
Content-Type: application/json

{
    "fullname": "John Doe",
    "email": "john@example.com",
    "password": "SecurePass123",
    "college": "Amity University"
}
\`\`\`

#### Login
\`\`\`http
POST /api/auth/login
Content-Type: application/json

{
    "email": "john@example.com",
    "password": "SecurePass123"
}
\`\`\`

#### Verify token
\`\`\`http
GET /api/auth/verify
Authorization: Bearer <token>
\`\`\`

### Rides

- POST /api/rides (auth)
- GET /api/rides
- POST /api/rides/search
- GET /api/rides/my-rides (auth)
- GET /api/rides/:id

#### Search rides by proximity
\`\`\`http
POST /api/rides/search
Content-Type: application/json

{
    "pickup": {
        "lat": 23.334284,
        "lng": 85.258330
    },
    "radiusMeters": 800,
    "timeWindow": {
        "from": "2026-02-23T08:00:00.000Z",
        "to": "2026-02-23T20:00:00.000Z"
    },
    "userId": "optional_user_id"
}
\`\`\`

### Bookings

- POST /api/bookings (auth)
- GET /api/bookings/my-bookings (auth)
- GET /api/bookings/received (auth)
- GET /api/bookings/ride/:rideId
- GET /api/bookings/:id (auth)
- PATCH /api/bookings/:id/confirm (auth)
- PATCH /api/bookings/:id/cancel (auth)
- PATCH /api/bookings/:id/complete (auth)
- PATCH /api/bookings/:id/rate (auth)
- PATCH /api/bookings/:id/payment (auth)
- PATCH /api/bookings/:id/status (auth)

#### Create booking
\`\`\`http
POST /api/bookings
Authorization: Bearer <token>
Content-Type: application/json

{
    "rideId": "ride_id_here",
    "seatsBooked": 1,
    "pickupLocation": {
        "lat": 23.340000,
        "lng": 85.280000
    },
    "pickupLocationName": "Near College Gate",
    "meetingPoint": {
        "lat": 23.335000,
        "lng": 85.270000
    },
    "distanceToMeetingPoint": 1200,
    "riderNotes": "Call when near",
    "paymentMethod": "upi"
}
\`\`\`

### Messages

- POST /api/messages/send (auth)
- GET /api/messages/history/:bookingId (auth)
- PATCH /api/messages/:bookingId/mark-read (auth)
- GET /api/messages/unread/count (auth)
- DELETE /api/messages/:messageId (auth)

---

## 🔌 Realtime Chat (Socket.IO)

The backend Socket.IO server runs on the same host/port as Express.

### Auth
- Client sends JWT in \`socket.auth.token\`

### Implemented events
- \`join_room\`, \`room_joined\`, \`user_joined\`
- \`send_message\`, \`new_message\`, \`message_sent\`
- \`typing\`, \`stop_typing\`, \`user_typing\`, \`user_stopped_typing\`
- \`mark_read\`, \`message_read\`
- \`leave_room\`, \`user_left\`, \`user_disconnected\`

---

## 🌐 Deployment

### Frontend (Vercel)

- Root directory: \`frontend\`
- \`frontend/vercel.json\` already includes SPA rewrite to \`index.html\`
- Set env vars:
    - \`VITE_API_URL\`
    - \`VITE_ORS_API_KEY\`

### Backend (Render / Railway / Heroku-style hosts)

- Deploy \`backend\` service
- Ensure WebSocket support is enabled
- Set env vars:
    - \`PORT\`
    - \`MONGODB_URI\`
    - \`JWT_SECRET\`
    - \`FRONTEND_URL\`
    - \`ORS_API_KEY\`
    - \`NODE_ENV=production\`

### Database (MongoDB Atlas)

1. Create cluster
2. Create database user
3. Whitelist IP/network
4. Use Atlas URI in \`MONGODB_URI\`

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit changes (\`git commit -m "Add some AmazingFeature"\`)
4. Push branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

---

## 📝 License

This project is maintained by @amansharma1916.

---

## 👥 Team

**Developer:** Aman Sharma

- GitHub: https://github.com/amansharma1916
- LinkedIn: https://www.linkedin.com/in/amansharma1916
- Email: amansharmayt19@gmail.com

---

## 📞 Support

- Open an issue: https://github.com/amansharma1916/goTogether/issues
- Email: amansharmayt19@gmail.com

---

**Made with ❤️ for Students by Students**

⭐ Star this repo if you find it useful!

Live Demo: https://gotogetherv1.vercel.app
Report Bug: https://github.com/amansharma1916/goTogether/issues
Request Feature: https://github.com/amansharma1916/goTogether/issues
`,

    booking: `
The booking system is designed to prevent misuse while keeping the flow simple and consistent.

**Core rules:**
- Users cannot book their own rides.
- Duplicate active bookings for the same ride are blocked.
- Seat availability is validated server-side.
- Booking lifecycle is strictly enforced:

\`\`\`
pending → confirmed → completed
             ↓
          cancelled
\`\`\`

**Implementation details:**
- All validations happen on the backend before booking creation.
- Status transitions are protected via authenticated routes.
- Cancellation stores metadata such as reason and timestamp.
- Riders can rate the driver after ride completion.

This design prevents overbooking and ensures transactional consistency.
`,

    proximity: `
Ride discovery is implemented using MongoDB geospatial indexing.

**How it works:**
- Pickup locations are stored as **GeoJSON Point** objects.
- A **2dsphere index** is applied on the pickup field.
- The search endpoint accepts:
  • latitude & longitude  
  • search radius (meters)  
  • optional time window  

**Query strategy:**
- \`$geoNear\` aggregation filters nearby rides.
- Time-based filters are applied after spatial filtering.
- User’s own rides are optionally excluded.

This approach provides fast and scalable location-based search.
`,

    chat: `
Real-time chat is booking-specific and powered by Socket.IO.

**Architecture:**
- Each booking maps to a dedicated socket room.
- JWT is validated during socket connection.
- Messages are persisted in MongoDB.

**Supported events:**
- join_room / leave_room
- send_message / new_message
- typing / stop_typing
- mark_read / message_read

This ensures chat remains tightly coupled to a specific ride transaction.
`,

    scale: `
The system is designed to scale horizontally with minimal changes.

**Database:**
- 2dsphere indexes for geospatial queries
- Pagination for ride browsing
- Optimized aggregation pipelines

**Backend:**
- Stateless JWT authentication
- Multiple Node.js instances behind a load balancer
- Redis adapter for Socket.IO room synchronization

**Infrastructure:**
- CDN for frontend assets
- MongoDB Atlas auto-scaling
- Rate limiting on search endpoints

This setup can comfortably handle tens of thousands of users.
`,

    challenges: `
The main challenges faced during development were:

**1. Geospatial querying**
- Correct indexing and radius-based filtering
- Handling edge cases with time windows

**2. Booking consistency**
- Preventing duplicate and self-bookings
- Managing race conditions on seat availability

**3. Real-time chat reliability**
- Handling reconnects and disconnects
- Keeping unread counts consistent

Each issue required careful backend validation and state management.
`,

    improvements: `
Planned improvements for future versions include:

- Payment gateway integration
- Smarter ride matching algorithms
- Dynamic pickup point suggestions
- Push notifications
- Student verification & trust scoring
- Analytics dashboard for rides and usage

These features would improve reliability, trust, and adoption.
`,

    github: `
You can explore the complete source code on GitHub:

👉 https://github.com/amansharma1916/goTogether
`,

    demo: `
The live demo is available here:

👉 https://gotogetherv1.vercel.app
`,
  },

  links: {
    github: 'https://github.com/amansharma1916/goTogether',
    liveDemo: 'https://gotogetherv1.vercel.app',
  },
}

export const goTogetherContext: PortfolioContext = {
  id: goTogether.id,
  title: 'goTogether',
  type: 'project',
  introMessage: goTogether.introMessage,
  responses: goTogether.responses,
  intentKeywords: {
    summary: ['summary', 'project summary', 'get project summary', 'overview', 'describe project', 'what is goTogether'],
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
    booking: ['booking', 'seat', 'lifecycle', 'flow', 'transaction'],
    proximity: ['proximity', 'geo', 'geospatial', 'search', '2dsphere', 'nearby'],
    chat: ['chat', 'realtime', 'socket', 'socket.io', 'message'],
    scale: ['scale', 'scalability', '10000', 'load', 'performance'],
    challenges: ['challenge', 'issue', 'problem', 'difficulty'],
    improvements: ['improve', 'v2', 'future', 'roadmap', 'enhancement'],
    github: ['github', 'repository', 'repo', 'source code'],
    demo: ['demo', 'live', 'live demo', 'preview'],
  },
  fallbackResponse:
    'Ask about booking logic, proximity search, realtime chat, scalability, challenges, improvements, GitHub repo, or live demo.',
}
