import React, { useEffect, useRef } from 'react';

const inclusions = [
    {
        label: 'Full payroll processing',
        desc: 'Complete end-to-end payroll calculation every cycle.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="3" width="14" height="12" rx="1.5" stroke="#10b981" strokeWidth="1.4" />
                <path d="M5 8h5M5 11h8" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'RTI submissions',
        desc: 'Filed accurately with HMRC every pay period.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2l2 5h5l-4 3 1.5 5L9 12l-4.5 3L6 10 2 7h5L9 2Z" stroke="#10b981" strokeWidth="1.4" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Pension auto-enrolment',
        desc: 'Full management of workplace pension obligations.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7" stroke="#10b981" strokeWidth="1.4" />
                <path d="M9 5.5v3.5l2.5 1.5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Digital payslips',
        desc: 'Secure payslip delivery to every employee.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="#10b981" strokeWidth="1.4" />
                <path d="M6 7h6M6 10h4" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Starter & leaver handling',
        desc: 'P45s, P46s, and new starter declarations managed.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="7" cy="6" r="3" stroke="#10b981" strokeWidth="1.4" />
                <path d="M2 15.5c0-2.5 2.2-4 5-4" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M12 9v6M15 12l-3-3-3 3" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Statutory pay calculations',
        desc: 'SSP, SMP, SPP calculated correctly every time.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="2" width="14" height="14" rx="2" stroke="#10b981" strokeWidth="1.4" />
                <path d="M6 9h6M9 6v6" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Year-end P60 processing',
        desc: 'Annual P60s issued on time to all employees.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="3" width="14" height="13" rx="2" stroke="#10b981" strokeWidth="1.4" />
                <path d="M6 2v3M12 2v3M2 9h14" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M6 12.5l2 2 4-4" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Dedicated account manager',
        desc: 'One person who knows your payroll inside out.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="7" r="3.5" stroke="#10b981" strokeWidth="1.4" />
                <path d="M3 16c0-3 2.7-5 6-5s6 2 6 5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'BACS bureau handling',
        desc: 'Accredited BACS processing for every disbursement.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 11.5l4-7 3.5 5 2.5-3.5 4 5.5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export const Inclusions: React.FC = () => {
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
            className="relative bg-[#f0fdf4] py-20 md:py-28 px-5 md:px-8 overflow-hidden"
        >
            {/* Atmospheric background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 right-0 w-[500px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 85% 10%, rgba(16,185,129,0.10) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[400px] h-[350px]"
                    style={{ background: 'radial-gradient(ellipse at 10% 90%, rgba(59,130,246,0.05) 0%, transparent 65%)' }}
                />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">

                {/* ── HEADING ── */}
                <div className="fade-up mb-8 md:mb-10">
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                        Pricing & Inclusions
                    </span>
                    <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-4">
                        What's Included —{' '}
                        <span className="text-green-primary">£3 Per Employee</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-[520px] leading-relaxed">
                        Transparent, predictable billing. No per-item add-ons, no hidden complexities, no surprises.
                    </p>
                </div>

                {/* ── PRICING STATEMENT BAR ── */}
                <div className="fade-up mb-10 md:mb-12 rounded-2xl overflow-hidden border border-[#bbf7d0] shadow-[0_4px_24px_rgba(16,185,129,0.10)]" style={{ animationDelay: '80ms' }}>
                    <div className="h-0.5 w-full bg-linear-to-r from-transparent via-green-primary to-transparent" />
                    <div className="bg-white px-7 py-6 md:px-10 md:py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">

                        {/* Price */}
                        <div className="flex items-end gap-3">
                            <div>
                                <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-text-muted mb-0.5">Flat Monthly Rate</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl md:text-6xl font-bold text-green-primary leading-none">£3</span>
                                    <span className="text-lg text-[#6b7280] font-medium">/employee</span>
                                </div>
                            </div>
                            {/* Comparison nudge */}
                            <div className="mb-1 inline-flex items-center gap-1.5 bg-[#f0fdf4] border border-[#bbf7d0] rounded-full px-3 py-1.5">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M5 1L6.2 4H9L6.5 5.8l.9 3L5 7.5 2.6 8.8l.9-3L1 4h2.8L5 1Z" fill="#10b981" />
                                </svg>
                                <span className="text-[0.6rem] font-semibold text-green-dark">Industry avg: £8–£14</span>
                            </div>
                        </div>

                        {/* What this covers */}
                        <div className="flex flex-wrap gap-2 max-w-[500px]">
                            {['All 9 services included', 'No setup fee', 'No exit fee', 'Cancel with notice', 'Dedicated AM from day one'].map((tag, i) => (
                                <div key={i} className="inline-flex items-center gap-1.5 bg-[#f0fdf4] border border-[#bbf7d0] rounded-full px-3 py-1.5">
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <circle cx="5" cy="5" r="4.5" fill="#10b981" fillOpacity="0.2" />
                                        <path d="M3 5l1.5 1.5 2.5-2.5" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="text-[0.65rem] font-semibold text-[#374151]">{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── INCLUSION GRID — 3 columns desktop, 2 col tablet, 1 col mobile ── */}
                <div className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10 md:mb-12" style={{ animationDelay: '120ms' }}>
                    {inclusions.map((item, i) => (
                        <div
                            key={i}
                            className="group flex items-start gap-4 bg-white border border-border rounded-2xl px-5 py-4 hover:border-green-primary/40 hover:shadow-[0_4px_16px_rgba(16,185,129,0.08)] hover:-translate-y-0.5 transition-all duration-250"
                        >
                            <div className="shrink-0 w-9 h-9 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center mt-0.5 group-hover:bg-green-primary group-hover:border-green-dark transition-colors duration-250">
                                <div className="group-hover:[&_path]:stroke-white group-hover:[&_rect]:stroke-white group-hover:[&_circle]:stroke-white transition-colors duration-250">
                                    {item.icon}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-[#0f1724] mb-0.5">{item.label}</p>
                                <p className="text-xs text-[#6b7280] leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── CLOSING BRAND STATEMENT ── */}
                <div className="fade-up flex flex-col items-center gap-3 text-center" style={{ animationDelay: '160ms' }}>
                    <div className="flex items-center gap-4 w-full max-w-[420px]">
                        <div className="flex-1 h-px bg-[#bbf7d0]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                        <div className="flex-1 h-px bg-[#bbf7d0]" />
                    </div>
                    <p className="text-lg md:text-xl font-bold text-[#0f1724]">
                        Transparent pricing.{' '}
                        <span className="text-green-primary">No hidden per-item add-ons.</span>
                    </p>
                    <p className="text-sm text-text-muted max-w-[360px]">
                        Every service listed is included in the £3 flat rate. Nothing is gated, tiered, or charged separately.
                    </p>
                </div>

            </div>
        </section>
    );
};
