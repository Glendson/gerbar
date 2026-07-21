# Quickstart: Controle de Consumo de Mesas

## Goal

Validate that the application can manage restaurant table consumption with a small, mobile-friendly workflow using local browser storage.

## Prerequisites

- A modern browser with internet access to load the hosted web app
- Access to the deployed application URL
- A user account or local access to the admin interface if the app is protected

## Manual Validation Scenarios

### 1. Open the main board and access a table
1. Open the app.
2. Confirm that the active tables are displayed as large square blocks on the main board.
3. Open a table by tapping the square representing the customer.
4. Confirm that a modal or detail panel opens with the customer name, item list, and current total.

### 2. Register a product via modal
1. Use the dedicated product button from the main interface.
2. Open the product-registration modal.
3. Enter a product name and a price in euro.
4. Confirm that the product is stored and becomes available to the active table flow.

### 3. Add products to a table
1. Select an active table from the board.
2. Add one or more products with quantities through the touch-first action area.
3. Confirm that the table total updates immediately and the modal reflects the newly added items.

### 4. Adjust quantities and mark items as paid
1. Increase or decrease the quantity of an item.
2. Mark a specific item as paid.
3. Confirm that the total reflects the current state and the item remains in the table history.

### 5. Close a table and review separated history
1. Close a table from its detail modal.
2. Confirm that the table disappears from the main operating board.
3. Open the daily history view and confirm the closed table appears there.
4. Open the monthly history view and confirm that the reporting is separate from the daily flow.

### 6. Reopen from history
1. Find a closed table in the daily history view.
2. Use the reopen action from that historical entry.
3. Confirm that the table returns to the active board and can continue being managed normally.

## Expected Outcome

The user can complete the day-to-day restaurant table workflow with minimal steps, all inside a single frontend app, without a separate database in this version.
