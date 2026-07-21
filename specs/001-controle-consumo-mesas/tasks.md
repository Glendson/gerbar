# Tasks: Controle de Consumo de Mesas

**Input**: Design documents from `/specs/001-controle-consumo-mesas/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Validation**: Manual verification in the running product. Automated tests are intentionally out of scope for this version.

**Organization**: Tasks are grouped by user story to enable independent implementation and manual validation.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create the frontend project structure in `src/app/`, `src/components/`, `src/features/`, `src/lib/`, and `src/styles/`
- [X] T002 Initialize a React + TypeScript web app with TailwindCSS and the minimal production build configuration
- [X] T003 [P] Configure the Tailwind pipeline, base styles, and responsive mobile-first layout defaults in `tailwind.config.ts` and `src/styles/index.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before any user story can be implemented

- [X] T004 Create the app bootstrap and root rendering entry in `src/main.tsx`
- [X] T005 [P] Implement the browser persistence layer in `src/lib/storage.ts` for `products`, `tables`, and date-based history data
- [X] T006 [P] Define the shared domain types and data helpers in `src/features/tables/types.ts` and `src/features/products/types.ts`
- [X] T007 Create the main application shell and navigation layout in `src/app/App.tsx`
- [X] T008 Add global state helpers for table totals, product catalog updates, and item quantity changes in `src/lib/state.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Abrir e manter uma mesa com cliente identificado (Priority: P1) 🎯 MVP

**Goal**: Allow a staff member to open a table using the customer name and track the current state of the command.

**Independent Test**: A user can create a new table using a customer name, see it listed as open, and confirm that the total amount starts at zero and updates correctly.

### Manual Validation for User Story 1

- [X] T009 [P] [US1] Open the app on a phone-sized viewport and verify the primary table-creation flow
- [X] T010 [P] [US1] Repeat the same flow on a tablet-sized viewport and confirm readability and tap targets

### Implementation for User Story 1

- [X] T011 [P] [US1] Create the table form UI in `src/components/TableForm.tsx`
- [X] T012 [P] [US1] Create the open-table list component in `src/components/TableList.tsx`
- [X] T013 [US1] Implement the open-table creation action and status update flow in `src/features/tables/tableActions.ts`
- [X] T014 [US1] Implement the table total calculation and table status display in `src/features/tables/tableCalculations.ts`
- [X] T015 [US1] Wire the table form and list into the app layout in `src/app/App.tsx`

**Checkpoint**: At this point, User Story 1 should be fully functional and manually verifiable independently

---

## Phase 4: User Story 2 - Adicionar, ajustar e separar itens consumidos (Priority: P1)

**Goal**: Allow the user to add products, change quantities, and mark items as paid while preserving the remaining table state.

**Independent Test**: A user can add a product to an open table, change the quantity, mark an item as paid, and confirm the table total updates without losing the other items.

### Manual Validation for User Story 2

- [X] T016 [P] [US2] Validate the add-item and quantity-adjustment flow on a phone-sized viewport
- [X] T017 [P] [US2] Confirm the same flow remains clear and easy to use on tablet

### Implementation for User Story 2

- [X] T018 [P] [US2] Create the product selection and quantity UI in `src/components/ProductPicker.tsx`
- [X] T019 [P] [US2] Create the item detail panel in `src/components/TableItemCard.tsx`
- [X] T020 [US2] Implement add-item, quantity increment, quantity decrement, and paid-state behavior in `src/features/tables/itemActions.ts`
- [X] T021 [US2] Update the table detail view to reflect the item status and the live total in `src/components/TableDetail.tsx`
- [X] T022 [US2] Ensure item changes persist to browser local storage through `src/lib/storage.ts`

**Checkpoint**: At this point, User Stories 1 and 2 should both work independently

---

## Phase 5: User Story 3 - Fechar, consultar histórico e controlar o catálogo de produtos (Priority: P2)

**Goal**: Let the administrator maintain the product catalog and review the activity history by day and month.

**Independent Test**: A user can register a product with a price, close a table, and review the day/month history without manual spreadsheet tracking.

### Manual Validation for User Story 3

- [X] T023 [P] [US3] Validate the product-registration flow in the running app on a phone-sized viewport
- [X] T024 [P] [US3] Validate the daily and monthly history review flow on tablet

### Implementation for User Story 3

- [X] T025 [P] [US3] Create the product catalog form UI in `src/components/ProductForm.tsx`
- [X] T026 [P] [US3] Create the history summary view in `src/components/HistoryPanel.tsx`
- [X] T027 [US3] Implement product registration, validation, and catalog persistence in `src/features/products/productActions.ts`
- [X] T028 [US3] Implement day and month history aggregation in `src/features/history/historyService.ts`
- [X] T029 [US3] Add close-table behavior and timestamp capture in `src/features/tables/closeTable.ts`
- [X] T030 [US3] Connect the product catalog and history panels to the main dashboard in `src/app/App.tsx`

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T031 [P] Review and simplify copy, labels, and spacing across all screens for clearer restaurant staff usage
- [X] T032 [P] Remove unused code and keep the module structure small and readable in the source tree
- [X] T033 [P] Run the manual quickstart validation from `specs/001-controle-consumo-mesas/quickstart.md`
- [X] T034 Verify the final mobile-first experience and confirm the app is ready for online static hosting

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational completion
- **Polish (Phase 6)**: Depends on the desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational - independent MVP
- **User Story 2 (P1)**: Can start after Foundational and may integrate with US1 but must remain independently testable
- **User Story 3 (P2)**: Can start after Foundational and may integrate with US1/US2 but must remain independently testable

### Parallel Opportunities

- `T001`, `T002`, `T003` can run in parallel within Setup
- `T005`, `T006`, `T007`, `T008` can run in parallel within Foundational
- `T009` and `T010` can run in parallel for User Story 1 manual validation
- `T011` and `T012` can run in parallel for User Story 1 UI scaffolding
- `T016` and `T017` can run in parallel for User Story 2 manual validation
- `T018` and `T019` can run in parallel for User Story 2 UI scaffolding
- `T023` and `T024` can run in parallel for User Story 3 manual validation
- `T025` and `T026` can run in parallel for User Story 3 UI scaffolding

---

## Parallel Example: MVP Delivery

```bash
# Validate the primary user story manually together:
Task: "Open the app on a phone-sized viewport and verify the primary table-creation flow"
Task: "Repeat the same flow on a tablet-sized viewport and confirm readability and tap targets"

# Scaffold the main UI together with independent files:
Task: "Create the table form UI in src/components/TableForm.tsx"
Task: "Create the open-table list component in src/components/TableList.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Stop and validate manually
5. Deploy or demo only after the MVP is confirmed

### Incremental Delivery

1. Setup + Foundational → foundation ready
2. Add User Story 1 → validate independently → MVP
3. Add User Story 2 → validate independently
4. Add User Story 3 → validate independently
5. Finish with polish and cross-cutting cleanup

### Parallel Team Strategy

1. Team completes Setup + Foundational together
2. Once Foundation is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently
