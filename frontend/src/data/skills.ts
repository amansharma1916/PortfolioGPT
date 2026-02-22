import type { PortfolioContext } from '../types/chat'

export const skills: PortfolioContext = {
  id: 'skills',
  title: 'Skills',
  type: 'section',
  introMessage:
    'Ask about frontend, backend, tools, or engineering strengths.',
  responses: {
    frontend: `## Frontend Skills

- React + TypeScript
- State management patterns
- Component architecture and performance
- Responsive UI implementation with clean CSS`,
    backend: `## Backend Skills

- Node.js API development
- RESTful service design
- Data modeling and validation
- Authentication and role-based authorization`,
    tooling: `## Tooling

- Git + collaborative workflows
- CI/CD fundamentals
- ESLint + TypeScript strict mode
- Vite-based modern frontend setup`,
    strengths: `## Engineering Strengths

- Deterministic feature behavior
- Clean modular structure
- Fast MVP execution with maintainable code
- Communication of technical trade-offs`
  },
  intentKeywords: {
    frontend: ['frontend', 'react', 'ui', 'css', 'client'],
    backend: ['backend', 'api', 'server', 'database', 'node'],
    tooling: ['tool', 'devops', 'ci', 'lint', 'workflow'],
    strengths: ['strength', 'best', 'specialize', 'expertise']
  },
  fallbackResponse:
    'You can ask about frontend skills, backend skills, tooling, or core strengths.'
}
