# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project context
- This is a single Next.js 16 App Router site (TypeScript + Tailwind CSS v4) for a contractor business profile and lead capture experience.
- The app is currently frontend-only; there is no backend API layer in this repo.
- Business content is currently placeholder/demo data and should be replaced with verified client data before production launch.

## Common commands
Run from the repository root.

- Install dependencies: `npm install`
- Start local dev server: `npm run dev`
- Create production build: `npm run build`
- Start production server locally: `npm run start`
- Lint project: `npm run lint`
- Type-check without emitting: `npx tsc --noEmit`

### Targeted validation commands
- Lint a specific file: `npx eslint src/app/page.tsx`

### Tests
- No automated test suite is configured in this repository right now.
- If tests are added, define npm scripts and update this file with both full-suite and single-test commands.

## PR readiness checks
- Before opening or merging a PR, run:
  - `npm run lint`
  - `npm run build`
- This matches the validation checklist in `.github/pull_request_template.md`.

## Source-of-truth map
- Global shell/navigation/footer/layout wrappers: `src/components/site.tsx`
- Route composition and page-level metadata: `src/app/**/page.tsx`
- Shared business copy/data/links/navigation arrays: `src/content/site.ts`
- Homepage hero composition and visuals: `src/components/hero/*`
- Contact form behavior (WhatsApp-prefilled flow): `src/components/contact/LeadForm.tsx`
- Global tokens and reusable visual utility classes: `src/app/globals.css`

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
- `src/app/sitemap.ts` defines the sitemap routes.

## Common edit workflows
- Update brand/contact/navigation/copy/content lists: edit `src/content/site.ts` first.
- Update reusable section/card/CTA/header/footer structure: edit `src/components/site.tsx`.
- Update homepage hero text/layout/layers/actions: edit files under `src/components/hero/`.
- Update shared visual language (colors, spacing primitives, button/card utility classes): edit `src/app/globals.css`.
- Update contact form submission behavior: edit `src/components/contact/LeadForm.tsx`.

## Repo-specific notes
- Keep wording aligned with the existing positioning: the site presents an independent contractor/execution partner and avoids implying official government ownership.
- Contact flow is WhatsApp-first: `src/components/contact/LeadForm.tsx` generates a prefilled WhatsApp message from form state and opens it in a new tab.

## Pre-deployment checklist
- Replace placeholder business details in `src/content/site.ts`.
- Update `baseUrl` in `src/app/sitemap.ts` to the real production domain.
