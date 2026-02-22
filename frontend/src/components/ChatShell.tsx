import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { profile } from '../data/profile'
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

  function handleContextSelect(contextId: string) {
    selectContext(contextId)
    setIsMobileSidebarOpen(false)
  }

  function handleWebsiteClick() {
    navigate('/website')
  }

  async function handleSend() {
    await sendMessage(input)
  }

  async function handleQuickAsk(prompt: string, openResume = false) {
    if (openResume) {
      window.open('/resume.pdf', '_blank', 'noopener,noreferrer')
    }

    await sendMessage(prompt)
  }

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
          onNewChat={newChat}
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
            onNewChat={newChat}
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
