# XSAI HERO — TARGETED FIXES PROMPT
### Do NOT rebuild the hero from scratch. Apply these 5 surgical fixes only.

---

## FIX 1 — DESKTOP: REMOVE THE ROGUE UNDERLINE BETWEEN HEADLINE LINES

There is a dark horizontal bar/line appearing between "Payroll & Accounting —" and "Engineered for Efficiency." This is either:
- A `<hr>` element that snuck into the JSX
- A `border-bottom` on the first line or the `<br />` wrapper
- A pseudo-element from a Tailwind class

**Find and remove it.** The H1 should flow as one clean typographic block with NO dividers, NO borders, NO underlines between lines. Check the H1 and every element inside it. The fix is likely one of:

```tsx
// WRONG — remove any of these if present on or inside the h1:
className="... border-b ..."
className="... underline ..."
<hr /> // inside or adjacent to h1
style={{ borderBottom: '...' }}
```

The H1 should look exactly like this — no borders anywhere:

```tsx
<h1 className="hero-headline text-[2.5rem] md:text-[3.2rem] lg:text-[3.8rem] font-bold text-[#0f1724] leading-[1.08] tracking-tight">
  Payroll &amp; Accounting —<br />
  Engineered for{' '}
  <span className="text-green-primary">Efficiency.</span>
</h1>
```

---

## FIX 2 — DESKTOP: TIGHTEN THE LEFT COLUMN VERTICAL SPACING

The left column is over-spaced — too much dead air between the interpretive sub-line and the bullet points, and between the bullets and the CTAs. The column is stretching to match the panel height and it shows.

**Change the outer flex column gap from `gap-7` (or whatever it currently is) to `gap-5` on desktop:**

```tsx
// Find the left column wrapper and update:
<div className="flex flex-col gap-5 lg:gap-6">
  // eyebrow, h1, sub-line, bullets, CTAs, trust tags
</div>
```

Also reduce the gap between bullet points:

```tsx
// Bullets container:
<div className="flex flex-col gap-2.5">
  // instead of gap-3.5
</div>
```

And remove the `mt-1` or `mt-2` from the CTAs wrapper — the `gap` on the parent handles spacing:

```tsx
<div className="flex flex-col sm:flex-row gap-3">
  // no mt- here
</div>
```

---

## FIX 3 — DESKTOP: SECONDARY BUTTON — MAKE IT FEEL LIGHTER

The secondary "Request a Pricing Overview" button is too visually heavy — same height and weight as the primary, which flattens the hierarchy.

**Replace the secondary button with this lighter treatment:**

```tsx
<a
  href="#pricing"
  className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-text-secondary font-medium text-base hover:text-green-primary transition-colors duration-200 min-h-[52px] underline-offset-4 hover:underline"
>
  Request a Pricing Overview
</a>
```

This makes it feel like a confident text-link rather than a competing button — the primary CTA gets all the visual weight, the secondary steps back. This is a standard premium fintech pattern (Stripe, Deel, Rippling all do this).

If the client specifically wants a bordered button style, use this instead (less heavy than current):

```tsx
<a
  href="#pricing"
  className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-[#e5e7eb] text-text-secondary font-medium text-base bg-transparent hover:border-[#10b981] hover:text-green-primary transition-all duration-200 min-h-[52px]"
>
  Request a Pricing Overview
</a>
```

---

## FIX 4 — MOBILE: ADD BREATHING ROOM BELOW THE DASHBOARD PANEL

On mobile the dashboard panel bottom (loyalty meter + compliance tag) is sitting too close to the viewport edge / section bottom with no padding.

**Two changes:**

1. Add bottom padding to the section on mobile:
```tsx
// On the <section> wrapper, ensure:
className="... pb-20 md:pb-16 lg:pb-20 ..."
// (increase mobile bottom padding from whatever it is now)
```

2. Add margin below the panel on mobile:
```tsx
// On the dashboard panel outer wrapper div:
className="... mb-6 lg:mb-0 ..."
```

---

## FIX 5 — MOBILE: DASHBOARD PANEL — PREVENT HORIZONTAL OVERFLOW ON PAYROLL CYCLE ROW

The payroll cycle flow (Data → Calc → Approve → Fund → Pay) can overflow horizontally on small screens because the nodes are fixed-width in a flex row.

**Add overflow protection to the cycle row container:**

```tsx
// Find the payroll cycle flex row and update:
<div className="flex items-center gap-1 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
  // nodes and arrows
</div>
```

**And make the nodes slightly smaller on mobile:**

```tsx
// Each node div:
className={`flex-shrink-0 flex flex-col items-center justify-center rounded-xl border px-2 py-1.5 min-w-[44px] md:px-2.5 md:py-2 md:min-w-[52px] ${
  node.active ? 'bg-green-primary border-[#059669] shadow-[0_4px_12px_rgba(16,185,129,0.35)]'
              : 'bg-[#f0fdf4] border-[#bbf7d0]'
}`}
```

**And add this to your global CSS if not already present (hides scrollbar on the overflow row):**

```css
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
```

---

## SUMMARY — WHAT EACH FIX DOES

| Fix | Problem | Solution |
|---|---|---|
| Fix 1 | Rogue dark underline splits the headline on desktop | Find and remove border/hr element from inside H1 |
| Fix 2 | Left column over-spaced, floaty on desktop | Reduce flex gap, remove redundant margins |
| Fix 3 | Secondary button competes visually with primary | Lighten to text-link or minimal border style |
| Fix 4 | Panel bottom cuts off on mobile, no breathing room | Add pb-20 to section, mb-6 to panel on mobile |
| Fix 5 | Payroll cycle nodes overflow horizontally on mobile | overflow-x-auto on row, smaller node sizing |

**Do not change anything else. Do not rebuild the component. Apply these 5 targeted fixes only.**
