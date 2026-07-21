# Quickstart: Controle de Consumo de Mesas

## Goal

Validate that the application can manage restaurant table consumption with a small, mobile-friendly workflow using local browser storage.

## Prerequisites

- A modern browser with internet access to load the hosted web app
- Access to the deployed application URL
- A user account or local access to the admin interface if the app is protected

## Manual Validation Scenarios

### 1. Open a table
1. Open the app.
2. Enter a customer name.
3. Create a new table.
4. Confirm that the table appears in the open list with the customer name and an initial total of zero.

### 2. Add products to a table
1. Register at least one product in the product catalog.
2. Open a table.
3. Add one or more products with quantities.
4. Confirm that the table total updates immediately.

### 3. Adjust quantities and mark items as paid
1. Increase or decrease the quantity of an item.
2. Mark a specific item as paid.
3. Confirm that the total reflects the current state and the item remains in the table history.

### 4. Close a table
1. Mark the table as closed.
2. Confirm the table status changes from open to closed.

### 5. Query history
1. Use the daily history view.
2. Switch to the monthly history view.
3. Confirm that the recorded activity is visible for the current period.

## Expected Outcome

The user can complete the day-to-day restaurant table workflow with minimal steps, all inside a single frontend app, without a separate database in this version.
