import type { PortfolioContext } from '../types/chat'

interface SidebarProps {
  logoText: string
  contexts: PortfolioContext[]
  activeContextId: string | null
  searchQuery: string
  profileImageUrl: string
  profileName: string
  profileDesignation: string
  onSearchChange: (value: string) => void
  onContextSelect: (contextId: string) => void
  onNewChat: () => void
  onWebsiteClick: () => void
}

export function Sidebar({
  logoText,
  contexts,
  activeContextId,
  searchQuery,
  profileImageUrl,
  profileName,
  profileDesignation,
  onSearchChange,
  onContextSelect,
  onNewChat,
  onWebsiteClick,
}: SidebarProps) {
  return (
    <div className="sidebar">
      <header className="sidebar-header">
        <div className="logo-mark" aria-hidden="true">
          ◎
        </div>
        <span>{logoText}</span>
      </header>

      <button type="button" className="new-chat-button" onClick={onNewChat}>
        + New chat
      </button>

      <button type="button" className="website-button" onClick={onWebsiteClick}>
        🌐 Website
      </button>

      <div className="search-wrapper">
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search projects"
          className="search-input"
        />
      </div>

      <div className="context-list" role="listbox" aria-label="Portfolio contexts">
        <div className="context-section-title">Projects</div>
        {contexts.map((context) => (
          <button
            key={context.id}
            type="button"
            role="option"
            aria-selected={context.id === activeContextId}
            className={`context-item ${
              context.id === activeContextId ? 'active' : ''
            }`}
            onClick={() => onContextSelect(context.id)}
          >
            {context.title}
          </button>
        ))}
      </div>

      <footer className="sidebar-footer">
        <img className="profile-avatar" src={profileImageUrl} alt={profileName} />
        <div>
          <div className="profile-name">{profileName}</div>
          <div className="profile-role">{profileDesignation}</div>
        </div>
      </footer>
    </div>
  )
}
