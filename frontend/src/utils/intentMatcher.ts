import type { PortfolioContext } from '../types/chat'
import { goTogetherContext } from '../data/projects/goTogether'
import { fraAtlasDssContext } from '../data/projects/greenAtlas'
import { chatItContext } from '../data/projects/chatIt'
import { tshareContext } from '../data/projects/tshare'
import { ghostMediaContext } from '../data/projects/ghostMedia'
import { rentItContext } from '../data/projects/rentIt'

// Project registry with aliases for detection
const projectRegistry = [
  {
    context: goTogetherContext,
    aliases: ['gotogether', 'go together', 'rideshare', 'ride share', 'ride sharing'],
  },
  {
    context: fraAtlasDssContext,
    aliases: [
      'greenatlas',
      'green atlas',
      'fra atlas',
      'fraatlas',
      'fra',
      'dss',
      'fra atlas dss',
      'forest rights',
    ],
  },
  {
    context: chatItContext,
    aliases: ['chatit', 'chat it', 'chat app', 'messaging app', 'chat application'],
  },
  {
    context: tshareContext,
    aliases: ['tshare', 't share', 'code sharing', 'share platform', '4 digit'],
  },
  {
    context: ghostMediaContext,
    aliases: ['ghostmedia', 'ghost media', 'ghost mode', 'social media', 'anonymous social'],
  },
  {
    context: rentItContext,
    aliases: ['rentit', 'rent it', 'rental', 'rental platform', 'rent platform'],
  },
]

function findMentionedProjects(userInput: string): PortfolioContext[] {
  const normalizedInput = userInput.toLowerCase().trim()
  const mentionedProjects: PortfolioContext[] = []

  for (const { context, aliases } of projectRegistry) {
    const isProjectMentioned = aliases.some((alias) =>
      normalizedInput.includes(alias.toLowerCase()),
    )

    if (isProjectMentioned) {
      mentionedProjects.push(context)
    }
  }

  return mentionedProjects
}

export function resolveContextResponse(
  context: PortfolioContext,
  userInput: string,
): string {
  const normalizedInput = userInput.toLowerCase().trim()
  const allResponses: string[] = []

  // Check if any projects are mentioned in the query
  const mentionedProjects = findMentionedProjects(userInput)
  
  // Add project summaries if projects are mentioned
  for (const project of mentionedProjects) {
    if (project.responses.summary) {
      allResponses.push(project.responses.summary)
    }
  }

  // Then match intents from the current context
  const matchedResponses: string[] = []

  for (const [intent, keywords] of Object.entries(context.intentKeywords)) {
    const includesIntentName = normalizedInput.includes(intent.toLowerCase())
    const includesKeyword = keywords.some((keyword) =>
      normalizedInput.includes(keyword.toLowerCase()),
    )

    if (includesIntentName || includesKeyword) {
      const response = context.responses[intent]
      if (response) {
        matchedResponses.push(response)
      }
    }
  }

  // Add matched context responses
  allResponses.push(...matchedResponses)

  // If we have any responses (project summaries or intent matches), return them
  if (allResponses.length > 0) {
    return allResponses.join('\n\n---\n\n')
  }

  // Otherwise return fallback
  return context.fallbackResponse
}
