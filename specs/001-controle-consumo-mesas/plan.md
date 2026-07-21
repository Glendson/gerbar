# Implementation Plan: Controle de Consumo de Mesas

**Branch**: `001-controle-consumo-mesas` | **Date**: 2026-07-21 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-controle-consumo-mesas/spec.md`

## Summary

A aplicação será entregue como um frontend web em React + TypeScript com TailwindCSS, com foco em uma tela principal touch-first para restaurante. A jornada principal será abrir a mesa pelo nome do cliente, visualizar as mesas como blocos quadrados, abrir o detalhe em modal, adicionar produtos, ajustar quantidades, marcar itens como pagos, fechar a mesa para remover a mesa ativa da tela principal e manter o histórico diário e mensal separados. A persistência será cliente-local com armazenamento no navegador, sem banco de dados separado nesta versão.

## Technical Context

**Language/Version**: TypeScript 5.x, React 18/19, Vite

**Primary Dependencies**: React, ReactDOM, TailwindCSS, Vite, localStorage persistence

**Storage**: Browser local storage with JSON state, no separate database in v1

**Validation**: Manual verification in the running product on mobile and tablet layouts

**Target Platform**: Web app accessible online through static hosting

**Project Type**: Web application

**Performance Goals**: Fast touch-driven operations for a small restaurant workflow with a compact data set and clear visual scanning

**Constraints**: No backend service or database in this version, mobile-first and accessible UI, clean and low-complexity interaction model, euro currency for all pricing labels and summaries

**Scale/Scope**: Single-restaurant daily usage, one user or small team, browser-local operational data

**UX Decisions**:
- Use square table cards on the main board so staff can scan and open a mesa with a single tap.
- Use modal-based detail and product registration flows to keep the main board simple and reduce navigation friction.
- Separate day history from month history so closed tables leave the active board and remain reviewable by period.
- Reopen a closed table from its historical entry so the command can continue when needed.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The solution satisfies the constitution because it keeps the product simple, readable, mobile-first, and easy to validate manually.

**Result**: PASS

## Project Structure

### Documentation (this feature)

```text
specs/001-controle-consumo-mesas/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
└── tasks.md
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
src/
├── app/
├── components/
├── features/
├── lib/
└── styles/
```

**Structure Decision**: A single frontend application will own the UI, product catalog, table operations, and local persistence logic. No backend service or separate database is included in this plan.

## Complexity Tracking

No constitution violations are required to justify. The design intentionally rejects a backend/database split to preserve a small, low-complexity release.
