# Agent Rules — Anwin Anto Portfolio

## Stack
- **Next.js 15** App Router (`src/app/`) — not Pages Router
- **TypeScript** — strict mode, no `any`
- **Tailwind CSS** — utility classes only for layout/spacing; CSS variables (not Tailwind color tokens) for all brand colors
- **Framer Motion** — all scroll animations via `whileInView`; no custom IntersectionObserver

## Critical Rules

### Colors — always use CSS variables, never raw hex
```tsx
// CORRECT
style={{ color: 'var(--cyan)' }}
className="border-[var(--border)]"

// WRONG — breaks theming
style={{ color: '#06b6d4' }}
className="text-cyan-500"
```

### Fonts — always use CSS variable, never class-name directly
```tsx
// CORRECT
style={{ fontFamily: 'var(--font-mono)' }}

// WRONG
className="font-mono"   // this uses Tailwind's default mono stack
```

### Client Components — only where state or browser APIs are needed
Mark `'use client'` only on: `CustomCursor`, `Navbar` (scroll state), `Experience` (tab state), `useCustomCursor` hook. All section components are server components unless they need interactivity.

### Content — never hardcode in components
All text content comes from `src/lib/data.ts`. Components receive typed props from data exports.

### Animations — Framer Motion only
```tsx
// Scroll reveal pattern — use RevealOnScroll wrapper
<RevealOnScroll>
  <div>...</div>
</RevealOnScroll>

// RevealOnScroll implementation
<motion.div
  initial={{ opacity: 0, y: 28 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.12 }}
  transition={{ duration: 0.7, ease: 'easeOut' }}
>
  {children}
</motion.div>
```

### Section Labels — always use SectionLabel component
```tsx
<SectionLabel index="01" title="About" />
// renders: SYS.01 / About
```

## Component Conventions

### Sections
Each section in `src/components/sections/` is a standalone component that:
- Takes no props (reads from `src/lib/data.ts` directly)
- Uses `<section id="...">` as root element with matching nav anchor
- Uses `padding: 100px 60px` via inline style or Tailwind `px-[60px] py-[100px]`

### Cards (SkillGroup, ProjectCard, AICard)
- Background: `var(--surface)`, border: `1px solid var(--border)`
- Hover: border transitions to `var(--cyan)` (not `--amber` — that's for editorial)
- Exception: bullet-label chips in Experience use `--amber-dim` background + `--amber` text
- Gap between cards in grids: `2px` (tight grid, not spaced)

### Buttons
Two variants only:
```tsx
// Primary — cyan fill, clip-path, dark text
// Secondary — transparent, border, muted text → cyan on hover

// Clip-path applied via inline style (Tailwind can't handle calc())
style={{
  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
}}
```

## Responsive Breakpoints

| Breakpoint | Key Changes |
|---|---|
| `max-width: 1024px` | Hero 1-col; About 1-col; Skills 2-col; Experience nav → horizontal chips; Projects 1-col; Spectrum 2-col; Contact 1-col |
| `max-width: 600px` | Nav links hidden; Hero stats 2×2; Skills 1-col; Spectrum 1-col; About meta 1-col; Hero CTAs stack |

Use Tailwind responsive prefixes (`md:`, `sm:`) for breakpoints. The 1024px breakpoint maps to `lg:` (1024px) and 600px to `sm:` (640px — close enough; use `max-[600px]:` if exact).

## TypeScript Types (define in `src/lib/data.ts`)
```ts
type SkillGroup   = { name: string; iconKey: string; tags: string[] }
type Bullet       = { label: string; text: string }  // text may contain HTML
type Role         = { company: string; title: string; period: string; location: string; bullets: Bullet[] }
type Project      = { num: string; title: string; desc: string; tech: string[]; fullWidth?: boolean }
type AICard       = { type: 'manual' | 'hybrid' | 'agentic'; title: string; items: string[] }
type JourneyStep  = { year: string; label: string; sublabel?: string }
type ContactLink  = { label: string; value: string; href: string }
```

## Do Not
- Do not use `useEffect` for scroll animations — use Framer Motion `whileInView`
- Do not use `cursor: pointer` — cursor is replaced by `CustomCursor`; use `cursor: none` on interactive elements
- Do not add `console.log` statements
- Do not create new color values — only use CSS variable tokens from `globals.css`
- Do not use Tailwind's built-in color utilities (`text-cyan-500`, `bg-amber-400`, etc.) for brand colors
- Do not use `<img>` — use Next.js `<Image>` for any raster images
- Do not install additional animation libraries — Framer Motion is the only one

## Journey Strip (About section)
Five steps with amber dots connected by a hairline:
```
[2020] ─── [2022] ─── [2023] ─── [2024] ─── [Now →]
 Mech Eng   Content    Software    Tech Lead
 Trainee    Ops        Engineer
```
Implemented as a horizontal flex row. On mobile (`≤600px`) it becomes a vertical list. Uses `--amber` dots and `var(--font-mono)` labels.

## Custom Cursor
The `CustomCursor` component must:
- Be `'use client'`
- Track `mousemove` to move the dot instantly
- Use `requestAnimationFrame` to lerp the ring (`factor: 0.12`)
- Expand dot to `14px` and ring to `52px` on hover over `a, button, [data-cursor-expand]`
- Use `var(--cyan)` for both dot fill and ring border
- Be rendered in `layout.tsx` so it covers the entire viewport
