# Quickstart: Validação do design system

## Goal

Confirm that the application visually follows the referenced Figma design system with high fidelity and keeps a coherent and readable interface across the main screens.

## Prerequisites

- Node.js and npm available in the development environment
- The repository checked out locally
- A browser open to the running app

## Setup

1. Open a terminal in the repository root.
2. Run `npm install` if dependencies are not already installed.
3. Start the app with `npm run dev`.
4. Open the local Vite URL in the browser.

## Manual Validation Scenarios

### 1. Visual consistency review
1. Navigate through the main screens of the app.
2. Confirm that the app keeps the same color palette, spacing rhythm, typography, and surface treatment.
3. Compare the result against the Figma reference link and note any perceptible mismatches.
4. Treat any deviation as a design issue to be corrected until the app visually matches the reference closely.

### 2. Primary action clarity
1. Open each main section of the application.
2. Identify the dominant action for the screen.
3. Confirm that the action stands out clearly and that secondary actions are visually subordinate.

### 3. Mobile and tablet readibility
1. Resize the browser or use device emulation for phone and tablet width.
2. Verify that text remains legible, fields remain usable, and the layout stays uncluttered.
3. Confirm that the primary action remains visible without requiring zoom.

### 4. Regression review for new UI changes
1. Apply a small visual adjustment to one screen.
2. Check whether the updated screen still respects the same shared design language.
3. Confirm that the change does not create a divergent style between screens.

## Expected Outcome

The app should present a consistent, recognizable visual identity throughout the main flow, with one clear primary action per screen and a layout that remains comfortable and readable on mobile-sized devices.
