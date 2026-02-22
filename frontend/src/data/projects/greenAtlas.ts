import type { PortfolioContext } from '../../types/chat'

export const greenAtlas: PortfolioContext = {
  id: 'green-atlas',
  title: 'GreenAtlas',
  type: 'project',
  introMessage:
    'Ask about GreenAtlas overview, role-based architecture, WebGIS mapping, analytics dashboards, or OCR workflow.',
  responses: {
    overview: `## GreenAtlas — FRA Decision Support System

GreenAtlas is a MERN-based DSS for Forest Rights Act (FRA) implementation, enabling centralized management and analysis of claims across districts and states.

### Key goals
- Centralize FRA claim operations
- Improve transparency and monitoring
- Support data-driven decisions through dashboards and maps`,
    architecture: `## GreenAtlas — Architecture

### Role-based access control
- Super Admin
- State Admin
- District Admin
- Public Users

### Security
- Secure authentication and authorization flow
- Controlled access by administrative hierarchy

### Stack
- MERN architecture for full-stack scalability`,
    geospatial: `## GreenAtlas — WebGIS Mapping

- Integrated **Leaflet.js** based mapping
- Visualized land and forest data layers
- Enabled spatial analysis for informed claim decision-making
- Improved data accessibility for administrative users`,
    analytics: `## GreenAtlas — Dashboards & Insights

- Interactive charts and analytics for claims tracking
- Fund monitoring views
- Data-driven summaries for operational decisions
- Clear visual reporting for administrative review`,
    ocr: `## GreenAtlas — OCR Document Processing

- Implemented OCR-assisted extraction from uploaded certificates
- Reduced manual data entry effort
- Improved processing efficiency and extraction consistency
- Connected extracted data into core claim workflow`
  },
  intentKeywords: {
    overview: ['overview', 'about', 'summary', 'what is', 'goal'],
    architecture: ['architecture', 'role', 'rbac', 'auth', 'security', 'stack'],
    geospatial: ['map', 'mapping', 'webgis', 'leaflet', 'spatial', 'geospatial'],
    analytics: ['dashboard', 'analytics', 'chart', 'claims', 'fund'],
    ocr: ['ocr', 'document', 'certificate', 'extract', 'processing']
  },
  fallbackResponse:
    'I can explain GreenAtlas overview, architecture, WebGIS mapping, analytics dashboards, or OCR processing.'
}
