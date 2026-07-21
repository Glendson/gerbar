# Research: Sistema de design do Figma

## Findings

### Decision 1: Use the Figma project as the visual source of truth
- Treat the referenced Figma project as the canonical reference for the app's color system, spacing scale, typography, component shape, and hierarchy.
- Translate the observed design language into reusable Tailwind classes and shared component patterns within the existing frontend.
- The expected delivery is an exact visual match to the provided Figma link, not a reinterpretation of the design.

### Rationale
- The feature explicitly asks to align the app with a single design system rather than create a new visual language.
- Keeping one reference source reduces inconsistency and makes future UI changes easier to review.

### Alternatives considered
- Ad hoc visual tweaks screen by screen: rejected because it would create drift and increase maintenance overhead.
- Introducing a separate design-token package prematurely: rejected because the project is small and the current frontend can absorb the design system through shared styling conventions.

### Decision 2: Prioritize a single primary action per screen
- Every main screen should retain one clear action that stands out immediately and supports the user’s most important task.

### Rationale
- This aligns with the constitution’s age-friendly simplicity principle and reduces cognitive load for users above 50.

### Alternatives considered
- Multiple competing CTA styles on the same screen: rejected because it weakens hierarchy and creates ambiguity.
- Hidden or secondary actions being visually equal to primary ones: rejected because it makes the operation less predictable.

### Decision 3: Keep design alignment in the existing React/Tailwind architecture
- Extend the existing `src/components` and `src/styles` layering rather than introducing new framework abstractions.

### Rationale
- The codebase already has a workable structure for UI composition.
- A small, shared styling layer is enough to implement the design system without over-engineering.

### Alternatives considered
- New component library abstraction or CSS-in-JS layer: rejected because the app remains small and should stay easy to review.
- Long-running redesign refactor across all screens at once: rejected because the project needs incremental, reviewable changes.

### Decision 4: Validate through manual UI review on mobile and tablet
- Confirm the design system by running the app and visually inspecting whether the screens keep the same style identity and readable hierarchy.

### Rationale
- The constitution explicitly requires manual verification over automated tests.
- The feature is primarily about visual coherence, so a direct manual pass is the correct quality gate.

### Alternatives considered
- Automated screenshot diffing: not required for this project and would add unnecessary tooling complexity.
- Formal test coverage for visual tokens: rejected because the value would not justify the additional overhead in this small project.
