# Portfolio Website Plan — Anwin Anto (Next.js)

---

## Who Is This Portfolio For?

Anwin is not a typical developer-portfolio archetype. His story has three distinct chapters:

1. **Mechanical Engineer** (APJ Abdul Kalam Tech University) — trained to think in systems, tolerances, and constraints. Not pixels, not strings.
2. **Content & Media Operations** (Windfall, 2022–23) — a cross-disciplinary phase that gave him business context most engineers lack.
3. **Software Engineer → Technical Team Lead** (2023–Present) — built production systems from scratch, hired a team from zero, and now sits at the rare intersection of *deep manual infrastructure* and *directed AI velocity*.

His own words define the thesis: *"Before software, I was a Mechanical Engineer. That background trained me to think in systems, not just code."* And: *"Manual craft. AI velocity. Full spectrum."*

The portfolio must communicate **rare depth** — not a generalist, not a tutorial builder. Someone who architects infrastructure, leads engineers, and simultaneously directs agentic AI workflows. That combination does not need ornamentation. It needs *authority*.

---

## Design Rationale

### The Problem with the Reference Design

The `reference.html` uses dark navy + amber — competent, but generic. Amber is overused in developer portfolios. It reads as "aesthetic-first" rather than "engineer-first." The typography choices are strong (Playfair + JetBrains Mono), but the body font (Mulish) is too soft for the persona.

### The Redesigned Direction: **"Infrastructure Noir"**

A systems architect's portfolio should feel like looking at a high-fidelity architecture diagram — precise, layered, purposeful. Every design decision below is derived from Anwin's actual background:

| Design Principle | Derived From |
|---|---|
| Deep void backgrounds (near-black, blue-cast) | Server environments, IDE dark themes, AWS console |
| Cyan as primary accent | Cloud/data-flow aesthetics; contrasts warm engineering amber |
| Amber retained as secondary | The "craft" side — mechanical warmth, leadership, human judgment |
| `Space Grotesk` body font | Geometric precision; reads as technical but not cold |
| Blueprint grid in hero | Engineering drawing heritage; systems thinking metaphor |
| Section "journey" narrative | Non-linear career path is the USP — design should surface it |
| No decorative gradients | Production engineers ship clean, not flashy |

---

## Design System

### Color Tokens

```css
:root {
  /* Backgrounds — depth layers like infrastructure tiers */
  --bg:        #04060d;   /* void black — deepest layer */
  --bg2:       #07090f;   /* section alternate */
  --surface:   #0c1220;   /* card/panel base */
  --surface2:  #111929;   /* card hover state */
  --border:    #182438;   /* subtle blue-grey */

  /* Primary Accent — Cyan: cloud, data flow, precision */
  --cyan:      #06b6d4;
  --cyan-dim:  rgba(6, 182, 212, 0.12);
  --cyan-glow: rgba(6, 182, 212, 0.05);

  /* Secondary Accent — Amber: engineering craft, leadership, warmth */
  --amber:     #f59e0b;
  --amber-dim: rgba(245, 158, 11, 0.12);

  /* Tertiary — Green: availability, AI velocity, success states */
  --green:     #10b981;

  /* Text */
  --text:      #c8d8ee;   /* softer than pure white — easier to read long-form */
  --muted:     #3d5470;
  --dim:       #1a2e48;
}
```

**Why these specific values:**
- `--bg: #04060d` — deeper than reference's `#080b12`. Creates more perceived depth when surfaces layer on top.
- `--cyan: #06b6d4` — Tailwind's `cyan-500`. Evokes AWS/cloud tooling, data pipelines, precision. Not the generic amber that populates 60% of developer portfolios.
- `--amber: #f59e0b` — Slightly warmer than reference's `#f5a623`. Used sparingly as the "human judgment" accent (CTAs, italic headings, leadership labels).
- `--text: #c8d8ee` — Softer blue-white. Reads better on deep backgrounds vs `#e2e8f4`.

### Typography

| Role | Font | Weights | Rationale |
|---|---|---|---|
| Display headings | `Playfair Display` | 700, 900, italic | Retained — classical authority against mono. Creates tension. |
| Labels / code / tags | `JetBrains Mono` | 300, 400, 500, 700 | Retained — essential for the IDE/terminal register. |
| Body text | `Space Grotesk` | 300, 400, 500, 600 | **Replaces Mulish.** Geometric precision. Reads as "systems architect" not "creative portfolio." |

Load all three via `next/font/google`.

### Visual Motifs

**1. Blueprint Grid (Hero)**
Replace the amber dot-grid from reference with a cyan hairline grid at 4% opacity — evokes technical drawings and engineering schematics:
```css
background-image:
  linear-gradient(rgba(6, 182, 212, 0.04) 1px, transparent 1px),
  linear-gradient(90deg, rgba(6, 182, 212, 0.04) 1px, transparent 1px);
background-size: 48px 48px;
```

**2. Corner Frame Markers on Cards**
Instead of full card borders, use thin L-shaped corner markers (top-left + bottom-right). Evokes precision engineering drawings. Implementation: `::before` / `::after` pseudo-elements with `border-top + border-left`.

**3. Cyan Cursor (not amber)**
The cursor dot and ring use `--cyan` instead of `--amber`. The ring lerp is retained. Amber is reserved for editorial accents — the cursor as a UI element should use the primary accent.

**4. Section Label Format: `SYS.01 / About`**
Prefix section labels with `SYS.` in a dimmer color, then the number. Subtle nod to systems thinking without being heavy-handed.

**5. Noise Texture**
Retained from reference — SVG fractalNoise overlay at `opacity: 0.025`. Adds physical depth.

**6. Clip-path CTA Button**
Retained — the angled corner is a strong signature element:
```css
clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
```
Primary button uses `--cyan` background (not amber) with dark text. Secondary keeps transparent + border.

---

## Sections & Copy

### Nav
- Logo: `AA / Portfolio` → keep, JetBrains Mono, **cyan**
- Links: About · Skills · Experience · Projects · Contact

### Hero
Two-column layout retained. Changes:

**Hero tag** (above name): Replace "Available for new opportunities" with:
> `Mechanical Eng → Tech Lead · Building systems that ship`

This surfaces the non-linear journey immediately.

**Name**: `ANWIN` / `Anto.` (Anto in italic Playfair amber — retained)

**Subtitle line**:
```
Technical Team Lead  ·  Full Stack Developer
Serverless & Cloud Specialist  ·  Thrissur / Bengaluru
Node.js · AWS · React · Keycloak · HubSpot
```

**Stats grid** (2×2 — retained):
- `2+` Years Hands-on
- `6` Engineers Led
- `5+` Live Projects
- `40%` Doc Time Saved

**CTA buttons**: "Get in Touch" (cyan primary) + "View Work" (ghost secondary)

**Scroll indicator**: Retain animated cyan line + "Scroll to explore"

### About (`SYS.01 / About`)
**Section heading**:
> Systems thinking,
> engineered
> *in production.*

**Journey Strip** — NEW element, unique to Anwin:
A horizontal timeline showing career arc, placed between the heading and meta grid:
```
[2020]──────[2022]──────[2023]──────[2024]──────[Now]
 Mech Eng    Content     Software    Tech Lead    →
 Trainee     Ops         Engineer
```
Implemented as a simple flex row with amber dots and JetBrains Mono labels. This is the single most differentiating element of his story — it should be visible.

**Meta grid** (2×2): Location · Email · LinkedIn · Phone — retained.

**Bio text**: Retained verbatim from reference — it is well-written.

### Skills (`SYS.02 / Skills`)
**Section heading**:
> The full stack,
> *owned end-to-end.*

6-card grid (3-col → 2-col → 1-col). Cards retain ghost number, icon, tags.

**Hover state change**: Cards on hover show `--cyan` border (not amber) — primary accent is cyan here since skills are about technical capability, not editorial warmth.

### Experience (`SYS.03 / Experience`)
Tab layout retained. Left nav → right panel.

**Change**: Active tab indicator uses a `--cyan` left-border (not amber). Company name in active state is cyan. The amber in this section is reserved only for bullet-label chips.

4 roles unchanged.

### Projects (`SYS.04 / Projects`)
**Section heading**:
> Systems built.
> *Not tutorials.*

(His own words from the About bio — creates a through-line in the narrative.)

5 project cards retained. Last card spans full width (#05 VPC Infrastructure).

**Arrow icon** rotates 45° on hover — retained. Becomes **cyan** on hover (not amber).

### Engineering Approach (`SYS.05 / Spectrum`)
**Section heading**:
> Manual craft.
> AI velocity.
> *Full spectrum.*

3-column card grid retained. Badge colors:
- **Manually Built** → `--cyan` (not blue) — precision, deep ownership
- **Human-Led, AI-Assisted** → `--amber` — human judgment
- **AI-Agentic (Directed)** → `--green` — velocity, future

### Contact (`SYS.06 / Contact`)
**Heading**:
> Let's build
> something *real.*

Content unchanged. Availability dot: **cyan** pulse (not green — green is for AI velocity). Left panel links: Email, Phone, LinkedIn. Right panel: open-to list + location info.

### Footer
```
© 2026 Anwin Anto · All rights reserved          Built with precision · aanto6151@gmail.com
```

---

## File Structure

```
src/
  app/
    layout.tsx            ← fonts (Space Grotesk, Playfair Display, JetBrains Mono), metadata, cursor
    page.tsx              ← section assembly
    globals.css           ← CSS variables, keyframes, noise overlay, base reset
  components/
    layout/
      Navbar.tsx          ← fixed, blur backdrop, cyan logo
      Footer.tsx
    ui/
      CustomCursor.tsx    ← client component — cyan dot + ring, RAF lerp
      SectionLabel.tsx    ← "SYS.01 / About" format
      RevealOnScroll.tsx  ← Framer Motion whileInView wrapper
      JourneyStrip.tsx    ← horizontal career timeline (About section only)
    sections/
      Hero.tsx
      About.tsx
      Skills.tsx
      Experience.tsx      ← client component (tab state)
      Projects.tsx
      AIApproach.tsx
      Contact.tsx
  lib/
    data.ts               ← all typed content
  hooks/
    useCustomCursor.ts
```

---

## Data File: `src/lib/data.ts`

```ts
SKILLS: SkillGroup[]        // 6 groups: name, iconKey, tags[]
EXPERIENCE: Role[]          // 4 roles: company, title, period, location, bullets[]{label, text}
PROJECTS: Project[]         // 5: num, title, desc, tech[], fullWidth?
AI_CARDS: AICard[]          // 3: type ('manual'|'hybrid'|'agentic'), title, items[]
JOURNEY: JourneyStep[]      // 5: year, label, sublabel — for the About timeline strip
CONTACT_LINKS: Link[]       // email, phone, linkedin
OPEN_TO: string[]           // 5 role types
```

---

## Dependencies

```bash
npm install framer-motion
```

---

## Implementation Order

1. `globals.css` — CSS variables, keyframes (`fadeUp`, `fadeIn`, `scrollPulse`, `pulse`), noise overlay
2. `layout.tsx` — 3 fonts, metadata, `cursor: none` body
3. `lib/data.ts` — all content
4. `components/ui/` — SectionLabel, RevealOnScroll, CustomCursor, JourneyStrip
5. `components/layout/` — Navbar, Footer
6. Sections: Hero → About → Skills → Experience → Projects → AIApproach → Contact
7. `page.tsx` — assembly
8. Responsive pass: 1024px (tablet) + 600px (mobile)

---

## Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| `≤1024px` | Hero stacks to 1-col; About stacks; Skills 2-col; Experience nav becomes horizontal chips; Projects 1-col; AI 2-col; Contact stacks |
| `≤600px` | Nav links hidden; Hero stats 2×2; Skills 1-col; AI 1-col; About meta 1-col; Hero CTAs stack |

---

## Verification

- `npm run dev` → all 7 sections visible at localhost:3000
- Cursor: cyan dot follows mouse, ring lags with lerp
- About: Journey Strip renders with 5 steps
- Experience: tab switching shows correct panel
- Scroll reveals: all `.reveal` elements animate on scroll
- Project #05: spans full grid width
- `npm run build` → zero TypeScript errors
- Mobile 375px: no horizontal overflow
