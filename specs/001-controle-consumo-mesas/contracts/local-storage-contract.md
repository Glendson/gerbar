# Local Storage Contract

## Purpose

This contract defines the client-side persistence shape for the first version of the application.

## Storage Keys

- `gerbar.products`: product catalog
- `gerbar.tables`: open and closed table records
- `gerbar.history`: derived monthly and daily summaries, if needed for quick access

## Record Shape

### Products
```json
[
  {
    "id": "string",
    "name": "string",
    "price": 12.5,
    "createdAt": "ISO-8601 timestamp",
    "isActive": true
  }
]
```

### Tables
```json
[
  {
    "id": "string",
    "customerName": "string",
    "status": "open | closed",
    "openedAt": "ISO-8601 timestamp",
    "closedAt": "ISO-8601 timestamp | null",
    "items": [
      {
        "id": "string",
        "productId": "string",
        "quantity": 2,
        "unitPrice": 12.5,
        "paid": false,
        "createdAt": "ISO-8601 timestamp"
      }
    ],
    "total": 25
  }
]
```

## Notes

- All timestamps should be stored in ISO-8601 format.
- The frontend should normalize and validate data on load.
- When the app is hosted online, the browser storage remains client-local and does not require a backend database.
