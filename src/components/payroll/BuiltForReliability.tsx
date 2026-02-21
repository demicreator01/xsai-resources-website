import React, { useEffect, useRef } from 'react';

const controls = [
    {
        label: 'Strict reconciliation controls',
        sub: 'Every payroll run is balanced and verified before funds are released. Discrepancies are caught before pay date, not after.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="3" width="16" height="14" rx="2" stroke="#10b981" strokeWidth="1.5" />
                <path d="M6 10l2.5 2.5 5-5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Dedicated payroll specialists',
        sub: 'Payroll is handled by specialists, not generalists. One team, one focus — your payroll runs correctly every cycle.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="7" r="3.5" stroke="#10b981" strokeWidth="1.5" />
                <path d="M4 17c0-3 2.7-5 6-5s6 2 6 5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M14 4l1.5 1.5L14 7" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Structured approval systems',
        sub: 'Each payroll cycle passes through a defined approval chain before submission. No single point of failure.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 5h12M4 10h8M4 15h5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="16" cy="13" r="3" stroke="#10b981" strokeWidth="1.5" />
                <path d="M14.5 13l1 1 2-2" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: 'Liquidity buffers',
        sub: 'Funding shortfalls are absorbed operationally. Employees are paid on time regardless of late client funding.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="8" width="16" height="9" rx="2" stroke="#10b981" strokeWidth="1.5" />
                <path d="M6 8V6a4 4 0 0 1 8 0v2" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M10 12v2" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: 'Daily account monitoring',
        sub: 'Every client account is reviewed each business day. Anomalies are flagged and resolved before they become problems.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2 13l3-5 3 3 4-6 3 4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="15" cy="15" r="3" stroke="#10b981" strokeWidth="1.5" />
                <path d="M17.5 17.5l2 2" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
];

export const BuiltForReliability: React.FC = () => {
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
            className="relative bg-bg-page py-20 md:py-28 px-5 md:px-8 overflow-hidden"
        >
            {/* Atmospheric background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent"
                />
                <div
                    className="absolute top-0 left-0 w-[500px] h-[400px]"
                    style={{ background: 'radial-gradient(ellipse at 10% 10%, rgba(16,185,129,0.07) 0%, transparent 65%)' }}
                />
                <div
                    className="absolute bottom-0 right-0 w-[400px] h-[350px]"
                    style={{ background: 'radial-gradient(ellipse at 90% 90%, rgba(59,130,246,0.05) 0%, transparent 65%)' }}
                />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">

                {/* ── HEADING ── */}
                <div className="fade-up mb-10 md:mb-12">
                    <span className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-green-primary mb-3 block">
                        Operational Reliability
                    </span>
                    <h2 className="text-[1.9rem] md:text-[2.6rem] font-bold text-[#0f1724] leading-[1.1] tracking-tight mb-4">
                        Built for{' '}
                        <span className="text-green-primary">Reliability</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-[520px] leading-relaxed">
                        Payroll cannot fail. Every control below exists to ensure it doesn't.
                    </p>
                </div>

                {/* ── MAIN GRID ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[55%_42%] gap-6 lg:gap-10 items-start">

                    {/* LEFT: Five reliability control cards */}
                    <div className="fade-up flex flex-col gap-3" style={{ animationDelay: '80ms' }}>
                        {controls.map((control, i) => (
                            <div
                                key={i}
                                className="group flex items-start gap-4 bg-white border border-border rounded-2xl px-5 py-4 hover:border-green-primary/40 hover:shadow-[0_4px_16px_rgba(16,185,129,0.08)] hover:-translate-y-0.5 transition-all duration-250"
                            >
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center mt-0.5 group-hover:bg-green-primary group-hover:border-green-dark transition-colors duration-250">
                                    <div className="group-hover:[&_path]:stroke-white group-hover:[&_circle]:stroke-white group-hover:[&_rect]:stroke-white transition-colors duration-250 text-green-primary">
                                        {control.icon}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#0f1724] mb-1">{control.label}</p>
                                    <p className="text-xs text-[#6b7280] leading-relaxed">{control.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: Commitment panel */}
                    <div className="fade-up" style={{ animationDelay: '140ms' }}>
                        <div className="rounded-2xl bg-[#0f1724] overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.15)] sticky top-8">
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
                                        Operational Commitment
                                    </span>
                                </div>

                                {/* Core statement */}
                                <p className="text-[1.6rem] md:text-[1.9rem] font-bold text-white leading-tight mb-5">
                                    Payroll cannot fail.
                                </p>
                                <p className="text-sm text-text-muted leading-relaxed mb-7">
                                    Every control, every specialist, every approval step, every liquidity buffer exists
                                    to ensure one thing: employees are paid correctly and on time, every cycle,
                                    without exception.
                                </p>

                                {/* Divider */}
                                <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.08)' }} />

                                {/* Priority statement */}
                                <div className="space-y-2 mb-7">
                                    <div className="flex items-start gap-3">
                                        <div className="shrink-0 w-5 h-5 rounded-full bg-green-primary flex items-center justify-center mt-0.5">
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-sm font-semibold text-white leading-snug">
                                            Our first priority is always on-time, accurate payment.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="shrink-0 w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mt-0.5">
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                <path d="M2 5h6" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-text-muted leading-snug">
                                            Everything else is secondary.
                                        </p>
                                    </div>
                                </div>

                                {/* Five controls summary — compact */}
                                <div className="rounded-xl border border-white/8 p-4" style={{ background: 'rgba(255,255,255,0.03)' }}>
                                    <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-[#6b7280] mb-3">
                                        Active controls
                                    </p>
                                    <div className="grid grid-cols-1 gap-2">
                                        {[
                                            'Reconciliation',
                                            'Specialists',
                                            'Approval chain',
                                            'Liquidity buffers',
                                            'Daily monitoring',
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-primary" />
                                                <span className="text-[0.65rem] text-[#6b7280] font-medium">{item}</span>
                                            </div>
                                        ))}
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
