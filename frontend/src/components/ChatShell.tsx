import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { profile } from '../data/profile'
import { goTogether } from '../data/projects/goTogether'
import { fraAtlasDss } from '../data/projects/greenAtlas'
import { chatIt } from '../data/projects/chatIt'
import { tshare } from '../data/projects/tshare'
import { usePortfolioChat } from '../hooks/usePortfolioChat'
import { Composer } from './Composer.tsx'
import { MessageList } from './MessageList.tsx'
import { Sidebar } from './Sidebar.tsx'

export function ChatShell() {
  const navigate = useNavigate()
  const {
    filteredContexts,
    activeContextId,
    messages,
    input,
    isTyping,
    searchQuery,
    setSearchQuery,
    setInput,
    selectContext,
    newChat,
    sendMessage,
  } = usePortfolioChat()

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [isProjectFollowUpsEnabled, setIsProjectFollowUpsEnabled] = useState(false)

  const initialProjectSuggestions = ['Get live link', 'Get project summary']

  function handleContextSelect(contextId: string) {
    selectContext(contextId)
    setIsProjectFollowUpsEnabled(false)
    setIsMobileSidebarOpen(false)
  }

  function handleNewChat() {
    newChat()
    setIsProjectFollowUpsEnabled(false)
  }

  function handleWebsiteClick() {
    navigate('/website')
  }

  async function handleSend() {
    const content = input.trim()
    await sendMessage(input)

    if (activeContextId !== null && content) {
      setIsProjectFollowUpsEnabled(true)
    }
  }

  function handleQuickAsk(prompt: string) {
    setInput(prompt)
  }

  function handleProjectSuggestion(suggestion: string) {
    setInput(suggestion)
    setIsProjectFollowUpsEnabled(true)
  }

  const projectSuggestions =
    activeContextId === goTogether.id
      ? isProjectFollowUpsEnabled
        ? goTogether.followUpSuggestions
        : initialProjectSuggestions
      : activeContextId === fraAtlasDss.id
        ? isProjectFollowUpsEnabled
          ? fraAtlasDss.followUpSuggestions
          : initialProjectSuggestions
        : activeContextId === chatIt.id
          ? isProjectFollowUpsEnabled
            ? chatIt.followUpSuggestions
            : initialProjectSuggestions
          : activeContextId === tshare.id
            ? isProjectFollowUpsEnabled
              ? tshare.followUpSuggestions
              : initialProjectSuggestions
            : []

  const hideActionButtons = isTyping || input.trim().length > 0

  return (
    <div className="app-shell">
      <button
        type="button"
        className="mobile-menu-button"
        aria-label="Open contexts"
        onClick={() => setIsMobileSidebarOpen(true)}
      >
        ☰
      </button>

      <aside className="desktop-sidebar">
        <Sidebar
          logoText={profile.logoText}
          contexts={filteredContexts}
          activeContextId={activeContextId}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onContextSelect={handleContextSelect}
          onNewChat={handleNewChat}
          onWebsiteClick={handleWebsiteClick}
          profileImageUrl={profile.imageUrl}
          profileName={profile.name}
          profileDesignation={profile.designation}
        />
      </aside>

      <div
        className={`mobile-sidebar-overlay ${
          isMobileSidebarOpen ? 'open' : ''
        }`}
        aria-hidden={!isMobileSidebarOpen}
      >
        <button
          type="button"
          aria-label="Close contexts"
          className="mobile-overlay-backdrop"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
        <aside className="mobile-sidebar-panel">
          <Sidebar
            logoText={profile.logoText}
            contexts={filteredContexts}
            activeContextId={activeContextId}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onContextSelect={handleContextSelect}
            onNewChat={handleNewChat}
            onWebsiteClick={handleWebsiteClick}
            profileImageUrl={profile.imageUrl}
            profileName={profile.name}
            profileDesignation={profile.designation}
          />
        </aside>
      </div>

      <main className="chat-main">
        <MessageList
          messages={messages}
          isDisabled={isTyping}
          onQuickAsk={handleQuickAsk}
          projectSuggestions={projectSuggestions}
          onProjectSuggestion={handleProjectSuggestion}
          showQuickActions={activeContextId === null}
          showProjectActions={activeContextId !== null}
          hideActionButtons={hideActionButtons}
        />
        <Composer
          value={input}
          isDisabled={isTyping}
          onChange={setInput}
          onSend={handleSend}
        />
      </main>
    </div>
  )
}
