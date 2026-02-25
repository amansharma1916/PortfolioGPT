# Portfolio Chat Frontend

A React + TypeScript portfolio assistant UI that simulates a deterministic chat experience for Aman Sharma.

The app provides:
- Context-based portfolio Q&A (projects, profile, skills, experience, contact)
- Quick action prompts and project follow-up suggestions
- Markdown-rendered assistant responses with typing simulation
- A dedicated `/website` route that embeds the static portfolio website


## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- React Markdown + remark-gfm
- ESLint

## Local Development

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run in development

```bash
npm run dev
```

### Build production bundle

```bash
npm run build
```

### Preview production build locally

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## App Structure

```text
frontend/
  src/
    components/       # Chat layout: sidebar, message list, composer
    data/             # Portfolio context content and intent keywords
    hooks/            # Core chat state and deterministic message flow
    pages/            # Website iframe route
    styles/           # App styling
    utils/            # Intent matching and context response resolution
    types/            # Shared TypeScript types
```

## How It Works

1. User picks a project/context from the sidebar or sends a question.
2. The app resolves matching intents using keyword rules in context data.
3. Matching responses are combined and rendered in markdown.
4. Assistant output is streamed character chunks for typing effect.
5. If nothing matches, the active context fallback response is returned.

This project is intentionally deterministic: there is no external LLM API call in the chat flow.

## Routes

- `/` → Chat interface
- `/website` → Embedded portfolio website (`public/website/index.html`)

## Deployment

The project includes `vercel.json` with SPA rewrites so client-side routes work on refresh.

Deploy steps:
1. Build command: `npm run build`
2. Output directory: `dist`
3. Ensure SPA rewrite configuration is included (already present in `vercel.json`)

## Notes

- All assistant responses are sourced from local files under `src/data`.
- Add or edit portfolio knowledge by updating corresponding context files.
