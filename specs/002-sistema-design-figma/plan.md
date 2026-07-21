# Implementation Plan: Sistema de design do Figma

**Branch**: `002-sistema-design-figma` | **Date**: 2026-07-21 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/002-sistema-design-figma/spec.md`

## Summary

A aplicação continuará sendo um frontend web em React + TypeScript com TailwindCSS, mas a mudança principal será alinhar a UI existente ao design system do projeto Figma indicado. O objetivo é manter uma linguagem visual coerente entre telas, com foco em hierarquia clara, contraste forte, espaçamento consistente e uma ação principal evidente em cada tela.

## Technical Context

**Language/Version**: TypeScript 5.x, React 18, Vite 5, TailwindCSS 3

**Primary Dependencies**: React, ReactDOM, TailwindCSS, Vite, localStorage persistence

**Storage**: Browser localStorage with JSON state; no backend service in this release

**Validation**: Manual verification in the running product on mobile and tablet layouts

**Target Platform**: Web application, optimized for phones and tablets in a browser

**Project Type**: Web application

**Performance Goals**: Fast visual scanning and stable interaction flows for a small restaurant workflow, with smooth rendering on mobile-sized screens

**Constraints**: Keep the codebase small and readable, use the Figma design link as the single source of truth for visual consistency, preserve accessible contrast and large touch targets, and avoid unnecessary backend or architectural complexity; the UI must follow the reference closely enough to avoid perceptible deviations

**Scale/Scope**: Single-restaurant operational flow, one frontend app, manual design review across the main screens

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The solution passes the constitution because it keeps the feature focused on visual clarity, accessibility, mobile-first use, and low-complexity implementation. The design work is intentionally limited to the UI layer and does not add new business flows or backend dependencies.

**Result**: PASS

## Project Structure

### Documentation (this feature)

```text
specs/002-sistema-design-figma/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── app/
├── components/
├── features/
├── lib/
└── styles/
```

**Structure Decision**: A single frontend application will own the UI, component composition, local state, and local persistence. The design system work will be implemented inside the existing React + Tailwind structure, without introducing a new backend or separate design service.

## Complexity Tracking

No constitution violations are required to justify. The design work deliberately stays within the existing frontend app to preserve the small-code and manual-validation principles.
