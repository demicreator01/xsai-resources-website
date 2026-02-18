# 🟢 XSAI RESOURCES LTD — FULL PRODUCTION PROMPT
### For: Google Antigravity IDE / Cursor (Agentic Mode)

---

## PROJECT BRIEF

You are building a clean, professional, fintech-grade multi-page website for **XSAI Resources Ltd** — a UK-based payroll, accounting, and administrative services company. This is a **mobile-first design** — every section must look exceptional on mobile first, then scale beautifully to desktop. It must feel completely professional and credible for bank compliance and business verification and have interesting **picture art** examples in the folder.

This site must feel like **modern fintech meets corporate trust** — think the clarity of Stripe, the warmth of a boutique accountancy firm, and the precision of a compliance-first product. Clean white space. Flat illustration accents. Professional green brand colour. Structured, readable, authoritative.

It is **NOT** a startup landing page. It is NOT flashy or gimmicky. Every section should communicate reliability, transparency, and competence.

---

## COMPANY DETAILS

- **Company Name:** XSAI Resources Ltd
- **Services:** Payroll processing, accounting, administrative support
- **Pricing Model:** £3 per employee per month (payroll)
- **Key Programme:** Loyalty Credit Programme (operational treasury benefit sharing)
- **Contact Email:** [placeholder — replace when client provides]
- **Contact Phone:** [placeholder — replace when client provides]
- **Registered Address:** [placeholder — replace when client provides]
- **Website domain:** [placeholder — replace when client provides]

---

## ⚠️ COMPLIANCE RULES (bank checks these)

- NO reviews section
- NO testimonials
- NO fabricated stats (employees served, years trading, client count, etc.)
- NO guaranteed return or investment language around the Loyalty Credit Programme — it must be described as a **discretionary operational rebate**, NOT interest, NOT investment yield
- Registered address must appear on the site
- Contact email must be clearly visible
- VAT number must appear in footer (placeholder until provided)

---

## TECH STACK

- **Vite + React + TypeScript + Tailwind CSS v4**
- Multi-page site: **Home page** + **Payroll page** (smooth internal routing or separate pages)
- Mobile-first responsive
- **NO Framer Motion. NO GSAP. NO Three.js.**
- All animations: **pure CSS keyframes and transitions only**
- All icons: **SVG inline or Heroicons (already Tailwind-compatible)**
- Google Fonts loaded via `<link>` in `index.html`

---

## LOGO — SVG LETTERMARK

Create a clean SVG lettermark for XSAI. The logo is the letter **"X"** only.

**Specs:**
- ViewBox: `0 0 48 48`
- The X is drawn from **two crossing strokes** — NOT a font character. Use two `<line>` elements or a `<path>` with two diagonal strokes crossing in the centre.
- Stroke color: `#10b981` (brand green)
- Stroke width: `4`
- Stroke linecap: `round`
- Background: transparent
- The X should feel geometric, precise, and confident — like a fintech icon, not decorative

**Wordmark (next to logo in nav):**
- "XSAI" in `font-weight: 700`, tracking `0.08em`, color `#111827`
- "Resources" directly below in `font-weight: 400`, font-size slightly smaller, color `#6b7280`
- Or on mobile, just "XSAI" in bold next to the X mark

**Favicon:**
Create `public/favicon.svg`:
- ViewBox `0 0 48 48`
- Background: rounded square, fill `#10b981`
- The X mark in white, stroke width 3.5, same crossing-strokes style
- Result: a clean green square with a white X — recognisable at 16px

---

## STYLE GUIDE

### Colour Palette

| Token | Value | Usage |
|---|---|---|
| `--green-primary` | `#10b981` | CTAs, accents, highlights, icon fills |
| `--green-light` | `#d1fae5` | Background tints, badges, section accents |
| `--green-dark` | `#059669` | Hover states on buttons |
| `--blue-light` | `#eff6ff` | Alternate section backgrounds (cool contrast) |
| `--blue-accent` | `#3b82f6` | Secondary accent for illustrations |
| `--bg-page` | `#f9fafb` | Main page background |
| `--bg-white` | `#ffffff` | Cards, nav, footer |
| `--text-primary` | `#111827` | Headings |
| `--text-secondary` | `#4b5563` | Body copy |
| `--text-muted` | `#9ca3af` | Labels, captions |
| `--border` | `#e5e7eb` | Dividers, card borders |

### Typography

- **Heading font:** `Inter` (Google Fonts) — geometric, modern, trusted. Weights: 400, 600, 700
- **Body font:** `Inter` — same family, consistent and readable
- No serif fonts. This is fintech, not editorial.
- Mobile body: minimum `16px`
- Heading sizes: `text-3xl` mobile → `text-5xl` desktop for hero headline
- Letter-spacing on section labels: `0.1em`, uppercase, `text-xs`, `text-green-600`

```html
<!-- In index.html <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Buttons

**Primary CTA:**
- Background: `#10b981`, text: white, font-weight: 600
- Border-radius: `8px`
- Padding: `14px 28px` (mobile), `16px 32px` (desktop)
- Hover: background `#059669`, transition 200ms
- Minimum touch target: 48px height

**Secondary / Outline:**
- Border: `1.5px solid #10b981`, text: `#10b981`, transparent bg
- Hover: bg `#d1fae5`, transition 200ms

**Ghost / Text Link:**
- Color `#10b981`, underline on hover

### Cards

- Background: `#ffffff`
- Border: `1px solid #e5e7eb`
- Border-radius: `12px`
- Box-shadow: `0 1px 4px rgba(0,0,0,0.06)`
- Hover: shadow `0 4px 16px rgba(0,0,0,0.10)`, `translateY(-2px)` over 250ms
- Padding: `24px` mobile, `32px` desktop

### Spacing

- Section vertical padding: `64px` mobile, `96px` desktop
- Content max-width: `1120px` centered
- Side padding on mobile: `20px`

### Illustrations (FLAT STYLE — CSS/SVG ONLY)

The site uses **simple flat SVG illustrations** embedded inline in components — NOT external images. These are geometric shapes and simple line-art figures representing people at desks, checkmarks, coins, calendars — in the brand green and light blue palette.

**Illustration style rules:**
- Colours: `#10b981`, `#d1fae5`, `#3b82f6`, `#eff6ff`, `#f3f4f6`, white
- Style: flat fills, no gradients, subtle outlines if needed (stroke `#e5e7eb`)
- Human figures (if used): simple abstract silhouettes — circle head, rounded body, no detail
- Always vector SVG — no raster images for illustrations
- Size: illustrations sit alongside text sections, typically `280–360px` wide on desktop, full-width constrained on mobile

Use SVG illustrations in these sections:
1. Hero section (abstract background shapes — circles, lines, subtle grid)
2. Section 1 "Smarter Infrastructure" (person at desk with checklist)
3. Section 3 "Loyalty Credit Programme" (abstract coin/flow diagram)
4. Payroll page process steps (numbered step icons with circle backgrounds)

---

## ANIMATIONS

All CSS only. No libraries. Register custom keyframes in the global CSS file.

### Required animations:

```css
/* Fade up on scroll — triggered by Intersection Observer class toggle */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fade-up { opacity: 0; }
.fade-up.visible { animation: fadeUp 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards; }

/* Staggered children — add data-delay attribute and use nth-child delays */
.fade-up.visible:nth-child(1) { animation-delay: 0ms; }
.fade-up.visible:nth-child(2) { animation-delay: 100ms; }
.fade-up.visible:nth-child(3) { animation-delay: 200ms; }
.fade-up.visible:nth-child(4) { animation-delay: 300ms; }

/* Hero headline stagger on page load */
@keyframes heroFadeIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hero-headline { animation: heroFadeIn 700ms cubic-bezier(0.22, 1, 0.36, 1) 100ms both; }
.hero-sub      { animation: heroFadeIn 700ms cubic-bezier(0.22, 1, 0.36, 1) 280ms both; }
.hero-cta      { animation: heroFadeIn 700ms cubic-bezier(0.22, 1, 0.36, 1) 460ms both; }

/* Counter/step number draw-in */
@keyframes scaleIn {
  from { transform: scale(0.6); opacity: 0; }
  to   { transform: scale(1);   opacity: 1; }
}

/* Green accent underline draw */
@keyframes drawLine {
  from { width: 0; }
  to   { width: 48px; }
}
```

**Intersection Observer (pure JS, no library):**
Use a single `useEffect` that observes all `.fade-up` elements and adds class `.visible` when they enter the viewport. Threshold: 0.15.

**NO canvas animations. NO particle effects. NO heavy JS loops.**

---

## SITE STRUCTURE

### Navigation (both pages)

**Mobile:**
- Hamburger icon (3 lines, `#111827`, 24px, 2px thick) — top right
- Slides in from right, full-height overlay
- Overlay background: white `#ffffff`, shadow `0 0 40px rgba(0,0,0,0.15)`
- Nav links stagger in: Services (150ms), Payroll (250ms), Accounting (350ms), Contact (450ms)
- Each link: `font-size: 20px`, `font-weight: 600`, color `#111827`
- Green underline slides in on tap-active state
- Close X button top-right

**Desktop:**
- Sticky nav, white background, `border-bottom: 1px solid #e5e7eb`
- Logo (X mark + XSAI wordmark) — left
- Links right: **Services** | **Payroll** | **Accounting** | **Contact**
- Link hover: color `#10b981`, transition 200ms
- Primary CTA button in nav: "Book a Call" — green, rounded, right side

---

## PAGE 1: HOME PAGE

### Section 1 — Hero

**Layout:** Full viewport height minimum (`min-h-screen`). Light page background `#f9fafb`. Asymmetric layout on desktop: text left (~55%), SVG illustration right (~45%).

**Background:** Subtle geometric pattern — a CSS SVG background pattern of very light grey dots or grid lines (`opacity: 0.04`). Mobile: hidden. Desktop: visible behind the illustration area. Creates a sense of precision and structure without visual noise.

**Headline:**
```
Payroll & Accounting —
Engineered for Efficiency.
```
- `font-size`: `text-4xl` mobile → `text-5xl` desktop
- `font-weight: 700`
- color: `#111827`
- Line 2 "Engineered for Efficiency." — consider `#10b981` accent on "Efficiency" only

**Sub-headline (3 lines, each with a green checkmark icon):**
```
✓  Transparent £3 per employee payroll.
✓  Integrated accounting & admin support.
✓  Operational loyalty credits for businesses that move smart.
```
- Each line: `text-base` (16px), color `#4b5563`, check icon in `#10b981`
- Vertical spacing between lines: `12px`

**CTAs (stacked on mobile, side-by-side on desktop):**
- Primary: "Book a Discovery Call" — green filled button
- Secondary: "Request a Pricing Overview" — outline green button

**Hero illustration (right side, desktop / below text on mobile):**
Inline SVG — abstract fintech scene:
- A simple flat figure sitting at a desk (circle head, block body, desk rectangle) in `#10b981`
- A floating card shape showing "£3/employee" in a clean label
- Green/blue abstract circle accents around the figure
- Small coin icons (circles with £) floating gently — use a subtle `@keyframes float` (translateY -6px to 0, 3s ease-in-out infinite) on 2–3 elements
- Background: soft `#d1fae5` rounded circle behind the figure

---

### Section 2 — A Smarter Infrastructure

**Section label (above heading):** `WHAT WE DO` — small caps, `#10b981`, letter-spaced

**Heading:** "A Smarter Infrastructure for Growing Businesses"

**Body:** "Running a business is hard enough without fragmented back-office services. We provide fully managed payroll, accounting, and administrative support under one streamlined infrastructure — built for reliability, clarity, and long-term partnership."

**Three feature pills (horizontal on desktop, stacked on mobile):**

Each pill is a white card with green left border accent (`border-left: 3px solid #10b981`):
1. **No inflated fees.** — Icon: crossed-out price tag SVG
2. **No hidden add-ons.** — Icon: open lock SVG
3. **No unnecessary complexity.** — Icon: simplified diagram SVG

Below pills: `"Just structured, dependable financial operations."` — italic, `#6b7280`, centered

---

### Section 3 — Payroll, Done Properly

**Background:** `#f0fdf4` (very light green tint) — differentiates this section visually

**Section label:** `PAYROLL`

**Heading:** "Payroll, Done Properly"

**Intro:** "Our payroll service is designed around three principles: **Accuracy. Security. Efficiency.**"

**Pricing callout card** (prominent, centred or offset right):
```
[ £3 ]
per employee / per month
```
- Card: white, `border: 2px solid #10b981`, border-radius `16px`, padding `32px`
- "£3" in `text-6xl font-bold text-green-500`
- Tagline below: `text-sm text-gray-500`

**Feature list (2-column grid on desktop, single column mobile):**
Each item has a green circle checkmark icon:
- Full payroll processing
- RTI submissions to HMRC
- Auto-enrolment & pension management
- Digital payslips
- Year-end processing
- BACS bureau handling
- Dedicated account management

**Footer line:** `"Your employees are paid correctly and on time — every time."`
- Bold, centered, `#111827`

---

### Section 4 — The Loyalty Credit Programme

**Background:** White `#ffffff`

**Section label:** `LOYALTY CREDITS`

**Heading:** "The Loyalty Credit Programme"

**Layout:** Text left, abstract SVG diagram right (desktop). Stacked mobile.

**SVG Diagram (right side):**
Flat illustration of a simple flow:
- Three boxes connected by arrows: `[Payroll Funds]` → `[Safeguarded Account]` → `[Treasury Benefit]`
- Fourth box below with arrow up: `[Loyalty Credits Returned to You]`
- Colours: box backgrounds `#d1fae5`, arrows `#10b981`, text `#111827`
- Clean, minimal, professional — like an infographic

**Copy:**
"Payroll funds are typically received several days before employees are paid. This is standard industry practice.

Within that operational window, safeguarded client accounts may generate treasury benefit at bank level.

Most providers retain this entirely.

**We take a different approach.**"

**Credit options (3 icon cards in a row):**
1. **Applied against future invoices** — receipt icon
2. **Used toward additional services** — settings icon
3. **Redeemed** — arrow-out icon

**Compliance disclaimer (styled as a subtle callout box):**
```
ℹ️  No investment exposure. No lending activity. No risk deployment.
    Just operational efficiency — shared fairly.
```
- Background `#f0fdf4`, border-left `3px solid #10b981`, `text-sm text-gray-600`

---

### Section 5 — Integrated Accounting & Admin

**Section label:** `FULL SERVICE`

**Heading:** "Integrated Accounting & Admin"

**Two-column card grid (desktop), stacked (mobile):**

**Card 1 — Accounting:**
Icon: calculator/ledger SVG in green circle
Services list:
- Bookkeeping
- VAT returns
- Annual accounts
- Corporation tax
- Self-assessment
- Companies House filing

**Card 2 — Administrative Support:**
Icon: folder/document SVG in blue circle (`#3b82f6`)
Services list:
- Director support services
- Registered office solutions
- Business documentation management
- Back-office coordination

**Closing line:** `"Everything aligned. Everything under one accountable team."`

---

### Section 6 — Why Businesses Switch

**Background:** `#111827` (dark section — creates visual contrast and gravitas)

**Section label:** `WHY XSAI` — in `#10b981`

**Heading:** "Why Businesses Switch to Us" — white text

**7-item list in a 2-col grid (desktop), single col (mobile):**
Each item: green checkmark icon + white text

- Transparent £3 per employee payroll
- No hidden payroll add-ons
- Segregated safeguarded client accounts
- Loyalty credits for early funding & volume
- Dedicated account manager
- Integrated payroll + accounting model
- Built for long-term partnerships

**Closing statement:**
```
"We are not a volume call centre.
We build stable relationships with businesses that value structure and fairness."
```
- Italic, `#d1fae5` (soft green-white), centered, `text-lg`

---

### Section 7 — Security & Safeguarding

**Background:** `#f9fafb`

**Section label:** `SECURITY`

**Heading:** "Security & Safeguarding"

**4-item horizontal card row (desktop), 2-col grid (mobile), single col (small mobile):**

Each card: white, border-radius 12px, green top border accent (4px), icon + title + description

1. **Segregated Accounts** — Shield icon — "Client payroll funds held in dedicated UK bank accounts, never commingled."
2. **Sole Purpose** — Lock icon — "Funds used solely for payroll processing. Zero third-party exposure."
3. **Never Deployed** — Block icon — "Funds are never invested, lent, or deployed for any secondary purpose."
4. **Daily Reconciliation** — Chart icon — "Accounts reconciled and monitored daily. Operational resilience first."

**Footer statement:** `"Payroll is trust infrastructure — and we treat it that way."` — bold, centered, green

---

### Section 8 — Final CTA

**Background:** Linear gradient — `from #10b981 to #059669` (full green)

**Heading:** "Let's build something reliable." — white, large
**Sub:** "Transparent pricing. Clean payroll execution. Integrated financial management." — `rgba(255,255,255,0.85)`

**Two buttons (side-by-side on desktop, stacked on mobile):**
- "Book a Discovery Call" — white bg, `#059669` text, `font-weight: 600`
- "Request a Proposal" — outline white border, white text

---

### Footer

**Background:** `#111827`
**Layout:** 3 columns desktop, stacked mobile

**Col 1:** X logo mark (white version) + "XSAI Resources Ltd" + Registered address + VAT number
**Col 2:** Quick links — Services | Payroll | Accounting | Contact
**Col 3:** Contact — email placeholder, phone placeholder

**Bottom bar:** `© 2025 XSAI Resources Ltd. All rights reserved.` — `text-xs text-gray-500`

---

## PAGE 2: PAYROLL PAGE (`/payroll`)

### Hero — Payroll Page

**Heading:** "Payroll — Structured. Secure. Efficient."

**Sub:**
```
Payroll is not just a task. It's a responsibility.
Employees rely on accuracy. HMRC requires compliance. Employers need certainty.
```

**Background:** Same `#f9fafb` as home, subtle grid pattern. No full-screen hero image — keep it content-first.

**Breadcrumb:** Home > Payroll — `text-sm text-gray-400`

---

### Section — Our Payroll Process (Step Flow)

**Heading:** "Our Payroll Process"
**Sub:** "A structured, repeatable workflow — every cycle, every time."

**5-step vertical flow (mobile) / horizontal connected flow (desktop):**

Each step:
- Large numbered circle (green fill, white number, `font-weight: 700`, `48px` diameter)
- Connector line between steps (green dashed line, `border-top: 2px dashed #10b981`, desktop only)
- Step title: bold, `#111827`
- Step description: `#4b5563`

**Steps:**
1. **Data Submission** — "Submit payroll data securely via our portal or direct integration."
2. **Calculation & Compliance** — "We calculate in line with HMRC RTI, pension auto-enrolment, statutory pay rules, and tax code updates."
3. **Employer Approval** — "Receive a clear payroll summary for approval before processing. No surprises. Full visibility."
4. **Payroll Funding** — "Funds received 3–5 working days before pay date. Ensures secure BACS processing and full reconciliation."
5. **Secure Disbursement** — "BACS files submitted. Employees paid on agreed date. RTI confirmation follows immediately."

**Footer tag:** `"Simple. Controlled. Accountable."` — italic, centered, `#6b7280`

---

### Section — What's Included

**Background:** `#f0fdf4`

**Pricing callout (same style as home):**
```
£3 per employee / per month
```

**Full inclusion list (2-column on desktop):**
- Full payroll processing
- RTI submissions
- Pension auto-enrolment management
- Digital payslips
- Starter & leaver handling
- Statutory pay calculations
- Year-end P60 processing
- Dedicated account manager
- BACS bureau handling

Tag: `"Transparent pricing. No hidden per-item add-ons."`

---

### Section — Client Fund Safeguarding

**Background:** White with subtle shield watermark SVG (large, very faint, `opacity: 0.03`) behind content

**Heading:** "Client Fund Safeguarding"
**Sub:** "Trust is critical in payroll."

**4 safeguarding points — same card style as Section 7 on home**

**Compliance statement:**
```
Payroll funds are not exposed to third-party lending or investment activity.
Operational stability always comes first.
```
— `text-sm`, `#6b7280`, italic, centered, inside a light border box

---

### Section — Loyalty Credit Programme (Payroll Page Version)

**Use same layout and diagram as Section 4 on home, but extended with additional detail:**

**Loyalty Tiers — 3-card comparison table:**

| | Standard Partner | Early Funding Partner | Strategic Partner |
|---|---|---|---|
| Funding timing | 3 working days prior | 5 working days prior | 5 working days prior |
| Volume | Any | Any | 500+ employees |
| Commitment | — | — | Annual service |
| Allocation tier | Base | Enhanced | Priority |

**Render this as 3 styled cards (not an HTML table) — card per tier:**
- Standard: white card, green border
- Early Funding: green tinted card (`#f0fdf4`), stronger green border
- Strategic: dark card (`#111827`), green accent — "premium" feel

**Compliance disclaimer (same style as home page version)**

---

### Section — Who We Work Best With

**Background:** `#f9fafb`

**Heading:** "Who We Work Best With"

**5 personas — icon card grid (2-col mobile, 5-col desktop):**

1. **Growing SMEs** — plant/growth icon
2. **Multi-entity businesses** — buildings icon
3. **Founder-led companies** — person icon
4. **Accountancy referrals** — handshake icon
5. **Structure-first employers** — checklist icon

Each: white card, icon in green circle, title bold, no description needed (keep clean)

---

### Section — CTA (Payroll Page)

**Same full-green CTA section as home page:**
- "Ready to streamline your payroll?"
- CTA 1: "Book a Discovery Call"
- CTA 2: "Request a Custom Proposal"

---

## IMAGE HANDLING

This site uses **NO raster photography** — illustrations only (SVG inline) for all decorative elements. This avoids all image compliance risk, eliminates CLS from image loading, and ensures maximum performance.

**If any placeholder images ARE used (e.g., a generic office background in hero):**
- Use from Unsplash with explicit `width` and `height` attributes
- `loading="eager"` on hero, `loading="lazy"` on all others
- `decoding="async"` on all except hero
- Skeleton placeholder: `background: linear-gradient(90deg, #f0fdf4 25%, #d1fae5 50%, #f0fdf4 75%)` animated pulse
- Fade in on load: `opacity: 0` → `opacity: 1` over 400ms via CSS class on `onLoad`

---

## SEO, ACCESSIBILITY & PERFORMANCE

### index.html `<head>`:

```html
<html lang="en">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>XSAI Resources Ltd | Payroll, Accounting & Admin Support — UK</title>
<meta name="description" content="Professional payroll at £3 per employee, integrated accounting and administrative support. XSAI Resources Ltd — structured, transparent, built for UK businesses.">
<link rel="canonical" href="https://[domain]/">
<meta name="robots" content="index, follow">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://[domain]/">
<meta property="og:title" content="XSAI Resources Ltd | Payroll & Accounting">
<meta property="og:description" content="Transparent £3 payroll, integrated accounting, and the Loyalty Credit Programme. Built for UK businesses.">
<meta property="og:image" content="https://[domain]/images/og-image.png">
<meta property="twitter:card" content="summary_large_image">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
```

### Structured Data (JSON-LD) — add in `<head>`:

```json
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "XSAI Resources Ltd",
  "description": "Payroll, accounting, and administrative support for UK businesses",
  "email": "[placeholder]",
  "telephone": "[placeholder]",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "GB"
  },
  "url": "https://[domain]/"
}
```

### Accessibility Checklist:

- Every `<img>` must have a descriptive `alt` attribute
- Every icon-only button: `aria-label` (e.g., `aria-label="Open navigation menu"`)
- Exactly one `<h1>` per page
- Heading order: `h1` → `h2` → `h3` — never skip levels
- All text must meet WCAG AA contrast (green `#10b981` on white: test contrast ratio — if it fails, use `#059669` for text)
- Touch targets minimum 48px height
- Focus styles: visible green outline on all interactive elements (`outline: 2px solid #10b981; outline-offset: 2px`)
- `aria-current="page"` on active nav link

### Performance:

- `font-display: swap` on Google Fonts import
- All SVG illustrations inline (zero network requests)
- Intersection Observer for scroll animations (passive, no scroll listener)
- No canvas, no WebGL, no heavy libraries
- Vite production build: `npm run build` — verify minification
- Target: **Lighthouse 90+ across all four categories**

---

## MOBILE-FIRST RULES (apply to every component)

- Design and implement mobile layout FIRST — desktop is the enhancement
- Touch targets: minimum 48px height on all buttons and tappable elements
- Body text: minimum `16px` (`text-base`) on mobile — never smaller
- No horizontal scrolling anywhere except intentional carousels
- Hamburger nav on mobile — no visible horizontal nav until `md:` breakpoint
- All card grids: single column on mobile (`< 640px`), 2-col on `sm:`, 3-col on `lg:`
- Section padding: `py-16` mobile → `py-24` desktop
- Side padding: `px-5` mobile → `px-8` desktop → max-width container `1120px`

---

## DO NOT

- Use reviews, testimonials, or social proof of any kind
- Display fabricated stats (X clients, X years, X employees processed)
- Use guaranteed/investment language about the Loyalty Credit Programme
- Use Framer Motion, GSAP, Three.js, or any heavy animation library
- Use raster images for illustrations — SVG only for decorative elements
- Create a dark/moody aesthetic — this site is clean, light, and professional
- Use more than two font families
- Use decorative background images that could cause CLS

---

## FINAL OUTPUT CHECKLIST

Before completing, verify:

- [ ] X logo SVG renders cleanly at 16px, 32px, and 48px
- [ ] Favicon SVG renders as green square with white X
- [ ] Mobile nav opens/closes smoothly with CSS transitions only
- [ ] Hero animations stagger correctly on page load
- [ ] All `.fade-up` elements animate in via Intersection Observer
- [ ] Pricing `£3` callout is prominent and clearly formatted
- [ ] Loyalty Credit Programme compliance disclaimer is present on both pages
- [ ] Safeguarding section covers all 4 points
- [ ] Loyalty Tiers render as 3 distinct cards (not a table)
- [ ] Footer contains company name, registered address placeholder, VAT placeholder
- [ ] All buttons are minimum 48px tall on mobile
- [ ] No horizontal scroll on any screen size
- [ ] Lighthouse accessibility: all images have alt, all icon buttons have aria-label
- [ ] JSON-LD structured data present in `<head>`
- [ ] Both Home and Payroll pages are built and linked in nav

---

*Prompt built for: Google Antigravity IDE / Cursor — Agentic Mode*
*Stack: Vite + React + TypeScript + Tailwind CSS v4*
*Animations: CSS only — no libraries*
*Target: Lighthouse 90+ | Mobile-first | Bank compliance ready*
