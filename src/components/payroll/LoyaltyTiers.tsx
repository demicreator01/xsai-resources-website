import React, { useEffect, useRef } from 'react';

const tiers = [
    {
        name: 'Standard Partner',
        tag: 'Entry Tier',
        tagStyle: 'bg-[#f0fdf4] text-green-dark border-[#bbf7d0]',
        criteria: [
            { label: 'Funding timing', value: '3 working days prior' },
            { label: 'Headcount', value: 'Any volume' },
            { label: 'Commitment', value: 'Monthly rolling' },
        ],
        allocation: 'Base Allocation',
        allocationDesc: 'Eligible for base quarterly credit allocation based on payroll volume and holding window duration.',
        cardStyle: 'bg-white border-border',
        labelStyle: 'text-[#0f1724]',
        subStyle: 'text-[#6b7280]',
        valueStyle: 'text-[#0f1724]',
        rowBorder: 'border-[#f3f4f6]',
        allocationBg: 'bg-[#f0fdf4] border-[#bbf7d0] text-green-dark',
        allocationDescStyle: 'text-[#6b7280]',
    },
    {
        name: 'Early Funding Partner',
        tag: 'Enhanced Tier',
        tagStyle: 'bg-white/20 text-white border-white/30',
        criteria: [
            { label: 'Funding timing', value: '5 working days prior' },
            { label: 'Headcount', value: 'Any volume' },
            { label: 'Commitment', value: 'Monthly rolling' },
        ],
        allocation: 'Enhanced Allocation',
        allocationDesc: 'Enhanced credit allocation reflecting the extended operational window created by early funding.',
        cardStyle: 'bg-green-primary border-green-dark',
        labelStyle: 'text-white/70',
        subStyle: 'text-white/80',
        valueStyle: 'text-white font-bold',
        rowBorder: 'border-white/20',
        allocationBg: 'bg-white/15 border-white/30 text-white',
        allocationDescStyle: 'text-white/70',
    },
    {
        name: 'Strategic Partner',
        tag: 'Priority Tier',
        tagStyle: 'bg-green-primary/15 text-green-primary border-green-primary/30',
        criteria: [
            { label: 'Funding timing', value: '5 working days prior' },
            { label: 'Headcount', value: '500+ employees' },
            { label: 'Commitment', value: 'Annual service agreement' },
        ],
        allocation: 'Priority Allocation',
        allocationDesc: 'Priority quarterly allocation with dedicated account review. Highest credit return tier in the programme.',
        cardStyle: 'bg-[#0f1724] border-[#1e293b]',
        labelStyle: 'text-text-muted',
        subStyle: 'text-text-muted',
        valueStyle: 'text-white font-bold',
        rowBorder: 'border-white/8',
        allocationBg: 'bg-green-primary/10 border-green-primary/30 text-green-primary',
        allocationDescStyle: 'text-text-muted',
    },
];

export const LoyaltyTiers: React.FC = () => {
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
                <div
                    className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent"
                />
                <div
                    className="absolute top-0 right-0 w-[500px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 85% 10%, rgba(16,185,129,0.06) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[400px] h-[350px]"
                    style={{ background: 'radial-gradient(ellipse at 10% 90%, rgba(59,130,246,0.04) 0%, transparent 65%)' }}
                />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">

                {/* ── HEADING ── */}
                <div className="fade-up mb-10 md:mb-12">
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                        Programme Tiers
                    </span>
                    <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-4">
                        Loyalty <span className="text-green-primary">Tiers</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-[520px] leading-relaxed">
                        Three tiers based on funding timing, headcount, and partnership commitment.
                        Your tier determines your quarterly allocation level.
                    </p>
                </div>

                {/* ── TIER CARDS ── */}
                <div className="fade-up grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 md:mb-10" style={{ animationDelay: '80ms' }}>
                    {tiers.map((tier, i) => (
                        <div
                            key={i}
                            className={`rounded-2xl border p-6 md:p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] ${tier.cardStyle}`}
                        >
                            {/* Tier header */}
                            <div>
                                <div className={`inline-flex items-center border rounded-full px-2.5 py-1 mb-3 ${tier.tagStyle}`}>
                                    <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase">{tier.tag}</span>
                                </div>
                                <h3 className={`text-lg font-bold leading-snug ${i === 2 ? 'text-white' : i === 1 ? 'text-white' : 'text-[#0f1724]'
                                    }`}>
                                    {tier.name}
                                </h3>
                            </div>

                            {/* Criteria rows */}
                            <div className="flex flex-col gap-0">
                                {tier.criteria.map((row, j) => (
                                    <div
                                        key={j}
                                        className={`flex items-center justify-between py-3 border-b ${tier.rowBorder}`}
                                    >
                                        <span className={`text-xs font-medium ${tier.labelStyle}`}>{row.label}</span>
                                        <span className={`text-xs ${tier.valueStyle}`}>{row.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Allocation badge + description */}
                            <div className="mt-auto">
                                <div className={`inline-flex items-center gap-1.5 border rounded-full px-3 py-1.5 mb-3 ${tier.allocationBg}`}>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M5 1L6.2 4H9L6.5 5.8l.9 3L5 7.5 2.6 8.8l.9-3L1 4h2.8L5 1Z"
                                            fill={i === 0 ? '#10b981' : 'currentColor'} />
                                    </svg>
                                    <span className="text-[0.6rem] font-bold tracking-[0.12em] uppercase">{tier.allocation}</span>
                                </div>
                                <p className={`text-xs leading-relaxed ${tier.allocationDescStyle}`}>
                                    {tier.allocationDesc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── CLOSING COMPLIANCE LINE ── */}
                <div className="fade-up flex flex-col items-center gap-3 text-center" style={{ animationDelay: '140ms' }}>
                    <div className="flex items-center gap-4 w-full max-w-[460px]">
                        <div className="flex-1 h-px bg-border" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                        <div className="flex-1 h-px bg-border" />
                    </div>
                    <p className="text-sm font-semibold text-[#374151]">
                        Allocations are reviewed quarterly and applied{' '}
                        <span className="text-green-primary">transparently.</span>
                    </p>
                    <p className="text-xs text-text-muted max-w-[420px] leading-relaxed">
                        Your dedicated account manager will confirm your tier classification and
                        provide a quarterly credit summary with each allocation cycle.
                    </p>
                </div>

            </div>
        </section>
    );
};
