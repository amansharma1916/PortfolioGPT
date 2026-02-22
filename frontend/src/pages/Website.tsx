import { useNavigate } from 'react-router-dom'
import '../styles/website.css'

export function Website() {
  const navigate = useNavigate()

  return (
    <div className="website-container">
      <button
        type="button"
        className="website-back-button"
        onClick={() => navigate('/')}
        aria-label="Back to chat"
      >
        ← Back to Chat
      </button>

      <div className="website-iframe-wrapper">
        <iframe
          src="/website/index.html"
          title="Portfolio Website"
          className="website-iframe"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  )
}
