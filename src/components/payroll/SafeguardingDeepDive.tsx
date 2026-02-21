import React, { useEffect, useRef } from 'react';

const safeguardPoints = [
    {
        label: 'Segregated safeguarded UK bank accounts',
        sub: 'Client payroll funds are held in accounts that are legally and operationally separate from XSAI\'s own funds. Separation is maintained at all times — not just at pay date.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 2L3.5 6v5.5c0 4.5 3.2 8.5 7.5 9.5 4.3-1 7.5-5 7.5-9.5V6L11 2Z"
                    stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M7.5 11l2.5 2.5 4.5-4.5"
                    stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Used solely for payroll processing',
        sub: 'Funds have one authorised use only. They cannot be redirected, repurposed, or used to offset operational costs. This is a structural control, not a policy.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="3" y="10" width="16" height="10" rx="2" stroke="#10b981" strokeWidth="1.5" />
                <path d="M7 10V7a4 4 0 0 1 8 0v3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="11" cy="15" r="1.5" fill="#10b981" />
            </svg>
        ),
    },
    {
        label: 'Never deployed, invested, or lent',
        sub: 'Zero third-party exposure. Client funds do not enter any investment vehicle, lending arrangement, or treasury strategy. They sit and wait to be paid to employees.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="8.5" stroke="#10b981" strokeWidth="1.5" />
                <path d="M7.5 7.5l7 7M14.5 7.5l-7 7"
                    stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Reconciled and monitored daily',
        sub: 'Every client account is balanced and verified each business day. Discrepancies are identified and resolved before the next cycle opens — not after.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="3" y="4" width="16" height="15" rx="2" stroke="#10b981" strokeWidth="1.5" />
                <path d="M7 2v4M15 2v4M3 10h16" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M7 14l2 2 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export const SafeguardingDeepDive: React.FC = () => {
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
                    className="absolute top-0 right-0 w-[500px] h-[450px]"
                    style={{ background: 'radial-gradient(ellipse at 80% 10%, rgba(16,185,129,0.08) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[400px] h-[350px]"
                    style={{ background: 'radial-gradient(ellipse at 15% 90%, rgba(59,130,246,0.05) 0%, transparent 65%)' }}
                />
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">

                {/* ── HEADING ── */}
                <div className="fade-up mb-10 md:mb-12">
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                        Client Fund Safeguarding
                    </span>
                    <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-4">
                        Trust Is Critical{' '}
                        <span className="text-green-primary">in Payroll</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-[560px] leading-relaxed">
                        All employer payroll funds operate under strict structural controls.
                        This is not policy language — it is how the infrastructure is built.
                    </p>
                </div>

                {/* ── MAIN GRID ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[55%_42%] gap-6 lg:gap-10 items-start mb-10 md:mb-12">

                    {/* LEFT: 2×2 safeguarding cards — with longer sub-lines than home page */}
                    <div className="fade-up grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ animationDelay: '80ms' }}>
                        {safeguardPoints.map((point, i) => (
                            <div
                                key={i}
                                className="group bg-white border border-border rounded-2xl p-5 hover:border-green-primary/40 hover:shadow-[0_4px_20px_rgba(16,185,129,0.08)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-4 right-4 h-0.5 bg-green-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                                <div className="w-10 h-10 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center mb-4">
                                    {point.icon}
                                </div>
                                <p className="text-sm font-bold text-[#0f1724] leading-snug mb-2">
                                    {point.label}
                                </p>
                                <p className="text-xs text-[#6b7280] leading-relaxed">
                                    {point.sub}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: Trust panel — rebuilt */}
                    <div className="fade-up" style={{ animationDelay: '140ms' }}>
                        <div className="rounded-2xl bg-[#0f1724] overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.20)]">
                            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-green-primary to-transparent" />
                            <div className="p-7 md:p-8">

                                {/* Badge */}
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-7 h-7 rounded-full bg-green-primary/15 border border-green-primary/30 flex items-center justify-center">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M7 1.5L2 4.5v3.5c0 3 2.2 5.5 5 6.5 2.8-1 5-3.5 5-6.5V4.5L7 1.5Z"
                                                stroke="#10b981" strokeWidth="1.3" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-green-primary">
                                        Resilience First
                                    </span>
                                </div>

                                {/* Statement — direct brand voice, no quotes */}
                                <p className="text-[1.1rem] md:text-[1.25rem] font-bold text-white leading-snug mb-2">
                                    Stability is the first requirement
                                </p>
                                <p className="text-[1.1rem] md:text-[1.25rem] font-bold text-green-primary leading-snug mb-5">
                                    of any payroll system.
                                </p>
                                <p className="text-sm text-text-muted leading-relaxed mb-6">
                                    Our infrastructure is built to protect the assets that matter most to your employees.
                                    Every structural control exists so that when pay date arrives, funds are exactly where
                                    they need to be — in your employees' accounts.
                                </p>

                                {/* Divider */}
                                <div className="h-px bg-white/[0.08] mb-5" />

                                {/* Three operational specifics */}
                                <div className="space-y-3 mb-6">
                                    {[
                                        'UK regulated banking partners for all client account holding',
                                        'Daily balance verification — every account, every business day',
                                        'Zero third-party exposure — no lending, no investment vehicles',
                                    ].map((line, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="shrink-0 w-4 h-4 rounded-full bg-green-primary/15 border border-green-primary/30 flex items-center justify-center mt-0.5">
                                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                    <path d="M1.5 4L3 5.5L6.5 2" stroke="#10b981" strokeWidth="1.3"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="text-xs text-text-muted leading-relaxed">{line}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Compliance classification box */}
                                <div className="rounded-xl border border-green-primary/20 bg-green-primary/05 p-4"
                                    style={{ background: 'rgba(16,185,129,0.05)' }}>
                                    <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-green-primary mb-1.5">
                                        Classification
                                    </p>
                                    <p className="text-xs text-text-muted leading-relaxed">
                                        These are structural operational controls — not discretionary safeguarding policies.
                                        They apply to every client account, every cycle, without exception.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── CLOSING COMPLIANCE STATEMENT ── */}
                <div className="fade-up rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] overflow-hidden" style={{ animationDelay: '200ms' }}>
                    <div className="px-6 py-5 md:px-8 md:py-6 flex items-start gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-white border border-[#bbf7d0] flex items-center justify-center mt-0.5">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <circle cx="7" cy="7" r="5.5" stroke="#10b981" strokeWidth="1.4" />
                                <path d="M7 4.5v3M7 9.5v.5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-green-dark mb-1">Compliance Statement</p>
                            <p className="text-sm text-[#374151] leading-relaxed">
                                Payroll funds held by XSAI Resources Ltd are <strong>not exposed to third-party lending or investment activity</strong> at any point.
                                Operational stability always comes first. All client accounts are maintained in accordance with UK banking regulations and
                                subject to daily reconciliation controls.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
