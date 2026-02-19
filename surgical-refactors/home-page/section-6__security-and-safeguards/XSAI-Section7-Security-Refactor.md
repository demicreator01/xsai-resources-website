# XSAI — SECTION 7: SECURITY & SAFEGUARDING — REFACTOR PROMPT
### Replace Security.tsx entirely with the code below.

---

## THE PROBLEMS WITH THE CURRENT SECTION

1. **Four dot-bullet rows for the most compliance-critical statements on the page** — "Never deployed, invested, or lent" and "Held in segregated safeguarded UK bank accounts" are the sentences that decide whether a CFO trusts XSAI with their payroll. They deserve far more visual weight than a green dot and some text.
2. **No section label** — breaks the eyebrow pattern established across the page.
3. **No accent word on the headline** — all one colour.
4. **The dark quote card on the right is being wasted** — it has the right instinct (dark contrast panel) but the quote is in italic quotation marks, the lock icon is a faint 10% opacity watermark, and there's no supporting detail. It looks like a placeholder.
5. **Sub-heading copy is generic** — "protected by multiple layers of security and strict operational controls" adds nothing the four points don't already say.
6. **Background is `#f9fafb`** — correct per the rotation but needs atmospheric depth, especially sitting after the dark `#0f1724` WhyUs section. The contrast jump needs bridging.
7. **Layout imbalance** — four tall single-line rows on the left vs one text block on the right. The left column is dominating visually but delivering less impact.

---

## THE NEW DESIGN DIRECTION

This section should feel like a **vault door opening** — reassuring, solid, non-negotiable. The four safeguarding points become **individual statement cards**, each with its own icon and a brief explanatory line. The right column becomes a premium **trust panel** — dark, structured, with the operational resilience statement treated as a brand position, not a quote.

**Structure:**
1. Section label + headline with green accent + sub-line
2. Four safeguarding cards in a 2×2 grid — each with icon, bold statement, explanatory line
3. Right column: rebuilt trust panel — removes the italic quote, adds structure: statement + three operational proof points + "Integrity First" tag
4. Full-width closing brand line below

---

## FULL COMPONENT — REPLACE Security.tsx

```tsx
import React, { useEffect, useRef } from 'react';

const safeguardPoints = [
  {
    label: 'Held in segregated safeguarded UK bank accounts',
    sub: 'Client funds are held separately from XSAI operational accounts at all times.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L3.5 6v5.5c0 4.5 3.2 8.5 7.5 9.5 4.3-1 7.5-5 7.5-9.5V6L11 2Z"
          stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M7.5 11l2.5 2.5 4.5-4.5"
          stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Used solely for payroll processing',
    sub: 'Funds have one purpose only. They are never redirected, repurposed, or commingled.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="10" width="16" height="10" rx="2" stroke="#10b981" strokeWidth="1.5"/>
        <path d="M7 10V7a4 4 0 0 1 8 0v3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="15" r="1.5" fill="#10b981"/>
      </svg>
    ),
  },
  {
    label: 'Never deployed, invested, or lent',
    sub: 'Zero exposure to third-party risk. No lending activity. No investment deployment.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8.5" stroke="#10b981" strokeWidth="1.5"/>
        <path d="M7.5 7.5l7 7M14.5 7.5l-7 7"
          stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Reconciled and monitored daily',
    sub: 'Every account is balanced and verified each business day. No exceptions.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="4" width="16" height="15" rx="2" stroke="#10b981" strokeWidth="1.5"/>
        <path d="M7 2v4M15 2v4M3 10h16" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 14l2 2 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const operationalProofs = [
  'Strict reconciliation controls — every cycle, every day',
  'Dedicated payroll specialists with structured approval sign-off',
  'Liquidity buffers maintained — no last-minute funding exposure',
];

export const Security: React.FC = () => {
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
      className="relative bg-[#f9fafb] py-20 md:py-28 px-5 md:px-8 overflow-hidden"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[500px] h-[450px]"
          style={{ background: 'radial-gradient(ellipse at 80% 10%, rgba(16,185,129,0.07) 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[350px]"
          style={{ background: 'radial-gradient(ellipse at 15% 90%, rgba(59,130,246,0.05) 0%, transparent 65%)' }}
        />
        {/* Top border — connects from dark WhyUs section */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1120px] mx-auto">

        {/* ── HEADING ── */}
        <div className="fade-up mb-10 md:mb-12">
          <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#10b981] mb-3 block">
            Security
          </span>
          <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-4">
            Security &{' '}
            <span className="text-[#10b981]">Safeguarding</span>
          </h2>
          <p className="text-[#4b5563] text-lg max-w-[540px] leading-relaxed">
            Client payroll funds operate under strict controls.
            This is not policy language — it is how the infrastructure actually runs.
          </p>
        </div>

        {/* ── MAIN GRID: Cards left, Trust panel right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_42%] gap-6 lg:gap-10 items-start mb-12 md:mb-14">

          {/* LEFT: 2×2 safeguarding cards */}
          <div className="fade-up grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ animationDelay: '80ms' }}>
            {safeguardPoints.map((point, i) => (
              <div
                key={i}
                className="group bg-white border border-[#e5e7eb] rounded-2xl p-5 hover:border-[#10b981]/40 hover:shadow-[0_4px_20px_rgba(16,185,129,0.08)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
              >
                {/* Green top accent — appears on hover */}
                <div className="absolute top-0 left-4 right-4 h-0.5 bg-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                <div className="w-10 h-10 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center mb-4">
                  {point.icon}
                </div>
                <p className="text-sm font-bold text-[#0f1724] leading-snug mb-1.5">
                  {point.label}
                </p>
                <p className="text-xs text-[#6b7280] leading-relaxed">
                  {point.sub}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT: Trust panel */}
          <div className="fade-up" style={{ animationDelay: '140ms' }}>
            <div className="rounded-2xl bg-[#0f1724] overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.20)]">
              {/* Top accent */}
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#10b981] to-transparent" />

              <div className="p-7 md:p-8">
                {/* Trust badge */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-7 h-7 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1.5L2 4.5v3.5c0 3 2.2 5.5 5 6.5 2.8-1 5-3.5 5-6.5V4.5L7 1.5Z"
                        stroke="#10b981" strokeWidth="1.3" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[#10b981]">
                    Integrity First
                  </span>
                </div>

                {/* Main statement */}
                <p className="text-[1.15rem] md:text-[1.3rem] font-bold text-white leading-snug mb-2">
                  Operational resilience comes first.
                </p>
                <p className="text-[1.15rem] md:text-[1.3rem] font-bold text-[#10b981] leading-snug mb-6">
                  Always.
                </p>
                <p className="text-sm text-[#9ca3af] leading-relaxed mb-7">
                  Payroll is trust infrastructure — and we treat it that way.
                  Everything downstream of payroll depends on it running perfectly.
                  We do not compromise on the controls that make that possible.
                </p>

                {/* Divider */}
                <div className="h-px bg-white/08 mb-6" />

                {/* Operational proof points */}
                <div className="flex flex-col gap-3">
                  {operationalProofs.map((proof, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="shrink-0 w-4 h-4 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center mt-0.5">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4L3 5.5L6.5 2" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-xs text-[#9ca3af] leading-relaxed">{proof}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom tag */}
                <div className="mt-6 pt-5 border-t border-white/08">
                  <p className="text-[0.6rem] text-[#6b7280] tracking-wide text-center">
                    Safeguarded UK accounts · Daily reconciliation · Zero third-party exposure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CLOSING BRAND LINE ── */}
        <div className="fade-up flex flex-col items-center gap-3 text-center" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center gap-4 w-full max-w-[460px]">
            <div className="flex-1 h-px bg-[#e5e7eb]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            <div className="flex-1 h-px bg-[#e5e7eb]" />
          </div>
          <p className="text-lg md:text-xl font-semibold text-[#0f1724] max-w-[500px] leading-snug">
            Payroll is trust infrastructure —{' '}
            <span className="text-[#10b981]">and we treat it that way.</span>
          </p>
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
| Four green dot + text rows | Four 2×2 cards with icon, bold statement, explanatory sub-line, hover green accent |
| Generic sub-heading copy | Specific, direct: "This is not policy language — it is how the infrastructure actually runs." |
| Dark quote card with italic quotation marks and faint lock watermark | Structured trust panel: Integrity First badge, bold statement, body copy, 3 operational proof points, compliance footer tag |
| No section label | "Security" eyebrow in green |
| No heading accent | "& Safeguarding" in `#10b981` |
| Closing statement buried in the quote card | Full-width centred brand line below with dot-rule — consistent with Sections 2 and 5 |
| No atmospheric depth on `#f9fafb` | Green glow top-right, blue glow bottom-left, top `h-px` border connecting from dark WhyUs section |

---

## MOBILE BEHAVIOUR

- Heading + sub-line: full width, reads clearly on small screens
- 2×2 safeguarding grid: collapses to single column on mobile (`grid-cols-1`), 2-col on `sm:`
- Trust panel: full width below the cards on mobile — naturally stacks
- Trust panel internal content: no horizontal elements — all vertical stack, reads cleanly
- Operational proof points: tight gap, small text — comfortable on small screens
- Closing brand line: centred, full width — always looks intentional regardless of screen size

---

## NOTES

- `fade-up` / `fade-up.visible` from global stylesheet — already established
- `border-white/08` may need to be `border-white/[0.08]` in Tailwind v4 — adjust if it throws
- `h-px bg-white/08` divider inside trust panel — same adjustment if needed
- No external images, no new libraries, no new dependencies
- The top `h-px` gradient border at the section level creates a clean visual bridge between the dark `#0f1724` WhyUs section and this `#f9fafb` section — important for scroll continuity
