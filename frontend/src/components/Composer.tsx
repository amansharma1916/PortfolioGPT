import { useEffect, useRef } from 'react'
import type { KeyboardEvent, MouseEvent } from 'react'

interface ComposerProps {
  value: string
  isDisabled: boolean
  onChange: (value: string) => void
  onSend: () => void
}

export function Composer({ value, isDisabled, onChange, onSend }: ComposerProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isDisabled) {
      return
    }

    textareaRef.current?.focus()
  }, [isDisabled])

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== 'Enter' || event.shiftKey) {
      return
    }

    event.preventDefault()
    void onSend()
  }

  function keepTextareaFocus(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    textareaRef.current?.focus()
  }

  return (
    <div className="composer-shell">
      <div className="composer">
        <textarea
          ref={textareaRef}
          value={value}
          className="composer-input"
          placeholder="Ask about me or this project…"
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isDisabled}
          rows={1}
        />
        <button
          type="button"
          className="send-button"
          onMouseDown={keepTextareaFocus}
          onClick={() => void onSend()}
          disabled={isDisabled || value.trim().length === 0}
        >
          Send
        </button>
      </div>
    </div>
  )
}
