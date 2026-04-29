# Architecture Notes

## Purpose

The website is designed for a contractor or execution partner working around UPPCL-related and utility-sector projects. The implementation intentionally avoids representing the business as an official government entity.

## Core Architectural Decisions

### 1. Content-Driven Site Data

Shared business content lives in `src/content/site.ts`.

This keeps:

- services
- projects
- certifications
- contact metadata
- gallery categories
- hero content

in one place, so the UI can be updated without chasing copy across multiple components.

### 2. Reusable Presentation Components

Shared UI patterns live in `src/components/site.tsx`.

This file provides:

- section wrappers
- headings
- cards
- CTA surfaces
- contact presentation blocks
- site shell structure

### 3. Layered Hero System

Homepage hero components live in `src/components/hero/`.

These are separated into:

- background treatment
- action utility bar
- main hero content
- quick-action panel
- top utility strip

This makes hero refinement easier without rewriting the homepage page file.

### 4. Page-by-Page App Router Structure

Each page in `src/app/` is route-based and static-friendly. The current site is intentionally simple, fast, and easy to deploy for an MVP.

## Visual System

The current visual system uses:

- deep slate and navy foundations
- restrained electric-blue accents
- white and soft-gray content surfaces
- `Outfit` for headings
- `Inter` for body text

## Operational Notes

- Sensitive business records should not be fully exposed publicly
- Official tender notices should be referenced through official portals
- Business placeholders should be replaced before launch
- Contact and company-profile flows are prepared for future backend integration
