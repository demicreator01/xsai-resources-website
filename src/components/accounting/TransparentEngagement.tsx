import React, { useEffect, useRef } from 'react';

const engagementPoints = [
    {
        label: 'Clear fixed pricing',
        sub: 'Your fee is agreed before work begins. No hourly billing, no end-of-month surprises, no scope creep charges.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="4" width="16" height="13" rx="2" stroke="#10b981" strokeWidth="1.5" />
                <path d="M10 8v4M8 10h4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M5 4V3M15 4V3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Defined scopes of work',
        sub: 'Every engagement has a written scope. You know exactly what is included, what the timeline looks like, and what success means.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="2" width="14" height="16" rx="2" stroke="#10b981" strokeWidth="1.5" />
                <path d="M7 7h6M7 10h6M7 13h4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Structured onboarding',
        sub: 'A defined onboarding process gets your books, payroll, and compliance obligations into our system correctly from day one.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M4 6h8M4 14h5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="15" cy="10" r="3.5" stroke="#10b981" strokeWidth="1.5" />
                <path d="M13.5 10l1 1 2-2" stroke="#10b981" strokeWidth="1.2"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Dedicated contact point',
        sub: 'One named person handles your account. Not a helpdesk. Not a ticket system. A specialist who knows your business.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="8" r="3.5" stroke="#10b981" strokeWidth="1.5" />
                <path d="M4 17c0-3 2.7-5 6-5s6 2 6 5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M16 5l1.5 1.5L16 8" stroke="#10b981" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export const TransparentEngagement: React.FC = () => {
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
            className="relative bg-white py-20 md:py-28 px-5 md:px-8 overflow-hidden"
        >
            {/* Atmospheric background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
                <div
                    className="absolute top-0 left-0 w-[500px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 10% 10%, rgba(16,185,129,0.06) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute bottom-0 right-0 w-[400px] h-[350px]"
                    style={{ background: 'radial-gradient(ellipse at 90% 90%, rgba(59,130,246,0.04) 0%, transparent 65%)' }}
                />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">

                {/* ── HEADING ── */}
                <div className="fade-up mb-10 md:mb-12">
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                        How We Work
                    </span>
                    <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-4">
                        Transparent{' '}
                        <span className="text-green-primary">Engagement</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-[520px] leading-relaxed">
                        The engagement is as structured as the service. Before work begins,
                        everything is agreed, documented, and assigned.
                    </p>
                </div>

                {/* ── MAIN GRID ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">

                    {/* LEFT: Four engagement deliverable cards */}
                    <div className="fade-up flex flex-col gap-3" style={{ animationDelay: '80ms' }}>
                        {engagementPoints.map((point, i) => (
                            <div
                                key={i}
                                className="group flex items-start gap-4 bg-bg-page border border-border rounded-2xl px-5 py-4 hover:bg-white hover:border-green-primary/40 hover:shadow-[0_4px_16px_rgba(16,185,129,0.08)] hover:-translate-y-0.5 transition-all duration-250"
                            >
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center mt-0.5 group-hover:bg-green-primary group-hover:border-green-dark transition-colors duration-250">
                                    <div className="group-hover:[&_path]:stroke-white group-hover:[&_circle]:stroke-white group-hover:[&_rect]:stroke-white transition-colors duration-250">
                                        {point.icon}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#0f1724] mb-1">{point.label}</p>
                                    <p className="text-xs text-[#6b7280] leading-relaxed">{point.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: Engagement summary panel */}
                    <div className="fade-up" style={{ animationDelay: '140ms' }}>
                        <div className="rounded-2xl bg-[#0f1724] overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.15)]">
                            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-green-primary to-transparent" />
                            <div className="p-7 md:p-8">

                                {/* Badge */}
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-7 h-7 rounded-full bg-green-primary/15 border border-green-primary/30 flex items-center justify-center">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <rect x="2" y="1.5" width="10" height="11" rx="1.5" stroke="#10b981" strokeWidth="1.3" />
                                            <path d="M4.5 5h5M4.5 7.5h5M4.5 10h3" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-green-primary">
                                        Engagement Summary
                                    </span>
                                </div>

                                {/* Four point summary — compact */}
                                <div className="space-y-3 mb-6">
                                    {[
                                        { num: '01', label: 'Fixed fee agreed upfront', sub: 'No hourly billing. No surprises.' },
                                        { num: '02', label: 'Scope documented in writing', sub: 'Deliverables, timeline, inclusions.' },
                                        { num: '03', label: 'Onboarding within agreed timeline', sub: 'Structured. No loose ends.' },
                                        { num: '04', label: 'Named contact assigned', sub: 'One specialist. Always reachable.' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <span className="text-[0.6rem] font-bold text-green-primary mt-0.5 shrink-0 w-5">
                                                {item.num}
                                            </span>
                                            <div>
                                                <p className="text-xs font-bold text-white leading-snug">{item.label}</p>
                                                <p className="text-[0.65rem] text-[#6b7280]">{item.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Divider */}
                                <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.08)' }} />

                                {/* "No X" closing statements — typographic moment */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[#fef2f2] border border-[#fecaca] flex items-center justify-center shrink-0">
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <path d="M2 4h4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <p className="text-base md:text-lg font-bold text-white">No vague retainers.</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[#fef2f2] border border-[#fecaca] flex items-center justify-center shrink-0">
                                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                <path d="M2 4h4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <p className="text-base md:text-lg font-bold text-white">No drifting deliverables.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
