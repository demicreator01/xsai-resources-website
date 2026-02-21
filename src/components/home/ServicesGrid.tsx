import React, { useEffect, useRef } from 'react';

const accountingServices = [
    {
        label: 'Bookkeeping',
        icon: (
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <rect x="1.5" y="1.5" width="10" height="10" rx="1.5" stroke="#3b82f6" strokeWidth="1.3" />
                <path d="M3.5 5h6M3.5 7h4" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'VAT returns',
        icon: (
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M1.5 10L4 2.5l2 4 2.5-4L11 10" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Annual accounts',
        icon: (
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <rect x="2" y="1.5" width="9" height="10" rx="1.5" stroke="#3b82f6" strokeWidth="1.3" />
                <path d="M4 5h5M4 7h3" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Corporation tax',
        icon: (
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <circle cx="6.5" cy="6.5" r="5" stroke="#3b82f6" strokeWidth="1.3" />
                <path d="M4.5 6.5h4M6.5 4.5v4" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Self-assessment',
        icon: (
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5A4.5 4.5 0 0 1 11 6.5" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" />
                <path d="M4 9l2.5-2L9 9" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Companies House filing',
        icon: (
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 11V5l4.5-3.5L11 5v6" stroke="#3b82f6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="4.5" y="7.5" width="4" height="3.5" rx="0.5" stroke="#3b82f6" strokeWidth="1.3" />
            </svg>
        ),
    },
];

const adminServices = [
    {
        label: 'Director support services',
        icon: (
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <circle cx="6.5" cy="4.5" r="2.5" stroke="#10b981" strokeWidth="1.3" />
                <path d="M1.5 11.5c0-2 2-3.5 5-3.5s5 1.5 5 3.5" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Registered office solutions',
        icon: (
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M6.5 1.5C4.5 1.5 2.5 3.3 2.5 5.5c0 3 4 6 4 6s4-3 4-6c0-2.2-2-4-4-4Z" stroke="#10b981" strokeWidth="1.3" />
                <circle cx="6.5" cy="5.5" r="1.5" stroke="#10b981" strokeWidth="1.3" />
            </svg>
        ),
    },
    {
        label: 'Business documentation',
        icon: (
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <rect x="2" y="1.5" width="9" height="10" rx="1.5" stroke="#10b981" strokeWidth="1.3" />
                <path d="M4 5h5M4 7h5M4 9h3" stroke="#10b981" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Back-office coordination',
        icon: (
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <rect x="1.5" y="1.5" width="4" height="4" rx="1" stroke="#10b981" strokeWidth="1.3" />
                <rect x="7.5" y="1.5" width="4" height="4" rx="1" stroke="#10b981" strokeWidth="1.3" />
                <rect x="1.5" y="7.5" width="4" height="4" rx="1" stroke="#10b981" strokeWidth="1.3" />
                <rect x="7.5" y="7.5" width="4" height="4" rx="1" stroke="#10b981" strokeWidth="1.3" />
            </svg>
        ),
    },
];

const unifiedValues = [
    {
        label: 'One point of contact',
        sub: 'Your account manager owns everything. No hand-offs between departments.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="8" r="3.5" stroke="#10b981" strokeWidth="1.5" />
                <path d="M3.5 19.5c0-3 3.5-5.5 7.5-5.5s7.5 2.5 7.5 5.5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Aligned reporting',
        sub: 'Payroll data feeds directly into your accounts. Nothing falls through the cracks.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 15l4-6 3.5 3.5 4-7 4 5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Consistent compliance',
        sub: 'HMRC, Companies House, pension — one team holds all deadlines across all obligations.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 2.5L4 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6L11 2.5Z" stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M7.5 11l2.5 2.5 4.5-4.5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export const ServicesGrid: React.FC = () => {
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
            className="relative bg-[#eff6ff] py-20 md:py-28 px-5 md:px-8 overflow-hidden"
        >
            {/* Atmospheric background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-0 w-[600px] h-[500px]"
                    style={{ background: 'radial-gradient(ellipse at 15% 15%, rgba(59,130,246,0.08) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute bottom-0 right-0 w-[400px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 85% 85%, rgba(16,185,129,0.07) 0%, transparent 65%)' }}
                />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">

                {/* ── HEADING ── */}
                <div className="fade-up mb-10 md:mb-12">
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#3b82f6] mb-3 block">
                        Full Service
                    </span>
                    <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-4">
                        Integrated Accounting{' '}
                        <span className="text-green-primary">&amp; Admin</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-[520px] leading-relaxed">
                        Beyond payroll, we manage the financial and administrative infrastructure that keeps your business compliant and running.
                    </p>
                </div>

                {/* ── UNIFIED PANEL — one card, two disciplines ── */}
                <div className="fade-up mb-8 md:mb-10 rounded-2xl border border-[#e0eeff] bg-white shadow-[0_4px_32px_rgba(59,130,246,0.07)] overflow-hidden" style={{ animationDelay: '80ms' }}>

                    {/* Top accent — blue */}
                    <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[#3b82f6] to-transparent" />

                    {/* Panel header */}
                    <div className="px-6 py-4 md:px-8 border-b border-[#e0eeff] bg-[#f8fbff] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-primary animate-pulse" />
                            <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#374151]">
                                One Infrastructure — Two Disciplines
                            </p>
                        </div>
                        <span className="text-[0.65rem] font-semibold text-[#6b7280] bg-[#eff6ff] border border-[#e0eeff] rounded-full px-3 py-1">
                            All included
                        </span>
                    </div>

                    {/* Two columns inside one card */}
                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* LEFT — Accounting */}
                        <div className="p-6 md:p-8 md:border-r border-[#e0eeff]">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-9 h-9 rounded-xl bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M9 2v14M13.5 5H7a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6H4.5" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#0f1724]">Accounting</p>
                                    <p className="text-[0.65rem] text-[#3b82f6] font-semibold uppercase tracking-wider">6 services</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {accountingServices.map((s, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2.5 bg-[#f8fbff] border border-[#e0eeff] rounded-xl px-3 py-2.5 hover:border-[#3b82f6]/40 hover:bg-[#eff6ff] transition-all duration-200"
                                    >
                                        <div className="w-6 h-6 rounded-lg bg-white border border-[#bfdbfe] flex items-center justify-center shrink-0">
                                            {s.icon}
                                        </div>
                                        <span className="text-xs font-medium text-[#374151] leading-snug">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT — Admin */}
                        <div className="p-6 md:p-8 border-t border-[#e0eeff] md:border-t-0">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-9 h-9 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <rect x="2" y="3" width="14" height="12" rx="2" stroke="#10b981" strokeWidth="1.5" />
                                        <path d="M5 7h8M5 10h5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#0f1724]">Administrative Support</p>
                                    <p className="text-[0.65rem] text-green-primary font-semibold uppercase tracking-wider">4 services</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                {adminServices.map((s, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2.5 bg-[#f8fffe] border border-border rounded-xl px-3 py-2.5 hover:border-green-primary/40 hover:bg-[#f0fdf4] transition-all duration-200"
                                    >
                                        <div className="w-6 h-6 rounded-lg bg-white border border-[#bbf7d0] flex items-center justify-center shrink-0">
                                            {s.icon}
                                        </div>
                                        <span className="text-xs font-medium text-[#374151] leading-snug">{s.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Integration note inside admin column */}
                            <div className="mt-4 flex items-start gap-2 bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-3">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
                                    <path d="M7 1.5L13 5v4l-6 3.5L1 9V5L7 1.5Z" stroke="#10b981" strokeWidth="1.3" strokeLinejoin="round" />
                                </svg>
                                <p className="text-[0.65rem] text-[#374151] leading-relaxed">
                                    Admin support is coordinated alongside your payroll and accounting — managed by the same dedicated team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── ONE TEAM VALUE STRIP ── */}
                <div className="fade-up grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 md:mb-12" style={{ animationDelay: '140ms' }}>
                    {unifiedValues.map((v, i) => (
                        <div
                            key={i}
                            className="bg-white border border-[#e0eeff] rounded-2xl p-5 hover:border-green-primary/30 hover:shadow-[0_4px_16px_rgba(16,185,129,0.07)] transition-all duration-250"
                        >
                            <div className="w-9 h-9 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center mb-3">
                                {v.icon}
                            </div>
                            <p className="text-sm font-bold text-[#0f1724] mb-1.5">{v.label}</p>
                            <p className="text-xs text-[#6b7280] leading-relaxed">{v.sub}</p>
                        </div>
                    ))}
                </div>

                {/* ── CLOSING BRAND STATEMENT ── */}
                <div className="fade-up flex flex-col items-center gap-3 text-center" style={{ animationDelay: '180ms' }}>
                    <div className="flex items-center gap-4 w-full max-w-[500px]">
                        <div className="flex-1 h-px bg-[#e0eeff]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                        <div className="flex-1 h-px bg-[#e0eeff]" />
                    </div>
                    <p className="text-xl md:text-2xl font-semibold text-[#0f1724] max-w-[520px] leading-snug">
                        Everything aligned. Everything under{' '}
                        <span className="text-green-primary">one accountable team.</span>
                    </p>
                    <p className="text-sm text-text-muted max-w-[360px]">
                        One infrastructure. One relationship. Complete back-office coverage.
                    </p>
                </div>

            </div>
        </section>
    );
};
