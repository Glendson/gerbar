# Design System Contract

## Purpose

This contract defines the visual and interaction expectations for the application’s design-system alignment work.

## Design References

- The referenced Figma project is the primary source of truth for the product’s visual identity.
- The React + Tailwind implementation must translate the Figma language into reusable component and token conventions within the current frontend structure.

## Required Visual Rules

### Shared Language
- Use one consistent color palette across the app.
- Reuse the same typography scale and spacing rhythm across all main screens.
- Apply consistent border radius, elevation, and grouping logic to surfaces and panels.

### Interaction Hierarchy
- Each screen must present one primary action that is visually stronger than secondary options.
- Navigation and content density must remain clean and not compete with the main action.

### Responsiveness
- Layouts must stay readable on small mobile screens and on tablet widths.
- Tap targets should remain comfortably sized for older users and quick operator workflows.

### Accessibility
- Keep strong contrast between text and backgrounds.
- Do not rely on color alone to express the action hierarchy.
- Preserve clear labels and legibility under small-screen constraints.

## Implementation Notes

- New visual adjustments should be made in shared component styles wherever possible.
- Screen-specific special cases should be documented and kept minimal.
- The product should continue to favor small, readable modules rather than a larger design-system framework.
