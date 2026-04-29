# UPPCL Contractor Website

A production-ready Next.js website for an electrical contractor business working across utility, infrastructure, and tender-execution workflows in Uttar Pradesh.

## Overview

This project is structured as a professional business website rather than a generic landing page. The current implementation focuses on:

- institutional trust and credibility
- multi-page company presentation
- services, projects, certificates, and tender-capability storytelling
- lead-generation oriented contact flows
- image-backed homepage sections and a layered hero experience

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS

## Routes

- `/`
- `/about`
- `/services`
- `/projects`
- `/certificates`
- `/tender-capabilities`
- `/gallery`
- `/contact`
- `/sitemap.xml`

## Project Structure

```text
src/
├── app/
├── components/
│   ├── hero/
│   └── icons.tsx
├── content/
│   └── site.ts
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run build
```

## Current Status

- Multi-page MVP implemented
- Institutional homepage hero implemented
- Real image assets integrated
- Global typography and visual hierarchy refined
- Production build verified

## Next Recommended Milestones

1. Replace placeholder firm details with client-approved business data
2. Add live contact form handling
3. Expand project portfolio with real case entries
4. Improve page-level SEO metadata
5. Add deployment and analytics configuration
