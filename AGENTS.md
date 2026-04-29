# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project context
- This is a single Next.js 16 App Router site (TypeScript + Tailwind CSS v4) for a contractor business profile and lead capture experience.
- The app is currently frontend-only; there is no backend API layer in this repo.
- Much of the business content is intentionally placeholder/demo data and should be replaced with verified client data before production launch.

## Common commands
Run from the repository root.

- Install dependencies: `npm install`
- Start local dev server: `npm run dev`
- Create production build: `npm run build`
- Start production server locally: `npm run start`
- Lint project: `npm run lint`

### Targeted validation commands
- Lint a specific file: `npx eslint src/app/page.tsx`
- Type-check without emitting: `npx tsc --noEmit`

### Tests
- There is currently no test runner or test script configured in `package.json`, and no test files in the repository.
- If tests are introduced, add explicit npm scripts and update this file with:
  - full-suite command
  - single-test command (file or pattern-based)

## High-level architecture
### 1) Content model is centralized
- `src/content/site.ts` is the primary content/config source for:
  - navigation
  - hero text and quick-action metadata
  - services/projects/certificates/tender capabilities
  - gallery entries
  - contact metadata (phone/email/WhatsApp links)
- Pages and components consume this file directly, so most copy/data changes should start there rather than editing page JSX first.

### 2) App shell and reusable UI primitives
- `src/app/layout.tsx` wraps all routes with `SiteFrame` from `src/components/site.tsx`.
- `src/components/site.tsx` contains shared layout/presentation building blocks (`PageSection`, `SectionHeading`, cards, CTA, contact panel) plus global shell pieces (header/footer/mobile contact bar).
- Route pages in `src/app/**/page.tsx` mostly compose these shared primitives with content arrays from `src/content/site.ts`.

### 3) Homepage hero is intentionally decomposed
- Hero implementation is split across `src/components/hero/`:
  - `HeroShell` orchestrates sections
  - `BackgroundLayer` handles layered visual treatment
  - `ActionBar`, `HeroContent`, `QuickActionCard`, `TopUtilityBar` each own a specific hero concern
- This separation is important when iterating hero visuals/copy: prefer editing the focused hero subcomponent rather than expanding `src/app/page.tsx`.

### 4) Styling system
- Global design tokens and utility component classes live in `src/app/globals.css`.
- Tailwind is used alongside custom CSS variables/classes (`--primary`, `--accent`, `.section-card`, `.button-*`, etc.).
- Typography is configured in `src/app/layout.tsx` with `Inter` (body), `Outfit` (headings), and `IBM Plex Mono`.

### 5) Routing and metadata
- Route-level metadata is defined in each page file (`src/app/**/page.tsx`) and uses `siteInfo.brandName` from `src/content/site.ts`.
- `src/app/sitemap.ts` defines the sitemap routes and currently uses a hardcoded base URL (`https://example-contractor-site.vercel.app`); update this when deploying under a real domain.

## Repo-specific implementation notes
- Keep wording aligned with the existing positioning: the site presents an independent contractor/execution partner and avoids implying official government ownership.
- Contact flow is WhatsApp-first: `src/components/contact/LeadForm.tsx` generates a prefilled WhatsApp message from form state and opens it in a new tab.
- PR validation expectations are documented in `.github/pull_request_template.md` and currently require `npm run lint` and `npm run build`.
