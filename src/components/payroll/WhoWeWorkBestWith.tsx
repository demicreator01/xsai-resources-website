import React, { useEffect, useRef } from 'react';

const clientTypes = [
    {
        label: 'Growing SMEs',
        sub: 'Businesses scaling their headcount need payroll infrastructure that grows with them — without repricing at every milestone.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2 14l4-6 3 3 4-5 4 4" stroke="#10b981" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 6v4h-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Multi-entity businesses',
        sub: 'Multiple payrolls, one integrated team. Consolidated reporting, consistent compliance, single point of contact across all entities.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="#10b981" strokeWidth="1.5" />
                <rect x="12" y="2" width="6" height="6" rx="1.5" stroke="#10b981" strokeWidth="1.5" />
                <rect x="7" y="12" width="6" height="6" rx="1.5" stroke="#10b981" strokeWidth="1.5" />
                <path d="M5 8v2M15 8v2M5 10h10M10 10v2" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Founder-led companies',
        sub: 'Founders need a payroll partner they can trust completely and never need to think about. That\'s exactly what we\'re built to be.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="7" r="3.5" stroke="#10b981" strokeWidth="1.5" />
                <path d="M4 17c0-3 2.7-5 6-5s6 2 6 5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M14 3l1.5 1.5L14 6" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Accountancy-led referrals',
        sub: 'Accountants refer clients to XSAI because our integrated model complements their own services — no overlap, no conflict, clean handoff.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 14l2-2 2 2" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 7v3l2 1.5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Employers who value structure and transparency',
        sub: 'If your organisation demands clear processes, honest pricing, and a payroll partner that operates with the same discipline you do — we\'re a natural fit.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L3 6v5c0 4.5 3 7.5 7 9.5 4-2 7-5 7-9.5V6L10 2Z"
                    stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M7 10l2 2 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export const WhoWeWorkBestWith: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll('.fade-up') ?? [];
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
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
                    className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent"
                />
                <div
                    className="absolute top-0 right-0 w-[500px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 85% 10%, rgba(16,185,129,0.08) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[400px] h-[350px]"
                    style={{ background: 'radial-gradient(ellipse at 10% 90%, rgba(59,130,246,0.05) 0%, transparent 65%)' }}
                />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">

                {/* ── MAIN GRID ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[40%_56%] gap-10 lg:gap-14 items-start">

                    {/* LEFT: Heading + framing copy */}
                    <div className="fade-up lg:sticky lg:top-8">
                        <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                            The Right Fit
                        </span>
                        <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-5">
                            Who We Work{' '}
                            <span className="text-green-primary">Best With</span>
                        </h2>
                        <div className="space-y-4 text-[1.05rem] text-[#374151] leading-relaxed mb-8">
                            <p>
                                We're not a volume provider. We're a long-term operational partner — and that means
                                we work best with businesses that value the same things we do.
                            </p>
                            <p>
                                Structure. Transparency. Reliability.
                            </p>
                        </div>

                        {/* Honest qualifier */}
                        <div className="rounded-2xl border border-border bg-white p-5">
                            <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-text-muted mb-3">
                                A note on fit
                            </p>
                            <p className="text-sm text-[#374151] leading-relaxed mb-2">
                                If you're looking for the cheapest possible transactional payroll bureau,
                                we're probably not the right choice.
                            </p>
                            <p className="text-sm text-green-primary font-semibold leading-relaxed">
                                If you're looking for a partner who treats payroll as infrastructure —
                                and your business as a long-term relationship — we are.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: Five client type cards */}
                    <div className="fade-up flex flex-col gap-3" style={{ animationDelay: '100ms' }}>
                        {clientTypes.map((type, i) => (
                            <div
                                key={i}
                                className="group flex items-start gap-4 bg-white border border-border rounded-2xl px-5 py-4 hover:border-green-primary/40 hover:shadow-[0_4px_16px_rgba(16,185,129,0.08)] hover:-translate-y-0.5 transition-all duration-250"
                            >
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center mt-0.5 group-hover:bg-green-primary group-hover:border-green-dark transition-colors duration-250">
                                    <div className="group-hover:[&_path]:stroke-white group-hover:[&_rect]:stroke-white group-hover:[&_circle]:stroke-white transition-colors duration-250 text-green-primary">
                                        {type.icon}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#0f1724] mb-1">{type.label}</p>
                                    <p className="text-xs text-[#6b7280] leading-relaxed">{type.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};
