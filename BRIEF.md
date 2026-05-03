# SERPENTINE — Build Brief

Internal design system reference for this codebase. Conventions, tokens, components, voice, and hosting-disclosure rules. Read this before contributing UI changes.

## Stack

- Next.js 16 (App Router) + TypeScript strict + Tailwind v4 (CSS-first via `@theme` in `app/globals.css`)
- React 19 with native View Transitions API for cross-page crossfade (CSS-driven via `::view-transition-old/new(root)`)
- MDX 3 via `@next/mdx`
- Path alias `@/*` resolves to project root
- Fonts: `Geist` + `Geist_Mono` via `next/font/google` (already wired in `app/layout.tsx`)
- pnpm; do NOT add new packages

## Voice

- Short declarative sentences. Active voice. Present tense.
- Never: "revolutionary", "next-generation", "AI-powered" hype, "cutting-edge", "seamless", "leverage" as a verb, exclamation marks, emoji.
- Never invent customer names, testimonials, logos, or stats.
- Maturity flags honest: Odbrana = Available now, Postava = Available now (Open source + Pro), Napad = Private beta, Regulativa = Coming 2026.
- OVHcloud (multi-region EU) compliance is **inherited**. SPNT's own ISO 27001 is **in progress** (Q4 2026 target). Distinguish.
- **Never name specific datacenter cities or countries.** Hosting is described as "OVHcloud, multi-region EU only" — region selection is contractual and not disclosed publicly.

## Wordmark + brand

- The wordmark is **SERPENTINE** — never SPNT in any visible heading, hero, navigation, button, or marketing copy.
- SPNT remains as the legal entity in: footer fine-print line, About page legal table, all `/legal/*` pages.
- Voice never says "Serpentine, by SPNT" or any equivalent lockup.

## Visual identity (dual-stack)

Two surface families. Each page is assigned one (see hero strategy table below).

**Dark surface** (Obsidian + Bronze): used on platform, all 4 product pages, methodology, security, trust, changelog, blog post bodies, and as the hero band on home + industries.

**Light surface** (Stone + Ink): used on home body, pricing, about, contact, blog index, resources, all legal, industries hub body, all 4 industry sub-page bodies.

**Footer is always dark** regardless of page surface — it's the brand's terra firma.

### Tokens

| CSS variable | Hex / value | Use |
|---|---|---|
| `--obsidian-base` | `#07070a` | Page bg dark |
| `--obsidian-raised` | `#0f0f14` | Cards on dark |
| `--obsidian-line` | `rgba(243,238,218,0.10)` | Hairlines on dark |
| `--obsidian-line-strong` | `rgba(243,238,218,0.18)` | Emphasized hairlines on dark |
| `--stone-base` | `#faf9f5` | Page bg light |
| `--stone-raised` | `#ffffff` | Cards on light |
| `--stone-line` | `#e8e3d8` | Hairlines on light |
| `--stone-line-strong` | `#d4cebf` | Emphasized hairlines on light |
| `--bronze` | `#c9a66a` | Primary accent (CTAs, eyebrows on dark, focus) |
| `--bronze-deep` | `#a8884e` | Bronze hover/pressed |
| `--bronze-soft` | `rgba(201,166,106,0.18)` | Bronze tint backgrounds (icon squares) |
| `--bronze-deep-on-light` | `#8a6e3e` | Eyebrows + accent on light surfaces |
| `--ink-on-dark` | `#f3eeda` | Primary text on dark |
| `--ink-on-dark-soft` | `rgba(243,238,218,0.72)` | Secondary text on dark |
| `--ink-on-dark-muted` | `rgba(243,238,218,0.45)` | Captions on dark |
| `--ink` | `#0c0c10` | Primary text on light |
| `--ink-soft` | `#4a4a4a` | Secondary text on light |
| `--ink-muted` | `#8a8884` | Captions on light |

**Severity colors** scoped to dashboard mocks only: `--sev-crit`, `--sev-high`, `--sev-med`, `--sev-low`.

**Forbidden as brand colors:** `#1b1938`, `#cbb7fb`, `#714cb6`, `#e9e5dd` — all removed. The `<Pill variant="beta">` purple is a status semantic only.

### Typography utilities (use these — don't invent inline sizes)

- `.t-hero` — H1 on hero
- `.t-section` — section H2
- `.t-feature` — card / scanner titles
- `.t-body-h` — in-prose H3
- `.t-lead` — hero subhead, section lead (apply soft-ink color manually)
- `.t-body` — standard 16px body
- `.t-small` — 14px secondary
- `.t-eyebrow` — section eyebrow with bronze rule (auto-renders the rule via `::before`)
- `.t-eyebrow-on-light` — modifier when eyebrow is on light surface (deeper bronze)
- `.t-data` — dashboard data rows
- `.t-label` — UI labels, status pills (uppercase mono)
- `.t-caption` — trust strip, metadata

### Border radius

`--r-sm` 6px · `--r-md` 8px · `--r-lg` 12px · `--r-hero` 16px.

## Components

All under `@/components/`. Use these — do not duplicate styles.

### Primitives (`components/ui/`)
- `Container` — page wrapper, max-width 1200px
- `Section` — surface tone (`tone="light" | "dark" | "light-raised" | "dark-raised"`) + standard padding
- `Button` — variants: `bronze | ink | ghost-on-dark | ghost-on-light | text`. Sizes: `md | lg`. Accepts `href`.
- `Link`, `ArrowLink` — inline / arrow links. Tones `ink | bronze | on-dark`.
- `Card` — tones `light | dark | featured | ghost-on-dark`.
- `Pill` — status tag. Variants `default | available | beta | soon | open`.
- `Eyebrow` — wraps `t-eyebrow`. Pass `onLight` to flip color.
- `Logo`, `LogoMark` — SERPENTINE wordmark + serpent-coil mark. Pass `onDark` for light-on-dark rendering.
- `ProseWrapper` — wraps long-form content with `mdx` typography (pass `onDark` for dark surface body).

### Marketing (`components/marketing/`)
- `AtmosphericHero` — D2 full-bleed photo hero
- `SplitHero` — D1 split hero with right slot
- `UtilitarianHero` — clean H1 hero, no photo
- `PhotoBreak` — full-bleed image with overlaid quote
- `TrustBadgeStrip` — sovereign EU strip; `onDark` prop
- `CTABlock` — final-CTA section
- `ProductCard` — product card (used in `FourProductGrid`)
- `FourProductGrid` — grid of 4 product cards (`tone="light"|"dark"`)
- `DashFindings`, `DashAttackChain`, `DashTerminal`, `DashFrameworkReadiness`, `DashCanonicalModel` — dashboard mock components

### Diagrams (`components/diagrams/`)
- `SecurityLifecycle` — 4-stage horizontal stepper, animates on scroll
- `FourProductArchitecture` — hub-and-spoke
- `CanonicalDataModel` — central data model
- `RegulativaFrameworkPacks` — radial framework overlay

### Motion (`components/motion/`)
- `Reveal` — scroll-driven fade+lift (Intersection Observer)
- `StaggerGroup` — sequential delay to direct children

### Navigation (`components/navigation/`)
- `Header` — sticky, surface-aware
- `Footer` — always dark
- `MobileNav` — full-screen overlay

### Constraints

- DO NOT modify shared files (layout, globals.css, navigation, ui, marketing, motion, transitions, diagrams)
- DO NOT install packages
- DO NOT introduce new colors, shadows, gradients, border radii
- DO NOT add testimonials, customer logos, made-up stats, emoji, hype
- Old class names (`t-display`, `surface-hero`, `surface-cream`, `surface-inverse`, lavender, purple, cream button) are removed

## Page hero strategy (mapping)

| Route | Surface | Hero | Image source |
|---|---|---|---|
| `/` | light body, **dark hero** | `<AtmosphericHero>` | `/images/hero-home.jpg` |
| `/platform` | dark | `<SplitHero>` + `<DashCanonicalModel>` | (mock right) |
| `/products/odbrana` | dark | `<SplitHero>` + `<DashFindings>` | (mock right) |
| `/products/napad` | dark | `<SplitHero>` + `<DashAttackChain>` | (mock right) |
| `/products/postava` | dark | `<SplitHero>` + `<DashTerminal>` | (mock right) |
| `/products/regulativa` | dark | `<SplitHero>` + `<DashFrameworkReadiness>` | (mock right) |
| `/methodology` | dark | `<AtmosphericHero>` | `/images/hero-methodology.jpg` |
| `/security` | dark | `<AtmosphericHero>` | `/images/hero-security.jpg` |
| `/trust` | dark | `<AtmosphericHero>` | `/images/hero-trust.jpg` |
| `/industries` | light body, dark hero | `<AtmosphericHero>` | `/images/hero-industries.jpg` |
| `/industries/saas` | light body, dark hero | `<AtmosphericHero>` | `/images/hero-saas.jpg` |
| `/industries/fintech` | light body, dark hero | `<AtmosphericHero>` | `/images/hero-fintech.jpg` |
| `/industries/mssp` | light body, dark hero | `<AtmosphericHero>` | `/images/hero-mssp.jpg` |
| `/industries/critical-infrastructure` | light body, dark hero | `<AtmosphericHero>` | `/images/hero-critical-infra.jpg` |
| `/pricing` | light | `<UtilitarianHero>` | none |
| `/company/about` | light | `<UtilitarianHero>` | none |
| `/company/contact` | light | `<UtilitarianHero>` | none |
| `/blog` | light | `<UtilitarianHero>` | none |
| `/blog/[slug]` | dark | `<UtilitarianHero tone="dark">` | optional cover image |
| `/changelog` | dark | `<UtilitarianHero tone="dark">` | none |
| `/resources` | light | `<UtilitarianHero>` | none |
| `/legal/*` (7) | light | `<UtilitarianHero>` (narrow column) | none |
