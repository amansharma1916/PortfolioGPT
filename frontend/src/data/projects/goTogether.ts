import type { PortfolioContext } from '../../types/chat'

export const goTogether: PortfolioContext = {
  id: 'go-together',
  title: 'goTogether',
  type: 'project',
  introMessage:
    'Ask me anything about goTogether — overview, geospatial stack, booking lifecycle, security, or architecture.',
  responses: {
    overview: `## goTogether — Overview

goTogether is a full-stack MERN + TypeScript student ride-sharing platform with map-based ride discovery, posting, and booking.

### Live Link
https://gotogetherv1.vercel.app/

### Core features
- Interactive map-based ride discovery and posting
- Ride booking workflow with backend validations
- Proximity-based ride search for students
- Responsive modern UI`,
    tech: `## goTogether — Tech Stack

### Frontend
- React + TypeScript
- MapLibre GL + OpenStreetMap

### Backend
- Node.js + Express.js
- Scalable REST APIs and protected routes

### Data and geospatial
- MongoDB with GeoJSON and 2dsphere indexes
- OpenRouteService for routing and distance calculation

### Security
- JWT-based authentication and authorization`,
    challenges: `## goTogether — Challenges & Solutions

### 1) Geospatial matching accuracy
**Challenge:** Efficiently finding nearest ride options with route relevance.

**Solution:** GeoJSON modeling with 2dsphere indexing and route-based validation.

### 2) Routing visualization and distance correctness
**Challenge:** Consistent map rendering and route distance computation.

**Solution:** Integrated OpenRouteService for accurate route + distance output.

### 3) Booking state integrity
**Challenge:** Maintaining valid transitions across booking lifecycle.

**Solution:** Implemented strict backend validation for status transitions.`,
    impact: `## goTogether — Outcomes

- Production-ready ride-sharing workflow for student mobility use case
- End-to-end booking lifecycle: pending, confirmed, completed, cancelled
- Practical demonstration of geospatial + full-stack engineering integration

Ask specifically about geospatial search, booking lifecycle, or API design for deeper details.`
  },
  intentKeywords: {
    overview: ['overview', 'summary', 'about', 'what is', 'link', 'purpose'],
    tech: ['tech', 'stack', 'architecture', 'backend', 'frontend', 'database', 'map', 'geojson'],
    challenges: ['challenge', 'difficult', 'issue', 'problem', 'solution', 'booking'],
    impact: ['impact', 'result', 'outcome', 'achievement', 'metrics', 'lifecycle']
  },
  fallbackResponse:
    'I can help with goTogether overview, tech stack, challenges, and outcomes. Try asking about geospatial search, booking lifecycle, or architecture.'
}
