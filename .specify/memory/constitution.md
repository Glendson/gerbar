<!--
Sync Impact Report
- Version change: 0.0.0 → 1.0.0
- Modified principles: placeholder governance → concrete product and engineering principles
- Added sections: Age-Friendly Simplicity, Mobile-First Responsiveness, Clean & Small Code, Manual Validation, Accessibility & Low Complexity
- Removed sections: template placeholders and test-first expectations
- Templates requiring updates: ✅ plan-template.md, spec-template.md, tasks-template.md
- Follow-up TODOs: TODO(RATIFICATION_DATE): initial project adoption date not recorded
-->

# Gerbar App Constitution

## Core Principles

### I. Age-Friendly Simplicity
Every screen must present one primary action and one clear message at a time. Labels, menus, buttons, and instructions must use short, plain language, high contrast, and large tap targets so the product remains comfortable for users above 50 years old.

### II. Mobile-First Responsiveness
The product must be designed for mobile devices first and remain fully usable on tablets. Layouts must adapt gracefully to smaller screens without loss of readability, and navigation must avoid dense or hidden information.

### III. Clean and Small Code
All implementation must favor small, readable modules, simple state flows, and minimal abstractions. Complexity must be justified by user value; unnecessary features, framework indirection, and over-engineering are prohibited.

### IV. Manual Validation Over Automated Tests
This project does not require an automated test suite. Validation must be done through direct manual checks in the running application, using a short usability pass on mobile and tablet layouts and a simple review of the changed behavior.

### V. Progressive Delivery
The product must be shipped in the smallest useful version first. New functionality may be added only when it clearly improves usability, clarity, or reliability for the target audience, and any extra complexity must be removed before release if it is not essential.

## Product Constraints

The application must prioritize the following constraints:

- Clear typography, generous spacing, and strong visual contrast
- Touch-friendly interactive elements sized for easy use
- Minimal cognitive load with direct, predictable flows
- No jargon, no unnecessary steps, and no hidden actions
- Functional behavior that works reliably on phones and tablets

## Development Workflow

All work must stay small, reviewable, and easy to understand. Changes should be implemented in narrow increments, verified manually in the app UI, and kept aligned with the simplicity and accessibility principles above.

Automated tests are explicitly out of scope for this project. The required quality gate is direct execution and manual confirmation of the user-visible behavior.

## Governance

This constitution governs the Gerbar app project and supersedes the default placeholder expectations in the Spec Kit templates. Any amendment must include a written rationale, describe the impact on product simplicity and accessibility, and update the project documentation accordingly.

Compliance is reviewed by verifying that each change preserves readability, usability for older adults, small-code discipline, and the absence of unnecessary complexity. If a proposed change introduces a larger code surface or more complex workflows than the user benefit justifies, it must be simplified or rejected.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): initial project adoption date not recorded | **Last Amended**: 2026-07-21
