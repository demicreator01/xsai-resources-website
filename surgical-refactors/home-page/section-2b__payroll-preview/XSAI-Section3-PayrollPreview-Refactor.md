# XSAI — SECTION 3: PAYROLL DONE PROPERLY — REFACTOR PROMPT
### Replace PayrollPreview.tsx entirely with the code below.

---

## THE PROBLEMS WITH THE CURRENT SECTION

1. **The £3 pricing card is inert** — a white box with a green border and a large number. No depth, no context, no supporting signals. It should feel like a product statement, not a price tag.
2. **The feature list is a plain 2-column checklist** — seven identical green circle + text rows. No visual hierarchy, no grouping, no sense of what each feature actually means for the buyer.
3. **"Accuracy. Security. Efficiency." is bold inline text** — three founding principles deserve better than being buried mid-paragraph.
4. **The closing statement is in a low-contrast white/green box** — "Your employees are paid correctly and on time — every time." is the strongest line in the section and it's whispering. It should shout.
5. **Desktop layout is unbalanced** — the content side is content-heavy and the pricing card side is nearly empty, creating dead space on the right.
6. **Background is `#f0fdf4`** — correct per the rotation, but the section needs atmospheric layering to match the quality of what came before it.

---

## THE NEW DESIGN DIRECTION

This section is the **pricing and trust moment** — the buyer is asking "what do I get and what do I pay?" The answer needs to be immediate, credible, and visually decisive.

**Layout:** Full-width. Two-column on desktop — left is the main content block, right is an upgraded **pricing + inclusion panel** that tells the whole story in one card. Not just £3 — the card should show the price, the three principles as badges, and a compact version of what's included.

**The three principles** ("Accuracy. Security. Efficiency.") become **standalone badge chips** — not inline bold text.

**The feature list** becomes a **2-column grid of feature tiles** — each with a small icon and label — grouped and scannable.

**The closing statement** gets a full-width dark callout bar — white text on dark green. It should feel like a guarantee stamp.

---

## FULL COMPONENT — REPLACE PayrollPreview.tsx

```tsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    label: 'Full payroll processing',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="#10b981" strokeWidth="1.4"/>
        <path d="M5 7h4M5 9.5h6" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'RTI submissions to HMRC',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2l1.5 3.5H13l-2.8 2 1 3.5L8 9l-3.2 2 1-3.5L3 5.5h3.5L8 2Z" stroke="#10b981" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Auto-enrolment & pension',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="5.5" stroke="#10b981" strokeWidth="1.4"/>
        <path d="M8 5v3l2 1.5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Digital payslips',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="3" y="2" width="10" height="12" rx="1.5" stroke="#10b981" strokeWidth="1.4"/>
        <path d="M5.5 6h5M5.5 8.5h3" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Year-end P60 processing',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="2" width="12" height="12" rx="2" stroke="#10b981" strokeWidth="1.4"/>
        <path d="M5 8h6M8 5v6" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'BACS bureau handling',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 10l4-6 3 4 2-2.5 3 4.5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Dedicated account manager',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="6" r="3" stroke="#10b981" strokeWidth="1.4"/>
        <path d="M2.5 13.5c0-2.5 2.5-4 5.5-4s5.5 1.5 5.5 4" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const principles = [
  { label: 'Accuracy', icon: '◎' },
  { label: 'Security', icon: '◈' },
  { label: 'Efficiency', icon: '◇' },
];

export const PayrollPreview: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.fade-up') ?? [];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative bg-[#f0fdf4] py-20 md:py-28 px-5 md:px-8 overflow-hidden"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[600px] h-[500px]"
          style={{ background: 'radial-gradient(ellipse at 80% 10%, rgba(16,185,129,0.10) 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[350px]"
          style={{ background: 'radial-gradient(ellipse at 20% 90%, rgba(59,130,246,0.05) 0%, transparent 65%)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1120px] mx-auto">

        {/* Section label + heading */}
        <div className="fade-up mb-10 md:mb-12">
          <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#10b981] mb-3 block">
            Payroll
          </span>
          <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-4">
            Payroll, Done <span className="text-[#10b981]">Properly</span>
          </h2>
          <p className="text-[#4b5563] text-lg max-w-[540px] leading-relaxed">
            Our payroll service is designed around three principles. They aren't aspirations — they're the operational standard we hold ourselves to, every cycle.
          </p>
        </div>

        {/* Three principles — badge row */}
        <div className="fade-up flex flex-wrap gap-3 mb-12 md:mb-14" style={{ animationDelay: '100ms' }}>
          {principles.map((p, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2.5 bg-white border border-[#bbf7d0] rounded-full px-4 py-2 shadow-sm"
            >
              <div className="w-5 h-5 rounded-full bg-[#10b981] flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M8 2.5L4 7.5L2 5.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-bold text-[#0f1724]">{p.label}</span>
            </div>
          ))}
        </div>

        {/* Main two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_42%] gap-8 lg:gap-12 items-start">

          {/* LEFT: Feature grid */}
          <div className="fade-up" style={{ animationDelay: '150ms' }}>
            <p className="text-sm font-semibold text-[#374151] uppercase tracking-wider mb-5">
              For £3 per employee / per month, you get:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white rounded-xl border border-[#e5e7eb] px-4 py-3.5 hover:border-[#10b981]/40 hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center shrink-0">
                    {f.icon}
                  </div>
                  <span className="text-sm font-medium text-[#374151] leading-snug">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Pricing + inclusion panel */}
          <div className="fade-up" style={{ animationDelay: '200ms' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.10)] border border-[#e5e7eb]">
              {/* Top accent */}
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#10b981] to-transparent" />

              {/* Price block */}
              <div className="bg-white px-7 py-8 text-center border-b border-[#e5e7eb]">
                <p className="text-[0.6rem] font-bold tracking-[0.22em] uppercase text-[#9ca3af] mb-1">
                  Flat Rate — No Surprises
                </p>
                <div className="flex items-start justify-center gap-1 mt-2">
                  <span className="text-2xl font-bold text-[#10b981] mt-2">£</span>
                  <span className="text-[5.5rem] font-bold text-[#10b981] leading-none tracking-tight">3</span>
                </div>
                <p className="text-[#6b7280] text-sm font-medium mt-1">per employee / per month</p>

                {/* Comparison nudge */}
                <div className="mt-4 inline-flex items-center gap-1.5 bg-[#f0fdf4] border border-[#bbf7d0] rounded-full px-3.5 py-1.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1L7.5 4.5H11L8 6.5L9 10L6 8L3 10L4 6.5L1 4.5H4.5L6 1Z" fill="#10b981"/>
                  </svg>
                  <span className="text-[0.65rem] font-semibold text-[#059669]">
                    Industry average: £8–£14/employee
                  </span>
                </div>
              </div>

              {/* What's included compact list */}
              <div className="bg-[#f8fffe] px-7 py-6">
                <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[#9ca3af] mb-4">
                  Everything Included
                </p>
                <div className="space-y-2.5">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="6" fill="#10b981"/>
                        <path d="M4.5 7l2 2 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-xs text-[#374151] font-medium">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA inside card */}
              <div className="bg-white px-7 py-5 border-t border-[#e5e7eb]">
                <Link
                  to="#contact"
                  className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#10b981] text-white font-semibold text-sm transition-all duration-200 hover:bg-[#059669] hover:shadow-[0_8px_24px_rgba(16,185,129,0.35)] hover:-translate-y-0.5"
                >
                  Book a Discovery Call
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7H11.5M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <p className="text-center text-[0.65rem] text-[#9ca3af] mt-2.5">
                  No setup fees · Cancel with notice · Dedicated AM from day one
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing guarantee bar */}
        <div className="fade-up mt-12 md:mt-14 rounded-2xl bg-[#0f1724] overflow-hidden" style={{ animationDelay: '250ms' }}>
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#10b981] to-transparent" />
          <div className="px-7 py-6 md:px-10 md:py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start md:items-center gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center mt-0.5 md:mt-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2l2 4.5H16l-4 3 1.5 4.5L9 11.5 5.5 14 7 9.5 3 6.5h5L9 2Z" fill="#10b981"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-lg md:text-xl leading-snug">
                  Your employees are paid correctly and on time —{' '}
                  <span className="text-[#10b981]">every time.</span>
                </p>
                <p className="text-[#6b7280] text-sm mt-1">
                  Backed by daily reconciliation, BACS bureau processing, and dedicated oversight.
                </p>
              </div>
            </div>
            <Link
              to="/payroll"
              className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#10b981] hover:text-[#34d399] transition-colors duration-200 whitespace-nowrap"
            >
              See how it works
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
```

---

## WHAT THIS ACHIEVES

| Before | After |
|---|---|
| Plain white pricing card with green border | Structured panel: price block + comparison nudge + full inclusion list + CTA |
| "Accuracy. Security. Efficiency." bolded inline | Three principle badge chips — white pills with green checkmark and bold label |
| 7-item plain 2-column checklist | 7 feature tiles — white cards with icon, hover state, scannable grid |
| Closing statement in low-contrast white box | Full-width dark `#0f1724` guarantee bar with green accent, supporting copy, and "See how it works" link |
| Right column mostly empty space on desktop | Right column fully earns its width — pricing panel tells the complete story |
| No CTA in section | CTA embedded inside pricing panel card — decision made at the moment of persuasion |
| Industry context missing | Comparison nudge: "Industry average: £8–£14/employee" below the £3 price |

---

## MOBILE BEHAVIOUR

- Three principle badges: `flex-wrap` — stack naturally, never overflow
- Main grid: single column on mobile — feature grid first, pricing panel below
- Feature grid: single column (`grid-cols-1`) on mobile, 2-col on `sm:`
- Pricing panel: full width, no max-width constraint on mobile — fills the column cleanly
- Guarantee bar: stacks to column on mobile (`flex-col`), "See how it works" link drops below the text
- All fade-up animations triggered by Intersection Observer wired in the component

---

## NOTES

- `fade-up` / `fade-up.visible` CSS from global stylesheet — already established, no new CSS needed
- The `animate-pulse` class not used in this section — no additional global CSS required
- No external images, no new libraries, no new dependencies
- The "Industry average: £8–£14/employee" figure is a placeholder — confirm with client before launch or remove if not verifiable
