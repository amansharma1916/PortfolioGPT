export type Role = 'system' | 'assistant' | 'user'

export type ContextType = 'project' | 'section'

export interface Message {
  id: string
  role: Role
  content: string
}

export interface PortfolioContext {
  id: string
  title: string
  type: ContextType
  introMessage: string
  responses: Record<string, string>
  intentKeywords: Record<string, string[]>
  fallbackResponse: string
}

export interface ProfileInfo {
  logoText: string
  name: string
  designation: string
  imageUrl: string
}
