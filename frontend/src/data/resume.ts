import type { PortfolioContext } from '../types/chat'

export const resume: PortfolioContext = {
  id: 'resume',
  title: 'Resume',
  type: 'section',
  introMessage:
    'Ask about experience summary, project highlights, or availability details.',
  responses: {
    summary: `## Resume Summary

Full Stack Developer with experience shipping web applications from MVP to production-ready features.

### Snapshot
- Strong React + TypeScript development
- Backend service design and integration
- Practical focus on performance and maintainability`,
    projects: `## Project Highlights

- Built collaboration-focused products for planning and workflow automation
- Implemented deterministic interaction systems with clean state handling
- Delivered responsive UI with recruiter-friendly presentation quality`,
    availability: `## Availability

- Open to full-time software engineering opportunities
- Interested in product-focused teams
- Available for technical discussions and portfolio walkthroughs`
  },
  intentKeywords: {
    summary: ['summary', 'resume', 'profile', 'experience'],
    projects: ['project', 'highlight', 'work', 'portfolio'],
    availability: ['availability', 'open', 'role', 'hiring', 'contact']
  },
  fallbackResponse:
    'I can share resume summary, project highlights, or availability details.'
}
