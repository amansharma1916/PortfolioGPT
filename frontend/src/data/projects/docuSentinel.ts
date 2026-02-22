import type { PortfolioContext } from '../../types/chat'

export const docuSentinel: PortfolioContext = {
  id: 'docu-sentinel',
  title: 'DocuSentinel',
  type: 'project',
  introMessage:
    'Ask about DocuSentinel: use case, AI-assisted document workflow, architecture, or implementation trade-offs.',
  responses: {
    overview: `## DocuSentinel — Overview

DocuSentinel is a document governance and review workflow product focused on reducing manual review effort for teams handling policy-heavy documents.

### Key capabilities
- Document ingestion and categorization
- Structured review workflows
- Flagging high-risk sections for faster human review
- Export-ready summaries for stakeholders`,
    tech: `## DocuSentinel — Technical Design

### Application layer
- React + TypeScript user interface
- Service-based backend for workflow orchestration

### Processing pipeline
- Content parsing
- Rule-based validation
- Review state transitions with auditable history

### Engineering priorities
- Explainable workflow stages
- Deterministic output behavior
- Secure handling of document metadata`,
    workflow: `## DocuSentinel — Workflow

1. Upload or register document
2. Extract structured sections
3. Run policy/rule checks
4. Present prioritized review queue
5. Export final review summary

The system is designed to keep humans in control while reducing repetitive effort.`,
    challenges: `## DocuSentinel — Challenges

### Balancing flexibility vs consistency
- Needed adaptable rules while keeping results predictable.

### Document variability
- Different formats required normalization before reliable checks.

### Trust in output
- Focused on transparent summaries so reviewers can validate quickly.`
  },
  intentKeywords: {
    overview: ['overview', 'about', 'summary', 'what is', 'goal'],
    tech: ['tech', 'stack', 'architecture', 'backend', 'frontend'],
    workflow: ['workflow', 'process', 'pipeline', 'steps', 'flow'],
    challenges: ['challenge', 'tradeoff', 'difficulty', 'issue']
  },
  fallbackResponse:
    'I can share DocuSentinel overview, technical design, workflow, or challenges. Ask one of these directly.'
}
