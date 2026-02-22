import type { PortfolioContext } from '../types/chat'

export function resolveContextResponse(
  context: PortfolioContext,
  userInput: string,
): string {
  const normalizedInput = userInput.toLowerCase().trim()

  for (const [intent, keywords] of Object.entries(context.intentKeywords)) {
    const includesIntentName = normalizedInput.includes(intent.toLowerCase())
    const includesKeyword = keywords.some((keyword) =>
      normalizedInput.includes(keyword.toLowerCase()),
    )

    if (includesIntentName || includesKeyword) {
      return context.responses[intent] ?? context.fallbackResponse
    }
  }

  return context.fallbackResponse
}
