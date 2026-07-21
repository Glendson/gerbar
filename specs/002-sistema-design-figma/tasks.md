# Tasks: Sistema de design do Figma

**Input**: Design documents from `/specs/002-sistema-design-figma/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Validation**: This feature is UI-focused, so the primary validation is manual review in the running app rather than automated tests.

**Organization**: Tasks are grouped by user story so each story can be implemented and manually validated independently.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the existing frontend structure and identify the reusable visual surfaces that will be aligned to the Figma design system.

- [X] T001 Review the current frontend entry points in `src/app/App.tsx` and `src/styles/index.css` to confirm the shared styling and layout anchor points.
- [X] T002 [P] Audit the main reusable screens and widgets under `src/components/` to map the component families that must share the same visual language.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the shared token and hierarchy rules that all user stories depend on.

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel.

- [X] T003 Define the shared visual token layer in `tailwind.config.ts` and `src/styles/index.css` so color, spacing, typography, and surface treatment follow one consistent design system.
- [X] T004 [P] Standardize the primary interaction hierarchy in the main application surfaces so each screen has one dominant action and secondary actions stay visually subordinate in `src/app/App.tsx` and the shared component files under `src/components/`.
- [X] T005 [P] Confirm responsive behavior and touch-target clarity for phone and tablet layouts by updating shared layout rules in `src/styles/index.css` and the main screen composition in `src/app/App.tsx`.

---

## Phase 3: User Story 1 - Usar um design system coerente no app (Priority: P1) 🎯 MVP

**Goal**: Make the app present one recognizable visual identity across its main screens.

**Independent Test**: Open the running app and verify that the main screens keep the same color palette, spacing rhythm, surface treatment, typography, and primary-action hierarchy.

### Manual Validation for User Story 1

- [X] T006 [P] [US1] Open the running app on a phone-sized viewport and verify that the main screens share the same design language without visual drift.
- [X] T007 [P] [US1] Repeat the same review on a tablet-sized viewport and confirm readability, spacing clarity, and touch targets remain comfortable.

### Implementation for User Story 1

- [X] T008 [P] [US1] Normalize the shared visual tokens and typography scale in `src/styles/index.css` so the app uses a single consistent visual rhythm.
- [X] T009 [US1] Align the top-level application layout and screen composition in `src/app/App.tsx` to the shared spacing and hierarchy rules.
- [X] T010 [US1] Update the primary form and list entry points to follow the same spacing and surface treatment in `src/components/TableForm.tsx`, `src/components/ProductForm.tsx`, and `src/components/TableList.tsx`.
- [X] T011 [US1] Apply the same visual treatment to detail and activity surfaces in `src/components/TableDetail.tsx` and `src/components/HistoryPanel.tsx` so the app keeps a coherent identity across all major sections.
- [X] T012 [US1] Verify that each main screen still exposes a single dominant action clearly, without competing emphasis, in `src/components/ProductPicker.tsx`, `src/components/TableForm.tsx`, and `src/components/TableDetail.tsx`.

**Checkpoint**: At this point, User Story 1 should be fully functional and manually verifiable independently.

---

## Phase 4: User Story 2 - Manter o produto alinhado exatamente ao design oficial da Figma (Priority: P2)

**Goal**: Remove perceptible divergence from the reference Figma design and keep the implementation faithful to the same visual rules across future adjustments.

**Independent Test**: Compare the running app with the Figma reference and confirm that the UI respects the same tokens, composition patterns, and hierarchy without incompatible deviations.

### Manual Validation for User Story 2

- [X] T013 [P] [US2] Compare the running app against the Figma project on a phone-sized viewport and note any visible mismatch or interpretation drift.
- [X] T014 [P] [US2] Repeat the comparison on a tablet-sized viewport and confirm that the same design rules remain stable and readable.

### Implementation for User Story 2

- [X] T015 [P] [US2] Refine the shared component style rules in `src/styles/index.css` so the visual language matches the Figma reference rather than relying on screen-specific overrides.
- [X] T016 [US2] Review and reconcile screen-specific visual adjustments in `src/app/App.tsx` and the main component files under `src/components/` to remove unnecessary divergence from the reference design.
- [X] T017 [US2] Finalize the visual alignment of key interaction surfaces in `src/components/ProductForm.tsx`, `src/components/TableForm.tsx`, and `src/components/TableDetail.tsx` so buttons, panels, and content groups share the same hierarchy and spacing rhythm.
- [X] T018 [US2] Document any minimal screen-specific exceptions in the shared implementation notes and keep them as narrow as possible in `src/styles/index.css` and the related component files.

**Checkpoint**: At this point, User Stories 1 and 2 should both work independently and remain aligned with the reference design system.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Improve consistency across the overall UI and validate the manual regression path.

- [X] T019 [P] Run the manual validation checklist from `specs/002-sistema-design-figma/quickstart.md` against the updated UI and capture any remaining mismatch for follow-up cleanup.
- [X] T020 [P] Run `npm run build` and confirm the frontend remains stable after the visual-system alignment changes.
- [X] T021 Refactor and simplify duplicate visual rules in `src/styles/index.css` and the affected component files so the design system remains maintainable and easy to extend.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion and blocks all user story work.
- **User Stories (Phase 3 and Phase 4)**: Depend on Foundational completion and can be implemented in parallel if the team has capacity.
- **Polish (Phase 5)**: Depends on the completion of the desired user stories.

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Phase 2 and does not depend on User Story 2.
- **User Story 2 (P2)**: Can start after Phase 2 and should remain independently testable against the Figma reference.

### Parallel Opportunities

- Phase 1 tasks can run in parallel.
- Phase 2 tasks marked `[P]` can run in parallel.
- Manual validation tasks within each user story can run in parallel.
- Shared token and component cleanup work can be done in parallel with story implementation if the relevant files are kept isolated.

---

## Parallel Example: User Story 1

```bash
# Validate the story manually in parallel:
Task: "Open the running app on a phone-sized viewport and verify the shared visual identity"
Task: "Repeat the same review on a tablet-sized viewport and confirm readability and touch targets"

# Apply shared style updates in parallel:
Task: "Normalize shared typography and spacing tokens in src/styles/index.css"
Task: "Review the main form/list surfaces under src/components/ for consistent spacing and hierarchy"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. Stop and validate the story manually in the running app.
5. Only then proceed to User Story 2 refinements.

### Incremental Delivery

1. Setup + Foundation establish one shared UI language.
2. Story 1 aligns the app to the same design system across the main screens.
3. Story 2 tightens fidelity to the Figma reference and removes any remaining visual drift.
4. Final polish confirms the update is stable, maintainable, and ready for review.
