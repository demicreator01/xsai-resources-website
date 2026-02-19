# XSAI — SECTION 8: BUILT FOR BUSINESSES THAT THINK LONG TERM — REFACTOR PROMPT
### Replace the relevant section component entirely with the code below.

---

## THE PROBLEMS WITH THE CURRENT SECTION

1. **Plain centred text on white** — three paragraphs and two bold lines floating in empty space. No visual structure, no atmosphere, no reason to stop scrolling.
2. **No section label** — breaks the eyebrow pattern.
3. **No accent on the headline** — all one colour, all same weight.
4. **"It's not about hype. / It's about structure."** — the sharpest brand statement on the page is just two bold lines in the middle of a text block. It deserves a visual moment.
5. **The three rewards (scale, early organisation, partnership) are buried in a sentence** — these are the three pillars of XSAI's model and they need individual treatment.
6. **No bridge to the next section** — the page just drops into the final CTA with no momentum. This section should create the emotional and rational setup for the CTA that follows.
7. **Background is white** — coming after `#f9fafb` Security section, this creates an almost invisible section transition.

---

## THE NEW DESIGN DIRECTION

This section is the **philosophy statement** — XSAI's "why we exist." It sits between the Trust section and the final CTA, so it needs to do two things simultaneously: reinforce conviction and build momentum toward action.

**Structure:**
1. Section label + headline with accent
2. Body copy — two paragraphs, left-aligned, with the key belief statement given space
3. Three reward pillars (Scale / Early Organisation / Partnership) as compact horizontal chips with icons — shows what the model rewards concretely
4. Full-width "It's not about hype. It's about structure." as a standalone typographic centrepiece — large, split across two lines, dark + green
5. Section background: `#f8fffe` (the same near-white as the hero) — creates a visual bookend with the opening of the page

---

## FULL COMPONENT

```tsx
import React, { useEffect, useRef } from 'react';

const pillars = [
  {
    label: 'Scale',
    sub: 'As your headcount grows, your credits grow with it.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 13l4-5 3 3 4-6 3 3.5" stroke="#10b981" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Early Organisation',
    sub: 'Fund payroll early and unlock enhanced loyalty allocations.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="3" width="14" height="13" rx="2" stroke="#10b981" strokeWidth="1.5"/>
        <path d="M6 1v4M12 1v4M2 8h14" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 12l2 2 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Partnership',
    sub: 'Long-term clients receive priority tier access and strategic support.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 10.5c0-1.5 1.5-2.5 3-2.5s3 1 3 1 1.5-1 3-1 3 1 3 2.5v2H3v-2Z"
          stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="6" cy="6" r="2" stroke="#10b981" strokeWidth="1.5"/>
        <circle cx="12" cy="6" r="2" stroke="#10b981" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export const LongTerm: React.FC = () => {
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
      className="relative bg-[#f8fffe] py-20 md:py-28 px-5 md:px-8 overflow-hidden"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent"
        />
        <div
          className="absolute top-0 right-0 w-[500px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse at 80% 10%, rgba(16,185,129,0.08) 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[350px]"
          style={{ background: 'radial-gradient(ellipse at 10%, rgba(59,130,246,0.05) 0%, transparent 65%)' }}
        />
        {/* Dot grid — left side, very faint */}
        <div
          className="absolute inset-y-0 left-0 w-1/3 opacity-30 hidden lg:block"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1120px] mx-auto">

        {/* ── TOP: Label + Headline + Copy + Pillars ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-20">

          {/* Left: text */}
          <div className="fade-up">
            <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#10b981] mb-3 block">
              Our Philosophy
            </span>
            <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-6">
              Built for Businesses That{' '}
              <span className="text-[#10b981]">Think Long Term</span>
            </h2>
            <div className="space-y-4 text-[1.05rem] text-[#374151] leading-relaxed max-w-[500px]">
              <p>
                We believe operational efficiency should benefit the businesses
                creating real value — not just the providers facilitating it.
              </p>
              <p>
                Our model rewards scale, early organisation, and long-term partnership.
                Not as a marketing line — as the actual structure of how we operate.
              </p>
            </div>
          </div>

          {/* Right: three pillars */}
          <div className="fade-up flex flex-col gap-4" style={{ animationDelay: '100ms' }}>
            <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#9ca3af]">
              Our model rewards
            </p>
            {pillars.map((p, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 bg-white border border-[#e5e7eb] rounded-2xl p-5 hover:border-[#10b981]/40 hover:shadow-[0_4px_16px_rgba(16,185,129,0.08)] hover:-translate-y-0.5 transition-all duration-250"
              >
                <div className="shrink-0 w-9 h-9 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center mt-0.5 group-hover:bg-[#10b981] group-hover:border-[#059669] transition-colors duration-250">
                  <div className="group-hover:[&_path]:stroke-white group-hover:[&_rect]:stroke-white group-hover:[&_circle]:stroke-white transition-colors duration-250">
                    {p.icon}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0f1724] mb-1">{p.label}</p>
                  <p className="text-xs text-[#6b7280] leading-relaxed">{p.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PHILOSOPHY CENTREPIECE ── */}
        <div className="fade-up" style={{ animationDelay: '160ms' }}>

          {/* Decorative top rule */}
          <div className="flex items-center gap-4 mb-10 md:mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#e5e7eb]" />
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#10b981]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              <div className="w-1 h-1 rounded-full bg-[#10b981]" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#e5e7eb]" />
          </div>

          {/* The statement */}
          <div className="text-center max-w-[700px] mx-auto">
            <p className="text-[2rem] md:text-[2.8rem] lg:text-[3.2rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-2">
              It's not about hype.
            </p>
            <p className="text-[2rem] md:text-[2.8rem] lg:text-[3.2rem] font-bold text-[#10b981] leading-[1.1] tracking-tight">
              It's about structure.
            </p>
            <p className="text-[#9ca3af] text-base mt-6 max-w-[420px] mx-auto leading-relaxed">
              Structure that rewards the right behaviours, protects the right interests,
              and builds relationships that last.
            </p>
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
| Centred text block on white — nothing to anchor the eye | Two-column layout: philosophy copy left, three reward pillars right |
| "Scale, early organisation, partnership" buried in a sentence | Three individual pillar cards with icons, labels, and explanatory sub-lines |
| "It's not about hype. / It's about structure." as two bold lines mid-page | Standalone centrepiece below a decorative triple-dot rule — `text-[3.2rem]` on desktop |
| No section label | "Our Philosophy" eyebrow in green |
| No heading accent | "Think Long Term" in `#10b981` |
| Flat white background, invisible section transition | `#f8fffe` (hero match), green glow top-right, blue glow bottom-left, left dot grid, top `h-px` seam |
| No atmospheric depth | Section creates visual bookend with hero — same near-white background signals "we're back to the beginning of the story" |

---

## MOBILE BEHAVIOUR

- Two-column layout collapses to single column — copy first, pillars below
- Pillar cards: full-width stack, clean touch targets
- Philosophy centrepiece: font scales down gracefully — `text-[2rem]` on mobile, `text-[3.2rem]` on desktop
- Dot grid: `hidden lg:block` — no visual clutter on small screens
- Decorative triple-dot rule: centred, always visible, never overflows

---

## NOTES

- `fade-up` / `fade-up.visible` from global stylesheet — already established
- Background `#f8fffe` is the same as the hero — intentional. Creates a visual bookend across the page narrative.
- Icon hover state on pillar cards (icon bg turns green, strokes turn white) uses Tailwind group-hover — if Tailwind v4 has issues with `group-hover:[&_path]:stroke-white` syntax, replace with a CSS class approach
- No external images, no new libraries, no new dependencies
- Component is named `LongTerm` — update the import in `HomePage.tsx` accordingly if the filename changes
