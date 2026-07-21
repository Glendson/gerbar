# Data Model: Controle de Consumo de Mesas

## Entities

### Mesa
- `id`: unique identifier for the table record
- `customerName`: customer or table name used as the command identifier
- `status`: `open` or `closed`
- `openedAt`: current date/time when the table was opened
- `closedAt`: current date/time when the table was closed, if applicable
- `items`: array of consumption items linked to the table
- `total`: derived total amount for the table
- `historyView`: derived from the current state, indicating whether the table is active on the main board or belongs to a historical period

### Produto
- `id`: unique identifier for the product
- `name`: product name
- `price`: product unit value in euro
- `createdAt`: date/time when the product was registered
- `isActive`: flag to keep the product available or hidden

### ItemConsumo
- `id`: unique identifier for the consumption item entry
- `productId`: reference to the product in the catalog
- `quantity`: number of units ordered
- `unitPrice`: snapshot of the unit price at the time of insertion
- `paid`: boolean indicating whether the item has already been paid
- `createdAt`: date/time when the item was added

### Historico
- `date`: daily or monthly grouping key
- `tables`: list of table records for that period
- `salesTotal`: total revenue for the grouped period
- `view`: `day` or `month`, used to separate operational review from monthly summary review

## Relationships

- A `Mesa` contains many `ItemConsumo` records.
- An `ItemConsumo` points to one `Produto` in the catalog.
- Historical views are derived from `Mesa` and `ItemConsumo` records by date range.
- A closed `Mesa` is removed from the active board and becomes part of the historical period view.
- A historical `Mesa` can be reopened and return to the active board when the user confirms the action.

## Validation Rules

- Product name must be non-empty.
- Product price must be greater than zero and represented in euro.
- Quantity must be positive for a new item.
- A table must always have a customer name when opened.
- The table total must be recalculated automatically after any item change.
- A closed table must not remain on the active main board view.
- Reopening a historical table must restore its operational state without losing historical identity.
