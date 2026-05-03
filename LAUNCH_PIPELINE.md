# SERPENTINE — Launch Pipeline

> Items required to move from **soft-launch ready** (current state) to **hard-launch ready** (paid traffic, press, enterprise sales).
>
> Source: production-readiness audit run on 2026-05-03. The soft-launch fixes from that audit have already landed (see commit `955be69` — *Soft-launch readiness pass*). This file tracks what remains.

---

## Current state (soft-launch ready)

The site can be:

- Shared with your professional network
- Linked from social profiles (LinkedIn, X, etc.)
- Sent to a prospect for an initial look
- Opened as a quiet soft-launch landing

What works right now:

- 38 statically-generated routes, build green, zero TS errors
- Every CTA leads somewhere real (no 404s)
- Every form opens the user's email client with a pre-filled `mailto:` to the appropriate inbox (`demo@spnt.io`, `sales@spnt.io`, `waitlist@spnt.io`, `partnerships@spnt.io`)
- OG image renders dynamically; Organization schema has a real logo URL
- Public legal posture is consistent (OVHcloud multi-region EU, no specific city/country leaks)
- Sample reports and SCCs are gated behind contact requests
- About page contains only public-truth values (no bracketed placeholders)

What does NOT work yet — see the checklist below.

---

## Hard-launch blockers

Each of these MUST be resolved before paid traffic, press, or enterprise sales motions.

### 1. Real form backend

**Problem:** soft-launch forms use `mailto:` — users without a configured mail client see nothing. No analytics, no storage, no rate limiting, no spam protection beyond a honeypot.

**Recommendation:** Cloudflare Worker → [Resend](https://resend.com) (or [Postmark](https://postmarkapp.com)). Stay in-EU where possible.

**Steps:**
1. Provision a Worker route at `forms.spnt.io`
2. Implement POST handlers for `/demo`, `/sales`, `/waitlist`, `/support`, `/security`, `/press`, `/partnerships`
3. Each handler: validate honeypot, rate-limit per IP (Durable Object), forward to Resend with the appropriate `to:` and `reply_to: email-from-form`
4. Replace `MailtoForm` client wrapper with a `FetchForm` client wrapper that POSTs to the Worker; show success/error states
5. Storage: optional — log submissions to Cloudflare D1 or KV for ops visibility
6. Confirm Spam Assassin / DKIM / SPF records on the SPNT domain

**Files to touch:** `app/company/contact/_components/MailtoForm.tsx` (replace), `app/company/contact/page.tsx` (rename usage), new Worker repo or `apps/forms-worker/` subdir, DNS records on `spnt.io`.

**Owner:** TBD

---

### 2. Real PGP key for security disclosure

**Problem:** Right now `/legal/security-disclosure`, `/security#disclosure`, and `/methodology` all say "PGP key available on request — reply to the acknowledgment email." That works but a security platform should publish its key.

**Steps:**
1. Generate an Ed25519 PGP key for `security@spnt.io` (`gpg --full-generate-key`)
2. Export ASCII-armored public key
3. Publish to `public/pgp-key.txt`
4. Republish to `https://keys.openpgp.org` and `https://keyserver.ubuntu.com`
5. Restore the `Encryption:` line in `public/.well-known/security.txt` (line 4 was removed in soft-launch pass — see git history)
6. Update `/legal/security-disclosure` to link `<a href="/pgp-key.txt">/pgp-key.txt</a>` again
7. Update `/security#disclosure` and `/methodology` to drop "on request" qualifier
8. Document key rotation policy (every 2 years, or sooner on compromise)

**Files to touch:** `public/.well-known/security.txt`, `app/legal/security-disclosure/page.tsx`, `app/security/page.tsx`, `app/methodology/page.tsx`, new `public/pgp-key.txt`.

**Owner:** TBD

---

### 3. Demo booking integration

**Problem:** `app/company/contact/page.tsx` line ~125 says "Or schedule directly via Cal.com (link to be configured)." This is a TODO visible on a primary conversion page.

**Recommendation:** Cal.com (open source, EU-hostable) OR Calendly. Cal.com if you want self-hosted control.

**Steps:**
1. Create the team account / configure availability
2. Embed via `<Cal.com />` inline embed component on `/company/contact#demo`
3. Remove the "link to be configured" line
4. Optionally also expose a sticky "Book a Demo" button that opens the embed in a modal

**Files to touch:** `app/company/contact/page.tsx`, possibly a new `_components/CalEmbed.tsx`.

**Owner:** TBD

---

### 4. Real legal counsel review

**Problem:** 5 of 7 legal pages are intentional stubs (privacy, terms, DPA, AUP, cookies). Each has a visible callout: "This document is being finalized with legal counsel." Acceptable for soft launch; not for any contract or paid-traffic motion.

**Steps:**
1. Engage EU-licensed counsel familiar with GDPR, DORA, NIS2 (the spec already mentions EU operating context)
2. Privacy policy: full GDPR Art. 13/14 disclosures, lawful bases, retention, rights, contact
3. Terms of Service: liability, IP, termination, governing law (Republic of North Macedonia or selected EU jurisdiction)
4. DPA: pre-signed processor DPA per GDPR Art. 28; SCCs annexed for any non-EU subprocessor
5. AUP: model on the Cloudflare / GitHub AUPs
6. Cookies: cookie inventory + consent banner if any non-essential cookies exist
7. Replace the stub callouts with real `<MDX>` content
8. Version each doc; track with `lastModified` in metadata

**Files to touch:** `app/legal/privacy/page.tsx`, `app/legal/terms/page.tsx`, `app/legal/dpa/page.tsx`, `app/legal/aup/page.tsx`, `app/legal/cookies/page.tsx`. Subprocessors and security-disclosure pages already have real content.

**Owner:** External counsel + legal lead

---

### 5. Real founder bio + photo

**Problem:** The "Our founder" section was removed entirely in the soft-launch pass to avoid showing "Founder bio placeholder" copy publicly. Hard-launch should restore it with real content.

**Steps:**
1. Founder writes bio (~80–120 words, technical voice)
2. Professional headshot (matte, neutral background, 800×800 minimum, color-graded into the bronze + obsidian palette is a plus)
3. Restore the section to `app/company/about/page.tsx` between "How we work" and "Legal entity"
4. Render headshot via `<Image priority={false}>` with proper `alt`
5. Optional: link to founder's LinkedIn / personal site

**Files to touch:** `app/company/about/page.tsx`, new `public/images/founder.jpg`.

**Owner:** Founder

---

### 6. Real legal-entity registration values

**Problem:** About-page legal-entity table currently shows only public-truth rows (Jurisdiction, Status, "Available on request"). Hard-launch should expose the real registered name, MBS (company registration number), EDB (tax ID), registered office address, and VAT number — these are required to appear on the public-facing site of any EU-registered entity once the registration completes.

**Steps:**
1. Once registration complete, capture exact legal name, registered office, MBS, EDB, VAT
2. Update `LEGAL_ROWS` array at top of `app/company/about/page.tsx`
3. Also update `Footer.tsx` fine-print to include MBS (e.g., "© 2026 SPNT [legal name], MBS XXXXXXX")
4. Optional: add a JSON-LD `Organization` extension with `taxID` and `vatID` schema fields

**Files to touch:** `app/company/about/page.tsx`, `components/navigation/Footer.tsx`, `lib/schema.ts`.

**Owner:** Legal / operations

---

### 7. Real product UI screenshots

**Problem:** Hero right-rails on platform + 4 product pages currently render dashboard mock components: `<DashFindings>`, `<DashAttackChain>`, `<DashTerminal>`, `<DashFrameworkReadiness>`, `<DashCanonicalModel>`. The mocks are good but a sophisticated buyer can spot synthetic data on close inspection.

**Recommendation:** Replace with real screenshots once the products are screenshot-able. Postava already exists and ships — screenshot first.

**Steps:**
1. For each product, capture a representative full-resolution screenshot (Retina 3200×2000+) with realistic-but-anonymized data
2. Store in `public/images/product/{odbrana,napad,postava,regulativa,platform}.jpg` (or `.webp` directly)
3. Replace each `<Dash*>` import with a `<Image priority>` of the screenshot, with proper `alt`, sized to match the previous mock height (~480px)
4. Keep the dashboard mock components in the codebase (they're useful for preview / "request demo" loops)
5. Sequence: Postava (real product, ship first) → Odbrana → Napad → Regulativa as products come online

**Files to touch:** `app/products/odbrana/page.tsx`, `app/products/napad/page.tsx`, `app/products/postava/page.tsx`, `app/products/regulativa/page.tsx`, `app/platform/page.tsx`. Possibly extract a shared `<ProductHeroImage>` component.

**Owner:** Product + design

---

### 8. Real sample Odbrana PDF

**Problem:** Soft-launch repointed every "Download sample report" CTA to `/company/contact#sales`. Hard-launch may want to re-enable direct download (or keep the gated request flow if it converts better — A/B test).

**Steps:**
1. Generate a sanitized but realistic Odbrana PDF report (executive summary, findings table, expanded finding example, compliance mapping appendix, methodology footer with cryptographic signature)
2. Place at `public/downloads/sample-odbrana-report.pdf`
3. Decision: switch CTAs back to direct download? Or keep gated? Recommend keeping gated for enterprise sales (collects qualified leads); direct-download for self-serve audience
4. If keeping gated: leave CTAs as-is. If switching back: revert the soft-launch CTA changes (see git diff for `955be69`)

**Files to touch:** `public/downloads/sample-odbrana-report.pdf` (new). Optionally revert CTA changes in `methodology/page.tsx`, `products/odbrana/page.tsx`, `resources/page.tsx`, `trust/page.tsx`.

**Owner:** Product / marketing

---

### 9. Production deployment + DNS

**Problem:** Repo is pushed to GitHub but not deployed to a CDN/edge.

**Recommendation:** Cloudflare Pages — already aligned with the Cloudflare-as-CDN subprocessor disclosure. Free tier handles the marketing-site traffic profile easily.

**Steps:**
1. Connect GitHub repo to Cloudflare Pages
2. Build command: `pnpm build`. Output: `.next` (Cloudflare's Next.js adapter handles SSG)
3. Production branch: `main`. Preview branches: every PR auto-deploys
4. Custom domain: `spnt.io` (apex) + `www.spnt.io` (redirect to apex)
5. Configure DNS at registrar: A record (or CNAME flattening) → Cloudflare; AAAA for IPv6
6. SSL: full strict via Cloudflare Universal SSL
7. Enable HTTP/3, Brotli, image polish (already AVIF + WebP from Next.js)
8. Set CSP headers (script-src tight to self + Cal.com if embedded; img-src for OG; etc.)
9. Configure security headers: HSTS (max-age 31536000, includeSubDomains, preload), X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy locking down camera/mic/geo
10. Test `curl -I https://spnt.io` to verify all headers
11. Submit `https://spnt.io` to HSTS preload list once HSTS verified

**Files to touch:** new `_headers` and `_redirects` at site root for Cloudflare Pages, possibly `next.config.ts` for `headers()` config.

**Owner:** Ops / DevOps

---

### 10. Privacy-first analytics

**Problem:** No analytics wired. Soft-launch is fine without; hard-launch needs traffic visibility.

**Recommendation:** [Plausible](https://plausible.io) (EU-hosted) self-hosted on the same Cloudflare account, OR managed Plausible cloud (EU-hosted). NOT Google Analytics — the spec explicitly forbids it.

**Steps:**
1. Set up Plausible (self-hosted on a small VPS or managed)
2. Add Plausible script to `app/layout.tsx` via `next/script` with `strategy="afterInteractive"`
3. Configure outbound link tracking, file download tracking, custom goals (form submissions, demo bookings)
4. Set up Plausible API → internal dashboard (optional)
5. No cookie banner needed — Plausible doesn't set cookies

**Files to touch:** `app/layout.tsx`.

**Owner:** Ops / marketing

---

## Hard-launch polish (nice-to-have, not blockers)

### 11. View Transitions API actually wired

**Problem:** `app/globals.css` has `::view-transition-old/new(root)` rules but the React 19 `unstable_ViewTransition` component is NOT in `app/layout.tsx`. CSS-only doesn't trigger the API on Next.js client navigation.

**Steps:**
1. Either: import `unstable_ViewTransition as ViewTransition` from `react`, wrap `<main>` in it
2. Or: drop the claim from `BRIEF.md` (line ~10) and accept that cross-page navigation is instant with no crossfade
3. Test in Chrome DevTools "View Transitions" panel to confirm activation

**Files to touch:** `app/layout.tsx`, `BRIEF.md`.

**Owner:** Engineering

---

### 12. Per-route OG images

**Problem:** Currently one root `app/opengraph-image.tsx` covers every page. Per-route OG would let `/products/odbrana` show "Odbrana — Defense" framing, `/blog/[slug]` show post titles, etc. Higher CTR from social shares.

**Steps:**
1. Add `app/products/[product]/opengraph-image.tsx` driven by route params
2. Add `app/blog/[slug]/opengraph-image.tsx` driven by post frontmatter
3. Add `app/industries/[industry]/opengraph-image.tsx`
4. Use the same Edge `ImageResponse` pattern as the root one

**Files to touch:** new `opengraph-image.tsx` per route group.

**Owner:** Engineering

---

### 13. Lighthouse CI

**Problem:** No automated performance regression detection.

**Steps:**
1. Add Lighthouse CI to GitHub Actions
2. Run on every PR, fail if Performance < 90, A11y < 100, SEO < 100, Best Practices < 100
3. Track LCP / INP / CLS over time

**Files to touch:** new `.github/workflows/lighthouse.yml`, `lighthouserc.json`.

**Owner:** Engineering

---

### 14. Sitemap + robots refinement

**Problem:** `app/robots.ts` has a non-standard `host` field that only Yandex reads. Harmless but pointless.

**Steps:**
1. Drop the `host` field from `app/robots.ts`
2. Verify sitemap pings Google Search Console + Bing Webmaster Tools
3. Submit to IndexNow

**Files to touch:** `app/robots.ts`.

**Owner:** Engineering

---

### 15. Footer registration disclosure

**Problem:** Once legal-entity values are real (item 6), footer fine-print should include MBS / company registration number per EU/MK requirement.

**Steps:** depends on item 6 — once values land, update Footer.

**Files to touch:** `components/navigation/Footer.tsx`.

**Owner:** Legal + engineering

---

### 16. Typeface self-hosting

**Problem:** Geist + Geist Mono load via `next/font/google`. Next.js fetches at build time so there's no Google CDN dependency at runtime, but the build does call Google. Acceptable for most posture concerns; some buyers ask for zero-Google supply chain.

**Steps:**
1. Download Geist + Geist Mono from `vercel/geist` GitHub
2. Place in `public/fonts/`
3. Switch to `next/font/local` declarations in `app/layout.tsx`

**Files to touch:** `app/layout.tsx`, new `public/fonts/`.

**Owner:** Engineering

---

## Items deliberately deferred (out of scope for both launches)

These are flagged but not actioned in either soft- or hard-launch:

- **Bug bounty program** — currently invitation-only per `/security`. Public bounty (HackerOne / Intigriti / direct) requires legal review + budget commitment. Open to revisit post-launch.
- **Status page** — `status.spnt.io` (Cronitor / BetterUptime / Statuspage). Add when first paying customers come online.
- **Cookie consent banner** — only needed if non-essential cookies are added. Plausible doesn't trigger this requirement.
- **i18n** — site is English-only by design. EU-customer base may eventually want German / French / local-language versions; deferred.

---

## Audit references

- Production-readiness audit run: 2026-05-03
- Soft-launch fixes commit: `955be69` (this branch)
- Initial site commit: `15c5087`

For the full pre-soft-launch audit (with line-number citations), see the conversation that produced the audit. The above items represent the audit's "Important" + "Recommendations" buckets that were deferred to hard-launch.
