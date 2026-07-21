# Data Model: Sistema de design do Figma

## Entities

### DesignSystem
- `name`: the visual identity name used by the application
- `source`: the Figma project or reference file that acts as the canonical design input
- `tokens`: visual rules shared across the app, such as colors, spacing, radii, and typography
- `components`: reusable UI patterns that should be implemented consistently

### DesignToken
- `id`: unique token identifier
- `category`: color, spacing, radius, typography, elevation, or interaction state
- `name`: semantic name used in the codebase
- `value`: concrete visual value used by the application
- `usage`: what part of the interface should consume the token

### ComponentVariant
- `id`: unique component variant identifier
- `name`: label of a reusable UI pattern such as primary button, panel, input, or surface
- `rules`: visual constraints for size, hierarchy, interaction emphasis, and spacing
- `screenScope`: which screens or sections should respect the variant

### Screen
- `id`: unique screen or section identifier
- `purpose`: the user task the screen supports
- `primaryAction`: the dominant action that must remain visually clear
- `layoutRules`: constraints about responsiveness and legibility

## Relationships

- A `DesignSystem` owns many `DesignToken` records.
- A `DesignSystem` is implemented through many `ComponentVariant` definitions.
- A `Screen` consumes the shared tokens and component variants to keep the overall visual identity coherent.
- `Screen` instances must avoid conflicting primary-action emphasis across the app.

## Validation Rules

- Every main screen must have a single clearly visible primary action.
- Shared visual tokens must be reused instead of creating screen-specific one-off styles.
- Typography, spacing, and interaction states must remain consistent across the same component family.
- Responsive behavior must preserve readability and touch target clarity on phones and tablets.
- Any new UI revision must remain compatible with the existing design-system language instead of introducing a divergent look.
