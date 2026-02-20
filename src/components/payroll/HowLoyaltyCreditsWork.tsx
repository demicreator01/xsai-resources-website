import React, { useEffect, useRef } from 'react';

const allocationFactors = [
    {
        label: 'Payroll volume',
        sub: 'The larger your headcount, the greater your credit allocation potential each cycle.',
        trend: 'More employees → more credits',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 14l4-6 3 3 4-5 3 3.5" stroke="#10b981" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17 8v6H3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Early funding timing',
        sub: 'Funding payroll earlier in the BACS cycle extends the operational window and increases the treasury benefit available for allocation.',
        trend: 'Earlier funding → higher allocation',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="7.5" stroke="#10b981" strokeWidth="1.5" />
                <path d="M10 6v4l3 2" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6 3.5l-2-2M14 3.5l2-2" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Length of partnership',
        sub: 'Long-term partners receive priority tier consideration. Loyalty is recognised structurally, not just in name.',
        trend: 'Longer partnership → priority tier',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 17s-7-4-7-9a7 7 0 0 1 14 0c0 5-7 9-7 9Z" stroke="#10b981" strokeWidth="1.5" />
                <path d="M10 11V8M8.5 9.5l1.5-1.5 1.5 1.5" stroke="#10b981" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

const creditUses = [
    {
        label: 'Applied against future invoices',
        sub: 'Credits offset your next payroll billing cycle automatically — reducing your effective per-employee cost.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="5" width="16" height="12" rx="2" stroke="#10b981" strokeWidth="1.5" />
                <path d="M6 10h5M6 13h3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M14 10l1.5 1.5L14 13" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Used toward additional services',
        sub: 'Redeploy credits against accounting support, admin services, or any additional XSAI service.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="#10b981" strokeWidth="1.5" />
                <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="#10b981" strokeWidth="1.5" />
                <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="#10b981" strokeWidth="1.5" />
                <path d="M11 14.5h6M14.5 11v7" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Redeemed',
        sub: 'Subject to programme terms. Redemption options are agreed with your dedicated account manager.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 10h14M12 5l5 5-5 5" stroke="#10b981" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 6v8" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
];

export const HowLoyaltyCreditsWork: React.FC = () => {
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
                    className="absolute top-0 left-0 w-[500px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 10% 10%, rgba(16,185,129,0.09) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute bottom-0 right-0 w-[400px] h-[350px]"
                    style={{ background: 'radial-gradient(ellipse at 90% 90%, rgba(59,130,246,0.05) 0%, transparent 65%)' }}
                />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#bbf7d0] to-transparent" />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">

                {/* ── HEADING ── */}
                <div className="fade-up mb-10 md:mb-12">
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#10b981] mb-3 block">
                        Credit Mechanics
                    </span>
                    <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-4">
                        How Loyalty Credits{' '}
                        <span className="text-[#10b981]">Work</span>
                    </h2>
                    <p className="text-[#4b5563] text-lg max-w-[520px] leading-relaxed">
                        Credits are allocated based on three factors — and can be deployed in three ways.
                        The more organised and committed your engagement, the more you earn.
                    </p>
                </div>

                {/* ── TWO COLUMN GRID ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-10 md:mb-12">

                    {/* LEFT: Allocation factors — how credits are earned */}
                    <div className="fade-up" style={{ animationDelay: '80ms' }}>
                        <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#9ca3af] mb-4">
                            Credits are allocated based on
                        </p>
                        <div className="flex flex-col gap-3">
                            {allocationFactors.map((factor, i) => (
                                <div
                                    key={i}
                                    className="group bg-white border border-[#e5e7eb] rounded-2xl p-5 hover:border-[#10b981]/40 hover:shadow-[0_4px_16px_rgba(16,185,129,0.08)] hover:-translate-y-0.5 transition-all duration-250"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="shrink-0 w-10 h-10 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center mt-0.5 group-hover:bg-[#10b981] group-hover:border-[#059669] transition-colors duration-250">
                                            <div className="group-hover:[&_path]:stroke-white group-hover:[&_circle]:stroke-white transition-colors duration-250">
                                                {factor.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-[#0f1724] mb-1">{factor.label}</p>
                                            <p className="text-xs text-[#6b7280] leading-relaxed mb-2">{factor.sub}</p>
                                            <div className="inline-flex items-center gap-1.5 bg-[#f0fdf4] border border-[#bbf7d0] rounded-full px-2.5 py-1">
                                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                    <path d="M1 6L3 2l2 2 1.5-2L8 6" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span className="text-[0.6rem] font-semibold text-[#059669]">{factor.trend}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Credit uses — how credits are spent */}
                    <div className="fade-up" style={{ animationDelay: '130ms' }}>
                        <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#9ca3af] mb-4">
                            Credits can be used as
                        </p>
                        <div className="flex flex-col gap-3">
                            {creditUses.map((use, i) => (
                                <div
                                    key={i}
                                    className="group bg-white border border-[#e5e7eb] rounded-2xl p-5 hover:border-[#10b981]/40 hover:shadow-[0_4px_16px_rgba(16,185,129,0.08)] hover:-translate-y-0.5 transition-all duration-250"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="shrink-0 w-10 h-10 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center mt-0.5 group-hover:bg-[#10b981] group-hover:border-[#059669] transition-colors duration-250">
                                            <div className="group-hover:[&_path]:stroke-white group-hover:[&_rect]:stroke-white transition-colors duration-250">
                                                {use.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-[#0f1724] mb-1">{use.label}</p>
                                            <p className="text-xs text-[#6b7280] leading-relaxed">{use.sub}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Discretionary note */}
                        <div className="mt-4 flex items-start gap-3 bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-3.5">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
                                <circle cx="7" cy="7" r="5.5" stroke="#10b981" strokeWidth="1.3" />
                                <path d="M7 4.5v3M7 9.5v.5" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" />
                            </svg>
                            <p className="text-[0.65rem] text-[#374151] leading-relaxed">
                                Credit allocation and redemption are managed by your dedicated account manager. All credits are
                                subject to programme terms and XSAI's discretionary allocation policy.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── CLOSING BRAND STATEMENT ── */}
                <div className="fade-up" style={{ animationDelay: '180ms' }}>
                    <div className="rounded-2xl bg-[#0f1724] overflow-hidden">
                        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#10b981] to-transparent" />
                        <div className="px-7 py-6 md:px-10 md:py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div>
                                <p className="text-white font-bold text-lg md:text-xl leading-snug mb-1">
                                    Designed to reward efficiency, scale,
                                </p>
                                <p className="text-[#10b981] font-bold text-lg md:text-xl leading-snug">
                                    and long-term collaboration.
                                </p>
                            </div>
                            <p className="text-[#6b7280] text-sm max-w-[300px] leading-relaxed shrink-0">
                                The more structured and committed your payroll operation, the more the programme returns to you.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
