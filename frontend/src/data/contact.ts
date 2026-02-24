import type { PortfolioContext } from '../types/chat'

export const contact: PortfolioContext = {
  id: 'contact',
  title: 'Contact',
  type: 'section',
  introMessage:
    'Ask how to connect, preferred channels, or collaboration type.',
  responses: {
    connect: `## Contact

You can connect with me through:

- LinkedIn: https://www.linkedin.com/in/amansharma1916
- GitHub
- Email

I am happy to discuss engineering roles, projects, and technical collaboration.`,
    collaboration: `## Collaboration Preferences

- Product teams with clear ownership
- Systems that value quality and delivery speed
- Transparent communication and growth-oriented culture`
  },
  intentKeywords: {
    connect: ['contact', 'connect', 'linkedin', 'github', 'email', 'reach'],
    collaboration: ['collaborate', 'team', 'culture', 'work with']
  },
  fallbackResponse:
    'You can ask how to connect or about my collaboration preferences.'
}
