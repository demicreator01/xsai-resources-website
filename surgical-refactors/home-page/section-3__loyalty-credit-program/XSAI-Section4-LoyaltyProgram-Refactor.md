# XSAI — SECTION 4: LOYALTY CREDIT PROGRAMME — REFACTOR PROMPT
### Replace LoyaltyProgram.tsx entirely with the code below.

---

## THE PROBLEMS WITH THE CURRENT SECTION

1. **The flow diagram is wasted** — floating in a grey box, centred, disconnected from the narrative. Small, flat, no labels beyond the node names, no sense of what the flow means for the buyer.
2. **Desktop layout is broken** — the compliance disclaimer and credit options sit in a misaligned 2-column grid with dead space on the left. The disclaimer appears before the credits list, which breaks the reading flow.
3. **No section label or heading hierarchy** — jumps straight to `<h2>` with no eyebrow label, inconsistent with every other section.
4. **"Most providers retain this entirely. We take a different approach."** — the most powerful line in the section is in a left-border blockquote. It should be a standalone typographic moment.
5. **Three credit options are plain grey rows** — "Applied against future invoices", "Redeemed", "Used toward additional services" deserve individual cards with icons and brief explanatory copy.
6. **The compliance disclaimer uses an emoji (ℹ️)** — looks unprofessional for a compliance-facing fintech site. Replace with a proper SVG icon.
7. **No narrative build** — this is XSAI's most differentiated offering. The section should tell a story: industry context → the problem → XSAI's approach → how credits work → compliance assurance.

---

## THE NEW DESIGN DIRECTION

**Treat this as a product reveal section.** The Loyalty Credit Programme is what separates XSAI from every generic payroll bureau. The layout should build tension and then deliver the payoff.

**Structure:**
1. Section label + headline + narrative copy building to the key contrast line
2. The contrast line ("Most providers retain this entirely.") as a standalone typographic moment — full-width, centred, dark background strip
3. Below: two-column layout — left is the rebuilt flow diagram, right is the three credit option cards
4. Full-width compliance disclaimer bar at the bottom

**Background:** `#ffffff` per the rotation. Subtle right-side blue radial glow for depth.

---

## FULL COMPONENT — REPLACE LoyaltyProgram.tsx

```tsx
import React, { useEffect, useRef } from 'react';

export const LoyaltyProgram: React.FC = () => {
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

  const credits = [
    {
      label: 'Applied against future invoices',
      sub: 'Credits offset your next payroll billing cycle automatically.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="4" width="16" height="12" rx="2" stroke="#10b981" strokeWidth="1.5"/>
          <path d="M6 9h5M6 12h3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 9l1.5 1.5L14 12" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: 'Used toward additional services',
      sub: 'Redeploy credits against accounting, admin, or expanded support.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="7.5" stroke="#10b981" strokeWidth="1.5"/>
          <path d="M10 6.5v3.5l2.5 1.5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      label: 'Redeemed',
      sub: 'Subject to programme terms — redeem credits as agreed with your account manager.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 10h12M12 6l4 4-4 4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 md:py-28 px-5 md:px-8 overflow-hidden"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[600px] h-[500px]"
          style={{ background: 'radial-gradient(ellipse at 85% 15%, rgba(59,130,246,0.05) 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse at 10% 85%, rgba(16,185,129,0.06) 0%, transparent 65%)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1120px] mx-auto">

        {/* ── NARRATIVE INTRO ── */}
        <div className="fade-up max-w-[680px] mb-12 md:mb-14">
          <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#10b981] mb-3 block">
            Loyalty Credits
          </span>
          <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-6">
            The Loyalty Credit <span className="text-[#10b981]">Programme</span>
          </h2>
          <div className="space-y-4 text-[1.05rem] text-[#374151] leading-relaxed">
            <p>
              Payroll funds are typically received several days before employees are paid.
              This is standard industry practice across all payroll providers.
            </p>
            <p>
              Within that operational window, safeguarded client accounts may generate
              treasury benefit at bank level.
            </p>
          </div>
        </div>

        {/* ── CONTRAST MOMENT — full width dark strip ── */}
        <div className="fade-up mb-12 md:mb-16 rounded-2xl bg-[#0f1724] overflow-hidden" style={{ animationDelay: '80ms' }}>
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#10b981] to-transparent" />
          <div className="px-8 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-[1.15rem] md:text-[1.35rem] font-bold text-white leading-snug mb-2">
                Most providers retain this entirely.
              </p>
              <p className="text-[1.15rem] md:text-[1.35rem] font-bold leading-snug">
                <span className="text-[#10b981]">We take a different approach.</span>
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-2 text-sm">
              {['No investment exposure.', 'No lending activity.', 'No risk deployment.'].map((line, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M6.5 2L3 5.5L1.5 4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[#9ca3af] font-medium">{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TWO COLUMN: Flow diagram left, Credit cards right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-10 md:mb-12">

          {/* LEFT: Rebuilt flow diagram */}
          <div className="fade-up" style={{ animationDelay: '120ms' }}>
            <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#9ca3af] mb-5">
              How the programme works
            </p>

            <div className="relative rounded-2xl border border-[#e5e7eb] bg-[#f8fffe] overflow-hidden">
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#10b981] to-transparent" />
              <div className="p-6 md:p-7">

                {/* Step 1 */}
                <div className="flex items-start gap-4 mb-2">
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-[#f0fdf4] border-2 border-[#10b981] flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="#10b981" strokeWidth="1.4"/>
                        <path d="M5 7h4M5 9.5h6" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className="w-0.5 h-8 bg-[#bbf7d0] mt-1" />
                  </div>
                  <div className="pb-4">
                    <p className="text-sm font-bold text-[#0f1724]">Payroll Funds Received</p>
                    <p className="text-xs text-[#6b7280] mt-0.5 leading-snug">Employer funds arrive 3–5 working days before pay date via standard BACS cycle.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4 mb-2">
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-[#f0fdf4] border-2 border-[#10b981] flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="3" y="2" width="10" height="12" rx="1.5" stroke="#10b981" strokeWidth="1.4"/>
                        <path d="M6 6h4M6 8.5h2.5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round"/>
                        <path d="M9 11l2-1" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className="w-0.5 h-8 bg-[#bbf7d0] mt-1" />
                  </div>
                  <div className="pb-4">
                    <p className="text-sm font-bold text-[#0f1724]">Held in Safeguarded Account</p>
                    <p className="text-xs text-[#6b7280] mt-0.5 leading-snug">Funds sit in segregated UK bank accounts — never deployed, lent, or invested.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4 mb-2">
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-[#f0fdf4] border-2 border-[#10b981] flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="5.5" stroke="#10b981" strokeWidth="1.4"/>
                        <path d="M8 5v2.5l1.5 1.5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className="w-0.5 h-8 bg-[#bbf7d0] mt-1" />
                  </div>
                  <div className="pb-4">
                    <p className="text-sm font-bold text-[#0f1724]">Treasury Benefit Generated</p>
                    <p className="text-xs text-[#6b7280] mt-0.5 leading-snug">During the operational window, accounts may generate treasury benefit at bank level.</p>
                  </div>
                </div>

                {/* Step 4 — highlighted */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-9 h-9 rounded-full bg-[#10b981] border-2 border-[#059669] shadow-[0_4px_12px_rgba(16,185,129,0.35)] flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2l1.2 3.5H13l-2.9 2.1 1.1 3.4L8 9l-3.2 2 1.1-3.4L3 5.5h3.8L8 2Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-3">
                    <p className="text-sm font-bold text-[#059669]">Loyalty Credits Returned to You</p>
                    <p className="text-xs text-[#374151] mt-0.5 leading-snug">A portion is allocated back to qualifying partners as discretionary operational credits.</p>
                  </div>
                </div>

                <p className="text-[0.6rem] text-[#9ca3af] text-center mt-5 tracking-wide">
                  Discretionary operational rebate · Not an investment product · Not guaranteed income
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Credit option cards */}
          <div className="fade-up flex flex-col gap-4" style={{ animationDelay: '180ms' }}>
            <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#9ca3af]">
              Credits can be used as
            </p>

            {credits.map((credit, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 bg-white border border-[#e5e7eb] rounded-2xl p-5 hover:border-[#10b981]/40 hover:shadow-[0_4px_16px_rgba(16,185,129,0.08)] hover:-translate-y-0.5 transition-all duration-250"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center mt-0.5 group-hover:bg-[#10b981] group-hover:border-[#059669] transition-colors duration-250">
                  <div className="text-[#10b981] group-hover:[&_path]:stroke-white group-hover:[&_rect]:stroke-white group-hover:[&_circle]:stroke-white transition-colors duration-250">
                    {credit.icon}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0f1724] leading-snug mb-1">{credit.label}</p>
                  <p className="text-xs text-[#6b7280] leading-relaxed">{credit.sub}</p>
                </div>
              </div>
            ))}

            {/* Closing efficiency line */}
            <div className="mt-2 flex items-center gap-3 px-2">
              <div className="flex-1 h-px bg-[#e5e7eb]" />
              <p className="text-xs font-semibold text-[#10b981] text-center">
                Operational efficiency — shared fairly.
              </p>
              <div className="flex-1 h-px bg-[#e5e7eb]" />
            </div>
          </div>
        </div>

        {/* ── COMPLIANCE DISCLAIMER BAR ── */}
        <div className="fade-up rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] overflow-hidden" style={{ animationDelay: '220ms' }}>
          <div className="px-6 py-5 md:px-8 md:py-6 flex items-start gap-4">
            <div className="shrink-0 w-8 h-8 rounded-full bg-white border border-[#bbf7d0] flex items-center justify-center mt-0.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="5.5" stroke="#10b981" strokeWidth="1.4"/>
                <path d="M7 4.5v3M7 9.5v.5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-[#059669] mb-1">Important — Programme Classification</p>
              <p className="text-sm text-[#374151] leading-relaxed">
                The Loyalty Credit Programme is a <strong>discretionary operational rebate</strong> — not an investment product, not interest on deposits, and not guaranteed income.
                Credits are allocated at XSAI's discretion based on payroll volume, funding timing, and partnership length.
                No client funds are exposed to investment risk or third-party lending activity at any point.
              </p>
            </div>
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
| No section label, jumps straight to H2 | Eyebrow label "Loyalty Credits" → H2 with green accent word |
| Key contrast line in a left-border blockquote | Full-width dark `#0f1724` strip — largest typographic moment in the section |
| Compliance bullets inside the dark strip missing | Three "No X" lines listed cleanly on the right side of the dark strip |
| SVG flow diagram floating in a grey box | Vertical step-flow with icons, connector lines, descriptions — step 4 highlighted in green as the payoff |
| Three credit options as plain grey rows | Three cards with icons, titles, sub-copy, hover state (icon bg turns green) |
| Emoji ℹ️ disclaimer box | Proper SVG info icon, styled green disclaimer bar with bold classification label and full compliance copy |
| Desktop layout broken with dead space | Clean two-column: flow diagram left, credit cards right, properly aligned |

---

## MOBILE BEHAVIOUR

- Narrative intro: full width, single column — reads as a story before the dark strip
- Dark contrast strip: stacks to column on mobile — headline lines stack, "No X" list drops below
- Two-column grid: collapses to single column on mobile — flow diagram first, credit cards below
- Flow diagram: full width on mobile, reads as a vertical timeline naturally
- Credit cards: full width single column, comfortable touch targets
- Compliance bar: full width, icon + text stacks cleanly
- All fade-up animations triggered by Intersection Observer wired in the component

---

## NOTES

- No external images, no new libraries, no new dependencies
- `fade-up` / `fade-up.visible` from global stylesheet — already established
- The vertical connector lines in the flow diagram use `div` elements (`w-0.5 h-8 bg-[#bbf7d0]`) not SVG — this means they scale naturally with the content and don't need viewBox management
- Icon hover state on credit cards uses Tailwind group-hover — verify Tailwind v4 supports this syntax; if not, use a CSS class toggle instead
