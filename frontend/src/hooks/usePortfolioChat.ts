import { useMemo, useRef, useState } from 'react'
import { portfolioContexts } from '../data/contexts'
import { amanProfile } from '../data/amanProfile'
import { resolveContextResponse } from '../utils/intentMatcher'
import type { Message, PortfolioContext } from '../types/chat'

const SYSTEM_MESSAGE =
  'System: deterministic portfolio assistant. Use only predefined context responses.'

const typingDelayMs = 16
const initialResponseDelayMs = 220

function createId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

function createInitialMessages(context: PortfolioContext): Message[] {
  return [
    { id: createId(), role: 'system', content: SYSTEM_MESSAGE },
    { id: createId(), role: 'assistant', content: context.introMessage },
  ]
}

function createNewChatMessages(): Message[] {
  return [{ id: createId(), role: 'system', content: SYSTEM_MESSAGE }]
}

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

export function usePortfolioChat() {
  const [activeContextId, setActiveContextId] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>(createNewChatMessages())
  const [searchQuery, setSearchQuery] = useState('')
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const sessionRef = useRef(0)

  const activeContext = useMemo(
    () => portfolioContexts.find((context) => context.id === activeContextId),
    [activeContextId],
  )

  const filteredContexts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    if (!normalizedQuery) {
      return portfolioContexts
    }

    return portfolioContexts.filter((context) =>
      context.title.toLowerCase().includes(normalizedQuery),
    )
  }, [searchQuery])

  function resetWithContext(context: PortfolioContext) {
    sessionRef.current += 1
    setIsTyping(false)
    setInput('')
    setMessages(createInitialMessages(context))
  }

  function selectContext(contextId: string) {
    const context = portfolioContexts.find((item) => item.id === contextId)
    if (!context) {
      return
    }

    setActiveContextId(context.id)
    resetWithContext(context)
  }

  function newChat() {
    sessionRef.current += 1
    setIsTyping(false)
    setInput('')
    setActiveContextId(null)
    setMessages(createNewChatMessages())
  }

  async function sendMessage(rawInput: string) {
    const content = rawInput.trim()

    if (!content || isTyping) {
      return
    }

    const localSession = sessionRef.current
    const userMessage: Message = { id: createId(), role: 'user', content }
    const assistantMessageId = createId()
    const assistantResponse = resolveContextResponse(
      activeContext ?? amanProfile,
      content,
    )

    setInput('')
    setMessages((prev) => [
      ...prev,
      userMessage,
      { id: assistantMessageId, role: 'assistant', content: '' },
    ])
    setIsTyping(true)

    await wait(initialResponseDelayMs)

    const chunkSize = assistantResponse.length > 400 ? 4 : 2

    for (let index = chunkSize; index <= assistantResponse.length; index += chunkSize) {
      if (localSession !== sessionRef.current) {
        return
      }

      const nextSlice = assistantResponse.slice(0, index)
      setMessages((prev) =>
        prev.map((message) =>
          message.id === assistantMessageId
            ? { ...message, content: nextSlice }
            : message,
        ),
      )
      await wait(typingDelayMs)
    }

    if (assistantResponse.length % chunkSize !== 0) {
      setMessages((prev) =>
        prev.map((message) =>
          message.id === assistantMessageId
            ? { ...message, content: assistantResponse }
            : message,
        ),
      )
    }

    if (localSession === sessionRef.current) {
      setIsTyping(false)
    }
  }

  async function sendPresetMessage(rawInput: string, assistantResponse: string) {
    const content = rawInput.trim()
    const response = assistantResponse.trim()

    if (!content || !response || isTyping) {
      return
    }

    const localSession = sessionRef.current
    const userMessage: Message = { id: createId(), role: 'user', content }
    const assistantMessageId = createId()

    setInput('')
    setMessages((prev) => [
      ...prev,
      userMessage,
      { id: assistantMessageId, role: 'assistant', content: '' },
    ])
    setIsTyping(true)

    await wait(initialResponseDelayMs)

    const chunkSize = response.length > 400 ? 4 : 2

    for (let index = chunkSize; index <= response.length; index += chunkSize) {
      if (localSession !== sessionRef.current) {
        return
      }

      const nextSlice = response.slice(0, index)
      setMessages((prev) =>
        prev.map((message) =>
          message.id === assistantMessageId
            ? { ...message, content: nextSlice }
            : message,
        ),
      )
      await wait(typingDelayMs)
    }

    if (response.length % chunkSize !== 0) {
      setMessages((prev) =>
        prev.map((message) =>
          message.id === assistantMessageId
            ? { ...message, content: response }
            : message,
        ),
      )
    }

    if (localSession === sessionRef.current) {
      setIsTyping(false)
    }
  }

  function postAssistantMessage(content: string) {
    const message = content.trim()

    if (!message) {
      return
    }

    sessionRef.current += 1
    setIsTyping(false)
    setInput('')
    setMessages((prev) => [...prev, { id: createId(), role: 'assistant', content: message }])
  }

  return {
    contexts: portfolioContexts,
    filteredContexts,
    activeContextId,
    activeContext,
    messages,
    input,
    isTyping,
    searchQuery,
    setSearchQuery,
    setInput,
    selectContext,
    newChat,
    sendMessage,
    sendPresetMessage,
    postAssistantMessage,
  }
}
