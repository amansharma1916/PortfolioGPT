import type { PortfolioContext } from '../types/chat'

export const about: PortfolioContext = {
  id: 'about-me',
  title: 'About Me',
  type: 'section',
  introMessage:
    'You can ask about my background, current focus, working style, or what I bring to teams.',
  responses: {
    background: `## About Me

I am a Full Stack Developer focused on building practical, user-centered products with clean architecture and predictable behavior.

### Professional focus
- Product-oriented engineering
- Frontend systems with React + TypeScript
- Backend APIs and data modeling
- Maintainable codebases and delivery consistency`,
    mindset: `## Working Style

- I prefer clear requirements and measurable outcomes.
- I focus on shipping stable MVPs before optimization.
- I keep systems maintainable through modular code and strong typing.
- I communicate trade-offs early with stakeholders.`,
    goals: `## Current Goals

- Build high-quality production systems with strong UX
- Improve system design depth and performance engineering
- Contribute to teams where speed and code quality are both valued`
  },
  intentKeywords: {
    background: ['background', 'about', 'introduction', 'who are you'],
    mindset: ['style', 'mindset', 'work', 'approach', 'team'],
    goals: ['goal', 'future', 'plan', 'career', 'focus']
  },
  fallbackResponse:
    'You can ask about my background, working style, or current goals.'
}
