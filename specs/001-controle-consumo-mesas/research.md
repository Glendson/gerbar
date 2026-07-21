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

### Decision 3: Touch-first board shape
- Represent active tables as square touch blocks on the main board, not as long list items.

### Rationale
- Large square blocks reduce friction for staff operating on phones and tablets.
- The board becomes easier to scan during peak service and clearly communicates the table-action area.

### Alternatives considered
- Dense list layout: rejected because it is less touch-friendly and more cluttered.
- Card grid with rounded shapes only: kept as an option, but square blocks align better with the restaurant workflow and short service actions.

### Decision 4: Interaction model
- Use a modal for table detail and another modal for product registration, both launched through explicit buttons or touch targets.

### Rationale
- This keeps the primary screen focused on the current service day and avoids hidden navigation.
- Modals support a clean, low-complexity flow for the most common admin actions.

### Alternatives considered
- Multi-page navigation: rejected because it adds more taps and mental overhead.
- Inline drawer on the same screen: possible, but modal separation is clearer and more compact for a touch-first app.

### Decision 5: Currency and history behavior
- Use euro throughout the interface and keep daily history separate from monthly history.
- Closed tables should move out of the main board into the historical views and be re-openable from the historical record.

### Rationale
- The product is intended for Portugal, so euro matches the expected operational context.
- History separation keeps the main board cleaner while preserving a reviewable record of completed service.

### Alternatives considered
- Mixed currency display or local fallback formatting: rejected because it adds unnecessary ambiguity.
- Reopening from the main board: rejected because closed tables should not clutter the working board.

### Decision 6: Validation approach
- Use manual validation directly in the running interface instead of automated tests.

### Rationale
- This matches the project constitution and keeps the implementation lightweight.
- It is adequate for a small operational application where the primary value is interaction flow.

### Alternatives considered
- Automated UI test suite: rejected because the user explicitly said no automated tests for this version.
