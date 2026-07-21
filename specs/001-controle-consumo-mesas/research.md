# Research: Controle de Consumo de Mesas

## Findings

### Decision 1: Frontend stack
- Use React + TypeScript + TailwindCSS for the application UI.
- Keep the app to a single frontend project to preserve simplicity and deliver fast value.

### Rationale
- The requested use case is operational and mostly user-interface based.
- A React app can be hosted online without a separate backend, which matches the “no database in v1” constraint.
- TypeScript improves clarity and maintainability while keeping the code surface small.

### Alternatives considered
- Full-stack app with Node.js + database: rejected because the user explicitly requested no separate database in this version.
- Plain HTML/JavaScript: rejected because TypeScript + React provides better structure and maintainability for a growing restaurant workflow.

### Decision 2: Persistence strategy
- Store all operational data in the browser using `localStorage` and a simple JSON schema.

### Rationale
- This keeps the first version simple and avoids infrastructure and deployment overhead.
- The product remains accessible online via static hosting and still supports day-to-day local usage.

### Alternatives considered
- Supabase or another hosted database: rejected for now because the user asked to avoid separate databases in this version.
- IndexedDB: not necessary for the initial dataset size and complexity.

### Decision 3: Validation approach
- Use manual validation directly in the running interface instead of automated tests.

### Rationale
- This matches the project constitution and keeps the implementation lightweight.
- It is adequate for a small operational application where the primary value is interaction flow.

### Alternatives considered
- Automated UI test suite: rejected because the user explicitly said no automated tests for this version.
