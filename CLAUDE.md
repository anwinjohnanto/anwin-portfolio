@AGENTS.md

# Anwin Anto — Portfolio (Next.js)

## Project Overview
Personal portfolio for Anwin Anto — Technical Team Lead, Full Stack Developer, Serverless & Cloud Specialist. Theme: **Infrastructure Noir**. See `plan.md` for full design rationale.

## Key Commands
```bash
npm run dev      # dev server at localhost:3000
npm run build    # production build (must pass with zero TS errors)
npm run lint     # ESLint check
```

## Design System

### Color Tokens (defined in `src/app/globals.css`)
| Token | Value | Use |
|---|---|---|
| `--bg` | `#04060d` | Deepest background |
| `--bg2` | `#07090f` | Alternate section bg |
| `--surface` | `#0c1220` | Card / panel base |
| `--surface2` | `#111929` | Card hover state |
| `--border` | `#182438` | All borders |
| `--cyan` | `#06b6d4` | Primary accent — interactive, hover states, cursor, CTA |
| `--cyan-dim` | `rgba(6,182,212,0.12)` | Card badge backgrounds |
| `--amber` | `#f59e0b` | Secondary — italic headings, bullet labels, leadership |
| `--amber-dim` | `rgba(245,158,11,0.12)` | Amber badge backgrounds |
| `--green` | `#10b981` | Availability dot, AI velocity badge |
| `--text` | `#c8d8ee` | Primary text |
| `--muted` | `#3d5470` | Secondary text, labels |
| `--dim` | `#1a2e48` | Ghost numbers, decorative text |

**Rule**: Cyan = primary interactive/technical. Amber = craft/editorial/warmth. Never swap them.

### Fonts
All loaded via `next/font/google`, injected as CSS variables on `<html>`:
- `--font-playfair` → `Playfair Display` (700, 900, italic) — display headings only
- `--font-mono` → `JetBrains Mono` (300, 400, 500, 700) — all labels, tags, nav, code
- `--font-body` → `Space Grotesk` (300, 400, 500, 600) — body text

### Visual Signatures
- **Blueprint grid**: cyan hairlines at 4% opacity (`48px × 48px`) — hero background only
- **Clip-path button**: `polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))`
- **Section labels**: `SYS.01 / About` format — `SYS.` dimmer, number and title in cyan
- **Noise overlay**: `body::after` SVG fractalNoise at `opacity: 0.025`, `pointer-events: none`
- **Custom cursor**: cyan 8px dot + 36px border ring with RAF lerp (client component only)

## File Structure
```
src/
  app/
    layout.tsx          — fonts, metadata, CustomCursor, Navbar
    page.tsx            — section assembly (Hero → About → Skills → Experience → Projects → AIApproach → Contact → Footer)
    globals.css         — CSS variables, keyframes, noise overlay
  components/
    layout/
      Navbar.tsx        — fixed, blur backdrop
      Footer.tsx
    ui/
      CustomCursor.tsx  — 'use client', RAF lerp
      SectionLabel.tsx  — "SYS.XX / Title" format
      RevealOnScroll.tsx— Framer Motion whileInView
      JourneyStrip.tsx  — career timeline in About (2020→Now)
    sections/
      Hero.tsx
      About.tsx
      Skills.tsx
      Experience.tsx    — 'use client', tab state
      Projects.tsx
      AIApproach.tsx
      Contact.tsx
  lib/
    data.ts             — all typed content (SKILLS, EXPERIENCE, PROJECTS, AI_CARDS, JOURNEY, etc.)
  hooks/
    useCustomCursor.ts
```

## Content Source
All copy lives in `src/lib/data.ts`. Do not hardcode content in components. The `reference.html` at the project root is the source of truth for all text, but the **redesigned copy** in `plan.md` takes precedence for headings and hero tag.

## Sections & Headings (final copy)
| Section | Label | Heading |
|---|---|---|
| About | `SYS.01 / About` | "Systems thinking, engineered *in production.*" |
| Skills | `SYS.02 / Skills` | "The full stack, *owned end-to-end.*" |
| Experience | `SYS.03 / Experience` | — (no section heading, just the tab layout) |
| Projects | `SYS.04 / Projects` | "Systems built. *Not tutorials.*" |
| Spectrum | `SYS.05 / Spectrum` | "Manual craft. AI velocity. *Full spectrum.*" |
| Contact | `SYS.06 / Contact` | "Let's build something *real.*" |

Hero tag: `Mechanical Eng → Tech Lead · Building systems that ship`
