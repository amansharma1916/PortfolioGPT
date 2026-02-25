import { useEffect, useMemo, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Message } from '../types/chat'

interface MessageListProps {
  messages: Message[]
  isDisabled?: boolean
  onQuickAsk?: (prompt: string, openResume?: boolean) => void
  projectSuggestions?: string[]
  onProjectSuggestion?: (suggestion: string) => void
  showQuickActions?: boolean
  showProjectActions?: boolean
  hideActionButtons?: boolean
}

const quickOptions = [
  { label: 'About Aman', prompt: 'Tell me about Aman.' },
  {
    label: 'View Resume',
    prompt: 'Show me resume summary and work experience.',
    openResume: true,
  },
  { label: 'View Skills', prompt: 'What are Aman’s technical skills?' },
  { label: 'View Projects', prompt: 'List all projects and explain them briefly.' },
  { label: 'Education', prompt: 'Tell me about education details.' },
]

interface QuickActionsProps {
  isDisabled: boolean
  onQuickAsk?: (prompt: string, openResume?: boolean) => void
  compact?: boolean
}

interface ProjectActionsProps {
  isDisabled: boolean
  suggestions: string[]
  onProjectSuggestion?: (suggestion: string) => void
}

function QuickActions({
  isDisabled,
  onQuickAsk,
  compact = false,
}: QuickActionsProps) {
  function handleQuickAsk(prompt: string, openResume = false) {
    if (isDisabled || !onQuickAsk) {
      return
    }

    onQuickAsk(prompt, openResume)
  }

  return (
    <div className={`quick-action-grid ${compact ? 'quick-action-grid--compact' : ''}`}>
      {quickOptions.map((option) => (
        <button
          key={option.label}
          type="button"
          className="quick-action-chip"
          onClick={() => handleQuickAsk(option.prompt, option.openResume ?? false)}
          disabled={isDisabled}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}


function ProjectActions({
  isDisabled,
  suggestions,
  onProjectSuggestion,
}: ProjectActionsProps) {
  function handleProjectSuggestion(suggestion: string) {
    if (isDisabled || !onProjectSuggestion) {
      return
    }

    onProjectSuggestion(suggestion)
  }

  return (
    <div className="quick-action-grid project-action-grid">
      {suggestions.map((suggestion) => (
        <button
          key={suggestion}
          type="button"
          className="quick-action-chip"
          onClick={() => handleProjectSuggestion(suggestion)}
          disabled={isDisabled}
        >
          {suggestion}
        </button>
      ))}
    </div>
  )
}

export function MessageList({
  messages,
  isDisabled = false,
  onQuickAsk,
  projectSuggestions = [],
  onProjectSuggestion,
  showQuickActions = true,
  showProjectActions = false,
  hideActionButtons = false,
}: MessageListProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const visibleMessages = useMemo(
    () => messages.filter((message) => message.role !== 'system'),
    [messages],
  )

  const hasVisibleMessages = visibleMessages.length > 0

  useEffect(() => {
    const container = scrollRef.current
    if (!container) {
      return
    }

    container.scrollTop = container.scrollHeight
  }, [visibleMessages])

  return (
    <div
      ref={scrollRef}
      className={`message-list ${hasVisibleMessages ? '' : 'message-list--empty'}`}
      aria-live="polite"
    >
      {!hasVisibleMessages ? (
        <div className="empty-chat-state">
          <h2 className="empty-chat-title">Ask anything about Aman</h2>
          <p className="empty-chat-subtitle">What do you have in mind?</p>
          {showQuickActions && !hideActionButtons ? (
            <QuickActions isDisabled={isDisabled} onQuickAsk={onQuickAsk} />
          ) : null}
          {showProjectActions && !hideActionButtons ? (
            <ProjectActions
              isDisabled={isDisabled}
              suggestions={projectSuggestions}
              onProjectSuggestion={onProjectSuggestion}
            />
          ) : null}
        </div>
      ) : (
        <>
          {visibleMessages.map((message) => (
            <article
              key={message.id}
              className={`message-row ${
                message.role === 'user' ? 'user-message' : 'assistant-message'
              }`}
            >
              <div className="message-bubble">
                {message.role === 'assistant' ? (
                  <div className="markdown-content">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {message.content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <p>{message.content}</p>
                )}
              </div>
            </article>
          ))}
          {showQuickActions && !hideActionButtons ? (
            <div className="message-row quick-actions-row">
              <QuickActions
                isDisabled={isDisabled}
                onQuickAsk={onQuickAsk}
                compact
              />
            </div>
          ) : null}
          {showProjectActions && !hideActionButtons ? (
            <div className="message-row quick-actions-row">
              <ProjectActions
                isDisabled={isDisabled}
                suggestions={projectSuggestions}
                onProjectSuggestion={onProjectSuggestion}
              />
            </div>
          ) : null}
        </>
      )}
    </div>
  )
}
