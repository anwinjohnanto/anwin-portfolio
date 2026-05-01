# Implementation TODO

## ✅ Done
- [x] Initialize Next.js project (TypeScript, Tailwind, App Router)
- [x] `src/app/globals.css` — design tokens, keyframes, noise overlay, base reset
- [x] `src/app/layout.tsx` — fonts (Playfair Display, JetBrains Mono, Space Grotesk), metadata
- [x] Install framer-motion
- [x] `CLAUDE.md` / `AGENTS.md` — project context and coding rules

---

## Foundation
- [x] `src/lib/data.ts` — all typed content (SKILLS, EXPERIENCE, PROJECTS, AI_CARDS, JOURNEY, CONTACT_LINKS, OPEN_TO)

## UI Primitives
- [x] `src/components/ui/SectionLabel.tsx` — "SYS.01 / About" format
- [x] `src/components/ui/RevealOnScroll.tsx` — Framer Motion whileInView wrapper
- [x] `src/components/ui/CustomCursor.tsx` — cyan dot + ring with RAF lerp (full impl)
- [x] `src/components/ui/JourneyStrip.tsx` — horizontal career timeline (About section)

## Layout
- [x] `src/components/layout/Navbar.tsx` — fixed, blur backdrop, cyan logo, 5 nav links (full impl)
- [x] `src/components/layout/Footer.tsx` — border-top, copyright + tagline

## Sections
- [x] `src/components/sections/Hero.tsx` — 2-col, staggered entrance, stats grid, blueprint bg
- [x] `src/components/sections/About.tsx` — sticky left, JourneyStrip, bio paragraphs
- [x] `src/components/sections/Skills.tsx` — 3-col skill group cards
- [x] `src/components/sections/Experience.tsx` — tabbed layout, 4 roles
- [x] `src/components/sections/Projects.tsx` — 2-col grid, 5 cards, #05 full-width
- [x] `src/components/sections/AIApproach.tsx` — 3-col Manual/Hybrid/Agentic cards
- [x] `src/components/sections/Contact.tsx` — links left, availability right

## Assembly
- [x] `src/app/page.tsx` — assemble all sections in order
- [x] Add `Footer` to `src/app/layout.tsx`

## Polish
- [ ] Responsive pass — tablet (≤1024px) and mobile (≤600px)
