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
                    <rect x="2" y="4" width="16" height="12" rx="2" stroke="#10b981" strokeWidth="1.5" />
                    <path d="M6 9h5M6 12h3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M14 9l1.5 1.5L14 12" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            label: 'Used toward additional services',
            sub: 'Redeploy credits against accounting, admin, or expanded support.',
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="7.5" stroke="#10b981" strokeWidth="1.5" />
                    <path d="M10 6.5v3.5l2.5 1.5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            label: 'Redeemed',
            sub: 'Subject to programme terms — redeem credits as agreed with your account manager.',
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M12 6l4 4-4 4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                        Loyalty Credits
                    </span>
                    <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-6">
                        The Loyalty Credit <span className="text-green-primary">Programme</span>
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
                    <div className="h-0.5 w-full bg-linear-to-r from-transparent via-green-primary to-transparent" />
                    <div className="px-8 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="flex-1">
                            <p className="text-[1.15rem] md:text-[1.35rem] font-bold text-white leading-snug mb-2">
                                Most providers retain this entirely.
                            </p>
                            <p className="text-[1.15rem] md:text-[1.35rem] font-bold leading-snug">
                                <span className="text-green-primary">We take a different approach.</span>
                            </p>
                        </div>
                        <div className="shrink-0 flex flex-col gap-2 text-sm">
                            {['No investment exposure.', 'No lending activity.', 'No risk deployment.'].map((line, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-green-primary/20 border border-green-primary/40 flex items-center justify-center">
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                            <path d="M6.5 2L3 5.5L1.5 4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span className="text-text-muted font-medium">{line}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── TWO COLUMN: Flow diagram left, Credit cards right ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-10 md:mb-12">

                    {/* LEFT: Rebuilt flow diagram */}
                    <div className="fade-up" style={{ animationDelay: '120ms' }}>
                        <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-text-muted mb-5">
                            How the programme works
                        </p>

                        <div className="relative rounded-2xl border border-border bg-[#f8fffe] overflow-hidden">
                            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-green-primary to-transparent" />
                            <div className="p-6 md:p-7">

                                {/* Step 1 */}
                                <div className="flex items-start gap-4 mb-2">
                                    <div className="shrink-0 flex flex-col items-center">
                                        <div className="w-9 h-9 rounded-full bg-[#f0fdf4] border-2 border-green-primary flex items-center justify-center">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="#10b981" strokeWidth="1.4" />
                                                <path d="M5 7h4M5 9.5h6" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
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
                                        <div className="w-9 h-9 rounded-full bg-[#f0fdf4] border-2 border-green-primary flex items-center justify-center">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <rect x="3" y="2" width="10" height="12" rx="1.5" stroke="#10b981" strokeWidth="1.4" />
                                                <path d="M6 6h4M6 8.5h2.5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
                                                <path d="M9 11l2-1" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
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
                                        <div className="w-9 h-9 rounded-full bg-[#f0fdf4] border-2 border-green-primary flex items-center justify-center">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <circle cx="8" cy="8" r="5.5" stroke="#10b981" strokeWidth="1.4" />
                                                <path d="M8 5v2.5l1.5 1.5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
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
                                        <div className="w-9 h-9 rounded-full bg-green-primary border-2 border-green-dark shadow-[0_4px_12px_rgba(16,185,129,0.35)] flex items-center justify-center">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M8 2l1.2 3.5H13l-2.9 2.1 1.1 3.4L8 9l-3.2 2 1.1-3.4L3 5.5h3.8L8 2Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-3">
                                        <p className="text-sm font-bold text-green-dark">Loyalty Credits Returned to You</p>
                                        <p className="text-xs text-[#374151] mt-0.5 leading-snug">A portion is allocated back to qualifying partners as discretionary operational credits.</p>
                                    </div>
                                </div>

                                <p className="text-[0.6rem] text-text-muted text-center mt-5 tracking-wide">
                                    Discretionary operational rebate · Not an investment product · Not guaranteed income
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Credit option cards */}
                    <div className="fade-up flex flex-col gap-4" style={{ animationDelay: '180ms' }}>
                        <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-text-muted">
                            Credits can be used as
                        </p>

                        {credits.map((credit, i) => (
                            <div
                                key={i}
                                className="group flex items-start gap-4 bg-white border border-border rounded-2xl p-5 hover:border-green-primary/40 hover:shadow-[0_4px_16px_rgba(16,185,129,0.08)] hover:-translate-y-0.5 transition-all duration-250"
                            >
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center mt-0.5 group-hover:bg-green-primary group-hover:border-green-dark transition-colors duration-250">
                                    <div className="text-green-primary group-hover:[&_path]:stroke-white group-hover:[&_rect]:stroke-white group-hover:[&_circle]:stroke-white transition-colors duration-250">
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
                            <div className="flex-1 h-px bg-border" />
                            <p className="text-xs font-semibold text-green-primary text-center">
                                Operational efficiency — shared fairly.
                            </p>
                            <div className="flex-1 h-px bg-border" />
                        </div>
                    </div>
                </div>

                {/* ── COMPLIANCE DISCLAIMER BAR ── */}
                <div className="fade-up rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] overflow-hidden" style={{ animationDelay: '220ms' }}>
                    <div className="px-6 py-5 md:px-8 md:py-6 flex items-start gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-white border border-[#bbf7d0] flex items-center justify-center mt-0.5">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="5.5" stroke="#10b981" strokeWidth="1.4" />
                                <path d="M7 4.5v3M7 9.5v.5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-green-dark mb-1">Important — Programme Classification</p>
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
